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
              :key="tableKey"
              v-loading="$apollo.loading"
              :data="tramites"
              border
              fit
              height="600"
              highlight-current-row
              style="width: 100%;"
              @sort-change="sortChange"
            >
              <el-table-column label="Tipo Tramite" min-width="150px">
                <template slot-scope="{ row }">
                  <span>{{ row.Nombre }}</span>
                </template>
              </el-table-column>
              <el-table-column label="No iniciado" width="100px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.noIniciado }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Revisión Juridico" width="87px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.revisionJuridico }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Rev. Jur. Compl." width="87px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.revisionJuridicoCompleto }}</span>
                </template>
              </el-table-column>
              <el-table-column label="En proceso" width="100px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.enProceso }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Por firmar" width="100px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.porFirmar }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Completado" width="105px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.completado }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Pendiente" width="110px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.pendiente }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Anulado" width="90px" align="center">
                <template slot-scope="{ row }">
                  <span>{{ row.anulado }}</span>
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
import { tiposTramStatusFilt, tramiteSelect } from '../querys/listOfQuerys'
const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]
// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})
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
      tableKey: 0,
      selected: [],
      totRecaudado: '',
      tramites: [],
      rep_tramites: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: '',
        type: undefined,
        sort: '',
        fechas: null
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      listaTramites: [],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [
          { required: true, message: 'type is required', trigger: 'change' }
        ],
        timestamp: [
          {
            type: 'date',
            required: true,
            message: 'timestamp is required',
            trigger: 'change'
          }
        ],
        title: [
          { required: true, message: 'title is required', trigger: 'blur' }
        ]
      },
      downloadLoading: false
    }
  },
  methods: {
    handleFilter() {
      if (this.listQuery.fechas != null) {
        if (this.selected.length === 0) {
          this.selected = this.listaTramites.map(tram => {
            return tram.value
          })
        }
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
            noIniciado: 0,
            revisionJuridico: 0,
            revisionJuridicoCompleto: 0,
            enProceso: 0,
            porFirmar: 0,
            completado: 0,
            pendiente: 0,
            anulado: 0,
            Total: 0,
            totalRecaudado: 0
          }
          this.rep_tramites.forEach(tramite => {
            var aux = {
              Nombre: tramite.DscaTipoTramite,
              noIniciado: tramite.noIniciado.aggregate.sum.Cantidad == null ? 0 : tramite.noIniciado.aggregate.sum.Cantidad,
              revisionJuridico: tramite.revisionJuridico.aggregate.sum.Cantidad == null ? 0 : tramite.revisionJuridico.aggregate.sum.Cantidad,
              revisionJuridicoCompleto: tramite.revisionJuridicoCompleto == null ? 0 : tramite.revisionJuridicoCompleto.aggregate.sum.Cantidad,
              enProceso: tramite.enProceso.aggregate.sum.Cantidad == null ? 0 : tramite.enProceso.aggregate.sum.Cantidad,
              porFirmar: tramite.porFirmar.aggregate.sum.Cantidad == null ? 0 : tramite.porFirmar.aggregate.sum.Cantidad,
              completado: tramite.completado.aggregate.sum.Cantidad == null ? 0 : tramite.completado.aggregate.sum.Cantidad,
              pendiente: tramite.pendiente.aggregate.sum.Cantidad == null ? 0 : tramite.pendiente.aggregate.sum.Cantidad,
              anulado: tramite.anulado.aggregate.sum.Cantidad == null ? 0 : tramite.anulado.aggregate.sum.Cantidad,
              Total: tramite.total.aggregate.sum.Cantidad == null ? 0 : tramite.total.aggregate.sum.Cantidad,
              totalRecaudado: tramite.totalRecaudado.aggregate.sum.Total == null ? 0 : tramite.totalRecaudado.aggregate.sum.Total
            }
            total.noIniciado += aux.noIniciado
            total.revisionJuridico += aux.revisionJuridico
            total.revisionJuridicoCompleto += aux.revisionJuridicoCompleto
            total.enProceso += aux.enProceso
            total.porFirmar += aux.porFirmar
            total.completado += aux.completado
            total.pendiente += aux.pendiente
            total.anulado += aux.anulado
            total.Total += aux.Total
            total.totalRecaudado += aux.totalRecaudado
            this.tramites.push(aux)
          })
          this.total = total.totalRecaudado
          this.tramites.push(total)
          this.selected = []
        })
      }
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Tipo Trámite', 'No iniciado', 'REV JUR', 'REV JUR COM', 'En proceso', 'Por firmar', 'Completada', 'Pendiente', 'Anulada', 'Cantidad', 'Total Recaudado']
        const filterVal = ['Nombre', 'noIniciado', 'revisionJuridico', 'revisionJuridicoCompleto', 'enProceso', 'porFirmar', 'completado', 'pendiente', 'anulado', 'Total', 'totalRecaudado']
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
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  },
  apollo: {
    listaTramites: {
      query: tramiteSelect
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
