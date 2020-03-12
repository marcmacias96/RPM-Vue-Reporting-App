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
        style="width:500px;"
        multiple
        filterable
        collapse-tags
        placeholder="Tramites"
        size="large"
      >
        <el-option
          v-for="item in listaTramites"
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
        @click="handleDownload"
      >
        Export
      </el-button>
      <el-button
        v-waves
        class="total-container"
        type="info"
      > Total Recaudado $ {{ formatPrice(total) }} </el-button>
    </div>
    <el-row :gutter="5">
      <el-col>
        <el-container>
          <el-main>
            <el-table
              v-loading="$apollo.loading"
              :data="tramites"
              border
              fit
              height="600"
              highlight-current-row
              style="width: 100%;"
            >
              <el-table-column label="Tipo Tramite" min-width="150px">
                <template slot-scope="{ row }">
                  <span>{{ row.Nombre }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Creación" width="90px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.Creacion }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Abierta" width="70px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.Abierta }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Por Cobrar" width="110px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.porCobrar }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Pagada" width="80px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.Pagada }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Anulada" width="80px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.Anulada }}</span>
                </template>
              </el-table-column>
              <el-table-column label="En Proceso" width="105px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.enProceso }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Lista Entrega" width="110px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.paraEntrega }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Finalizada" width="90px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.Finalizada }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Cantidad" width="90px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.Total }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Total Recaudado" width="140px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ formatPrice(row.totalRecaudado) }}</span>
                </template>
              </el-table-column>
            </el-table></el-main>
        </el-container>
      </el-col></el-row>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { tiposTramStatusFilt, listaTramites } from '../querys/listOfQuerys'

export default {
  name: 'ComplexTable',
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      selected: [],
      tramites: [],
      rep_tramites: null,
      total: 0,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: '',
        type: undefined,
        sort: '',
        fechas: null
      },
      listaTramites: [],
      downloadLoading: false
    }
  },
  methods: {
    handleFilter() {
      if (this.listQuery.fechas != null) {
        this.$apollo.query({
          query: tiposTramStatusFilt,
          variables: {
            fechaInicio: this.listQuery.fechas[0].toString(),
            fechaFin: this.listQuery.fechas[1].toString(),
            tramites: this.selected
          },
          error(error) {
            this.error = JSON.stringify(error.message)
          }
        }).then(data => {
          this.tramites = []
          this.rep_tramites = data.data.TipoTramite
          var total = {
            Nombre: 'TOTAL',
            Creacion: 0,
            Abierta: 0,
            porCobrar: 0,
            Pagada: 0,
            Anulada: 0,
            enProceso: 0,
            paraEntrega: 0,
            Finalizada: 0,
            Total: 0,
            totalRecaudado: 0
          }
          this.rep_tramites.forEach(tramite => {
            var aux = {
              Nombre: tramite.DscaTipoTramite,
              Creacion: tramite.creacion.aggregate.sum.Cantidad == null ? 0 : tramite.creacion.aggregate.sum.Cantidad,
              Abierta: tramite.abierta.aggregate.sum.Cantidad == null ? 0 : tramite.abierta.aggregate.sum.Cantidad,
              porCobrar: tramite.porCobrar.aggregate.sum.Cantidad == null ? 0 : tramite.porCobrar.aggregate.sum.Cantidad,
              Pagada: tramite.pagada.aggregate.sum.Cantidad == null ? 0 : tramite.pagada.aggregate.sum.Cantidad,
              Anulada: tramite.anulada.aggregate.sum.Cantidad == null ? 0 : tramite.anulada.aggregate.sum.Cantidad,
              enProceso: tramite.enProceso.aggregate.sum.Cantidad == null ? 0 : tramite.enProceso.aggregate.sum.Cantidad,
              paraEntrega: tramite.paraEntrega.aggregate.sum.Cantidad == null ? 0 : tramite.paraEntrega.aggregate.sum.Cantidad,
              Finalizada: tramite.finalizada.aggregate.sum.Cantidad == null ? 0 : tramite.finalizada.aggregate.sum.Cantidad,
              Total: tramite.total.aggregate.sum.Cantidad == null ? 0 : tramite.total.aggregate.sum.Cantidad,
              totalRecaudado: tramite.totalRecaudado.aggregate.sum.Total == null ? 0 : tramite.totalRecaudado.aggregate.sum.Total
            }
            total.Creacion += aux.Creacion
            total.Abierta += aux.Abierta
            total.porCobrar += aux.porCobrar
            total.Pagada += aux.Pagada
            total.Anulada += aux.Anulada
            total.enProceso += aux.enProceso
            total.paraEntrega += aux.paraEntrega
            total.Finalizada += aux.Finalizada
            total.Total += aux.Total
            total.totalRecaudado += aux.totalRecaudado
            this.tramites.push(aux)
          })
          this.total = total.totalRecaudado
          this.tramites.push(total)
        })
      }
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Tipo Servicios', 'Creación', 'Abierta', 'Por Cobrar', 'Pagada', 'Anulada', 'En Proceso', 'Lista Entrega', 'Finalizada', 'Cantidad', 'Total Recaudado']
        const filterVal = ['Nombre', 'Creacion', 'Abierta', 'porCobrar', 'Pagada', 'Anulada', 'enProceso', 'paraEntrega', 'Finalizada', 'Total', 'totalRecaudado']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'Reporte-Tramites-Estados'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.tramites.map(v =>
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
    },
  },
  apollo: {
    listaTramites: {
      query: listaTramites
    }
  }
}
</script>
<style lang="scss" scoped>
.total-text {
  font-size: 20px;
}
.chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
