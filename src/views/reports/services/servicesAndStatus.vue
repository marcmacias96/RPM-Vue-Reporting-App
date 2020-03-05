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
    <el-row :gutter="5">
      <el-col>
        <el-container>
          <el-main>
            <el-table
              :key="tableKey"
              v-loading="$apollo.loading"
              :data="listaServicios"
              border
              fit
              height="600"
              highlight-current-row
              style="width: 100%;"
              @sort-change="sortChange"
            >
              <el-table-column>
                <template slot="header">
                  <span>Total Recaudado por Servicio</span>
                </template>
                <el-table-column type="expand">
                  <template>
                    <p>Estado: </p>
                    <p>Ciudad: </p>
                    <p>Dirección: </p>
                    <p>Código postal: </p>
                  </template>
                </el-table-column>
                <el-table-column label="Tipo Servicios" min-width="150px">
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
              </el-table-column>
            </el-table></el-main>
        </el-container>
      </el-col></el-row>
    <el-row>
      <el-col :span="8">
        <el-container>
          <el-main>
            <el-row :gutter="0">
              <el-col :offset="3" :xs="24" :sm="24" :lg="8">
                <div class="chart-wrapper">
                  <bar-chart :chart-data="barChartData" />
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { tiposServicios } from '../querys/listOfQuerys'
import BarChart from '../Components/BarChartArray'
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
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      totRecaudado: '',
      listaServicios: [],
      barChartData: null,
      rep_servicio: null,
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
      sortOptions: [{ label: '', key: 'asc' }, { label: 'ID Descending', key: 'desc' }],
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
        this.$apollo.query({
          query: tiposServicios,
          variables: {
            fechaInicio: this.listQuery.fechas[0].toString(),
            fechaFin: this.listQuery.fechas[1].toString()
          },
          error(error) {
            this.error = JSON.stringify(error.message)
          }
        }).then(data => {
          this.listaServicios = []
          this.rep_servicio = data.data.TipoServicio
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
          this.rep_servicio.forEach(servicio => {
            var aux = {
              Nombre: servicio.TpServicio,
              Creacion: servicio.creacion.aggregate.sum.Cantidad == null ? 0 : servicio.creacion.aggregate.sum.Cantidad,
              Abierta: servicio.abierta.aggregate.sum.Cantidad == null ? 0 : servicio.abierta.aggregate.sum.Cantidad,
              porCobrar: servicio.porCobrar.aggregate.sum.Cantidad == null ? 0 : servicio.porCobrar.aggregate.sum.Cantidad,
              Pagada: servicio.pagada.aggregate.sum.Cantidad == null ? 0 : servicio.pagada.aggregate.sum.Cantidad,
              Anulada: servicio.anulada.aggregate.sum.Cantidad == null ? 0 : servicio.anulada.aggregate.sum.Cantidad,
              enProceso: servicio.enProceso.aggregate.sum.Cantidad == null ? 0 : servicio.enProceso.aggregate.sum.Cantidad,
              paraEntrega: servicio.paraEntrega.aggregate.sum.Cantidad == null ? 0 : servicio.paraEntrega.aggregate.sum.Cantidad,
              Finalizada: servicio.finalizada.aggregate.sum.Cantidad == null ? 0 : servicio.finalizada.aggregate.sum.Cantidad,
              Total: servicio.total.aggregate.sum.Cantidad == null ? 0 : servicio.total.aggregate.sum.Cantidad,
              totalRecaudado: servicio.total.aggregate.sum.AmountInvoiced == null ? 0 : servicio.total.aggregate.sum.AmountInvoiced
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
            this.listaServicios.push(aux)
          })
          this.listaServicios.push(total)
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
        const tHeader = ['Tipo Servicios', 'Creación', 'Abierta', 'Por Cobrar', 'Pagada', 'Anulada', 'En Proceso', 'Lista Entrega', 'Finalizada', 'Cantidad', 'Total Recaudado']
        const filterVal = ['Nombre', 'Creacion', 'Abierta', 'porCobrar', 'Pagada', 'Anulada', 'enProceso', 'paraEntrega', 'Finalizada', 'Total', 'totalRecaudado']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'Reporte-Servicios-Estados'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.listaServicios.map(v =>
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
