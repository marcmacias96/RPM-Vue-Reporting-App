<template>
  <div class="app-container">
    <div class="filter-container">
      <el-date-picker
        v-model="listQuery.fechas"
        type="datetimerange"
        range-separator="-"
        start-placeholder="Fecha Inicio"
        end-placeholder="Fecha Fin"
        align="right"
        value-format="yyyy-MM-dd HH:mm:ss"
      />
      <el-select
        v-model="selected"
        style="width:200px;"
        multiple
        filterable
        collapse-tags
        placeholder="Estados"
      >
        <el-option
          v-for="item in listaEstados"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        Search
      </el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="exportPDF"
      >
        Export PDF
      </el-button>
    </div>
    <div class="table-container">
      <el-table
        v-loading="listLoading"
        :data="rep_orderDetails"
        border
        fit
        height="550"
        highlight-current-row
        style="width: 100%;"
      >
        <el-table-column
          label="Fecha Registro"
          width="150px"
        >
          <template slot-scope="{ row }">
            <span>{{ row.Usuario_OTs[0].FechaRegistro | moment("YY-MM-DD hh:mm:ss") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Estado Tarea"
          width="120px"
          align="center"
        >
          <template slot-scope="{ row }">
            <span>{{ tasksStatus[row.StatusOT] }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Asignado a"
          min-width="200px"
        >
          <template slot-scope="{ row }">
            <span>{{ row.usuarioByIduserasignado.Nombres }}</span>
            <span>{{ row.usuarioByIduserasignado.Apellidos }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Tipo Servicio"
          min-width="200px"
          prop="TipoServicio.TpServicio"
          align="center"
        />
        <el-table-column
          label="Nro Orden"
          width="140px"
          prop="OrdenTrabajo_Cabecera.NroOrden"
          align="center"
        />
        <el-table-column
          label="F. Est. Finalización"
          width="150px"
          prop="FechaEstimadaEntrega"
          align="center"
        />
        <el-table-column
          label="F. Est. Finalización"
          width="150px"
          prop="FechaEstimadaEntrega"
          align="center"
        >
          <template slot-scope="{ row }">
            <span>{{ row.FechaEstimadaEntrega | moment("YY-MM-DD hh:mm:ss") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Observaciones"
          min-width="300px"
          prop="Observacion"
        />
      </el-table>
      <pagination v-show="listQuery.total>0" :total="listQuery.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="handleFilter" />
    </div>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { orderDetailsByDateEnd } from '../querys/listOfQuerys'
import Pagination from '@/components/Pagination'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import moment from 'moment'

export default {
  name: 'ComplexTable',
  directives: { waves },
  components: { Pagination },
  data() {
    return {
      tasksStatus: [
        'No Iniciado',
        'Rev Jurídico',
        'Rev Jurídico C',
        'En Proceso',
        'Por Firmar',
        'Completado',
        'Pendiente',
        'Anulado'
      ],
      listaEstados: [
        { label: 'No Iniciado', value: '0' },
        { label: 'Rev Jurídico', value: '1' },
        { label: 'Rev Jud Comp', value: '2' },
        { label: 'En Proceso', value: '3' },
        { label: 'Por Firmar', value: '4' },
        { label: 'Completado', value: '5' },
        { label: 'Pendiente', value: '6' },
        { label: 'Anulado', value: '7' }
      ],
      selected: [],
      rep_orderDetails: [],
      listLoading: false,
      total: 0,
      listQuery: {
        user: '',
        total: 0,
        page: 1,
        limit: 10,
        offset: 0,
        title: '',
        type: undefined,
        sort: '',
        fechas: null
      },
      dialogFormVisible: false,
      dialogStatus: '',
      downloadLoading: false
    }
  },
  methods: {
    exportPDF() {
      this.downloadLoading = true
      this.$apollo.query({
        query: orderDetailsByDateEnd,
        variables: {
          fechaInicio: this.listQuery.fechas[0],
          fechaFin: this.listQuery.fechas[1],
          limit: this.listQuery.total,
          offset: 0,
          status: this.selected
        },
        error(error) {
          this.error = JSON.stringify(error.message)
        }
      }).then(data => {
        var count = 0
        var rows = data.data.OrdenTrabajo_Detalle.map(det => {
          var aux = {
            Nro: count++,
            fRegistro: moment(det.Usuario_OTs[0].FechaRegistro).format('YYYY-MM-DD hh:mm:ss'),
            Etarea: this.tasksStatus[det.StatusOT],
            Asignado: `${det.usuarioByIduserasignado.Nombres} ${det.usuarioByIduserasignado.Apellidos}`,
            tpTramite: det.TipoTramite.DscaTipoTramite,
            NroOrden: det.OrdenTrabajo_Cabecera.NroOrden,
            FEfin: det.FechaEstimadaEntrega,
            Observacion: det.Observacion
          }
          return aux
        })
        var columns = [
          { title: 'Nro', dataKey: 'Nro' },
          { title: 'Fecha Registro', dataKey: 'fRegistro' },
          { title: 'Estado Tarea', dataKey: 'Etarea' },
          { title: 'Asiganado a', dataKey: 'Asignado' },
          { title: 'Tipo Tramite', dataKey: 'tpTramite' },
          { title: 'Nro Orden', dataKey: 'NroOrden' },
          { title: 'Fecha E. Fin', dataKey: 'FEfin' },
          { title: 'Observaciones', dataKey: 'Observacion' }
        ]
        var doc = jsPDF('p', 'pt')
        doc.autoTable(columns, rows, {
          styles: {
            cellPadding: 5
          }
        })
        doc.save('table.pdf')
      })
      this.downloadLoading = false
    },
    handleFilter() {
      if (this.listQuery.fechas != null) {
        this.listLoading = true
        this.listQuery.offset = (this.listQuery.page - 1) * this.listQuery.limit
        this.$apollo.query({
          query: orderDetailsByDateEnd,
          variables: {
            fechaInicio: this.listQuery.fechas[0],
            fechaFin: this.listQuery.fechas[1],
            limit: this.listQuery.limit,
            offset: this.listQuery.offset,
            status: this.selected
          },
          error(error) {
            this.error = JSON.stringify(error.message)
          }
        }).then(data => {
          this.rep_orderDetails = data.data.OrdenTrabajo_Detalle
          this.listQuery.total = data.data.OrdenTrabajo_Detalle_aggregate.aggregate.count
          this.listLoading = false
        })
      }
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Tipo de trámite', 'Cantidad', 'Monto']
        const filterVal = ['DscaTipoTramite', 'Cantidad', 'AmountInvoiced']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'Reporte-tramites'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      console.log('hola')
      return this.rep_orderDetails.map(v =>
        filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        })
      )
    },
    formatPrice(value) {
      var val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>

<style scoped>
.table-container div {
  margin-top: 10px;
}
.total-text {
  font-size: 20px;
}

</style>
