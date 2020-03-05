<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.type" style="width: 140px" class="filter-item">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-date-picker
        v-model="listQuery.fechas"
        type="datetimerange"
        range-separator="-"
        start-placeholder="Fecha Inicio"
        end-placeholder="Fecha Fin"
        align="right"
        value-format="yyyy-MM-dd HH:mm:ss"
      />
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
    </div>
    <el-row :gutter="0">
      <el-col :offset="0.5" :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart :chart-data="barChartData" />
        </div>
      </el-col>
    </el-row>
    <el-table
      :key="tableKey"
      v-loading="$apollo.loading"
      :data="rep_tramitesUsuario"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="Nombre" min-width="150px">
        <template slot-scope="{ row }">
          <span>{{ row.Apellidos }}</span>
          <span>{{ row.Nombres }}</span>
        </template>
      </el-table-column>
      <el-table-column label="No Iniciado" width="100px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.noIniciado }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Revisión jurídico" width="150px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.revJud }}</span>
        </template>
      </el-table-column>
      <el-table-column label="R.J Completado" width="150px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.revJudComp }}</span>
        </template>
      </el-table-column>
      <el-table-column label="En proceso" width="100px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.enProceso }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Por firmar" width="90px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.porFirmar }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Completado" width="105px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Completado }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pendiente" width="90px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Pendiente }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Anulado" width="90px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Anulado }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Total" width="90px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Total }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { usuarioTaksStatusByDep } from '../querys/listOfQuerys'
import { usuarioTaksStatusByDepSub } from '../querys/listOfSubs'
import BarChart from '../Components/BarChart'
const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]
export default {
  name: 'ComplexTable',
  components: {
    BarChart
  },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      barChartData: null,
      tableKey: 0,
      rep_tramitesUsuario: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        name: '',
        type: '',
        sort: '',
        fechas: null
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: 'Certificados', key: 'CERTIFICADOS' }, { label: 'Inscripciones', key: 'Inscripciones' }],
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
  mounted() {
    this.$apollo.subscriptions.addtram.skip = true
  },
  methods: {
    handleFilter() {
      if (this.listQuery.fechas != null) {
        this.$apollo.subscriptions.addtram.start()
        this.$apollo.query({
          query: usuarioTaksStatusByDep,
          variables: {
            fechaInicio: this.listQuery.fechas[0].toString(),
            fechaFin: this.listQuery.fechas[1].toString(),
            departamento: this.listQuery.type
          },
          error(error) {
            this.error = JSON.stringify(error.message)
          }
        }).then(data => {
          this.rep_tramitesUsuario = []
          var mostrar = {}
          mostrar.nombres = []
          mostrar.totales = []
          data.data.Usuario.forEach(tramites => {
            var aux = {
              Nombres: tramites.Apellidos + ' ' + tramites.Nombres,
              noIniciado: tramites.noIniciado.aggregate.count,
              revJud: tramites.revJud.aggregate.count,
              revJudComp: tramites.revJudComp.aggregate.count,
              enProceso: tramites.enProceso.aggregate.count,
              porFirmar: tramites.porFirmar.aggregate.count,
              Completado: tramites.completado.aggregate.count,
              Pendiente: tramites.pendiente.aggregate.count,
              Anulado: tramites.anulado.aggregate.count,
              Total: tramites.total.aggregate.count
            }
            mostrar.nombres.push(tramites.Apellidos + ' ' + tramites.Nombres)
            mostrar.totales.push(tramites.total.aggregate.count)
            this.rep_tramitesUsuario.push(aux)
          })
          this.barChartData = mostrar
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
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.rep_tiposTramite.splice(index, 1)
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Nombre', 'No Iniciado', 'Revisión Jurídica', 'Revisión Juridíca Completada', 'En Proceso', 'Por Firmar', 'Completado', 'Pendiente', 'Anulado', 'Total']
        const filterVal = ['Nombres', 'noIniciado', 'revJud', 'revJudComp', 'enProceso', 'porFirmar', 'Completado', 'Pendiente', 'Anulado', 'Total']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'Reporte-Asignacion-Tareas-Usuario'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      console.log('hola')
      return this.rep_tramitesUsuario.map(v =>
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
    $subscribe: {
      addtram: {
        query: usuarioTaksStatusByDepSub,
        variables() {
          if (this.listQuery.fechas != null) {
            return {
              fechaInicio: this.listQuery.fechas[0].toString(),
              fechaFin: this.listQuery.fechas[1].toString(),
              departamento: this.listQuery.type
            }
          }
        },
        result({ data }) {
          var mostrar = {}
          mostrar.nombres = []
          mostrar.totales = []
          data.Usuario.forEach(tramites => {
            var aux = {
              Nombres: tramites.Apellidos + ' ' + tramites.Nombres,
              noIniciado: tramites.noIniciado.aggregate.count,
              revJud: tramites.revJud.aggregate.count,
              revJudComp: tramites.revJudComp.aggregate.count,
              enProceso: tramites.enProceso.aggregate.count,
              porFirmar: tramites.porFirmar.aggregate.count,
              Completado: tramites.completado.aggregate.count,
              Pendiente: tramites.pendiente.aggregate.count,
              Anulado: tramites.anulado.aggregate.count,
              Total: tramites.total.aggregate.count
            }
            mostrar.nombres.push(tramites.Apellidos + ' ' + tramites.Nombres)
            mostrar.totales.push(tramites.total.aggregate.count)
            this.rep_tramitesUsuario.push(aux)
          })
          this.barChartData = mostrar
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
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
