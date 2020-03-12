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
        Export Excel
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
      v-model="rep_tramitesUsuario"
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
      <el-table-column
        label="Detalles"
        width="100px"
        align="center"
      >
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="getDetailList(row)">
            Listar
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogTableVisible" width="90%" center>
      <el-table
        :key="tableKey"
        v-loading="$apollo.loading"
        :data="listaServicios"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @sort-change="sortChange"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table
              :data="props.row.tareas"
              height="300"
              style="width: 100%"
            >
              <el-table-column
                label="Tipo Servicio"
                width="150px"
                prop="TpServicio"
              />
              <el-table-column
                label="Cantidad"
                width="100px"
                prop="Cantidad"
              />
              <el-table-column
                label="Nro Orden"
                width="130px"
                prop="NroOrden"
              />
              <el-table-column
                label="Monto"
                width="100px"
                prop="AmountInvoiced"
                align="center"
              />
              <el-table-column
                label="Est Orden"
                width="100px"
              >
                <template slot-scope="{ row }">
                  <span>{{ ordersStatus[row.Estado] }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="Est Tarea"
                width="150px"
              >
                <template slot-scope="{ row }">
                  <span>{{ tasksStatus[row.StatusOT] }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="F. Creación"
                width="160px"
              >
                <template slot-scope="{ row }">
                  <span>{{ row.CreadoEn }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="F. Inscripción"
                width="160px"
              >
                <template slot-scope="{ row }">
                  <span>{{ row.FechaInscripcion }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="F. Estimada E"
                width="160px"
              >
                <template slot-scope="{ row }">
                  <div :class="{isRed: row.Estilo.isRed, isBlue: row.Estilo.isBlue, isGreen: row.Estilo.isGreen, isYellow: row.Estilo.isYellow}">
                    <span>{{ row.FechaEstimadaEntrega }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="F.Pospuesta E"
                width="160px"
              >
                <template slot-scope="{ row }">
                  <span>{{ row.FechaPospuestaEntrega }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="F. Real Ent"
                width="160px"
              >
                <template slot-scope="{ row }">
                  <span>{{ row.FechaRealEntrega }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="F. Finalización"
                width="160px"
                prop="FechaFinalizacion"
              />
              <el-table-column
                label="Avaluo"
                width="100px"
                prop="Avaluo"
                align="center"
              />
              <el-table-column
                label="Creado por"
                width="250px"
              >
                <template slot-scope="{ row }">
                  <span>{{ row.NombresCre }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="Fojas Adc"
                width="100px"
                prop="FojasAdc"
                align="center"
              />
              <el-table-column
                label="Factura Cli"
                width="250px"
              >
                <template slot-scope="{ row }">
                  <span>{{ row.Nombres }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="Asignado a"
                width="200px"
                prop="NombresAsi"
              />
              <el-table-column
                label="Observación"
                width="200px"
                prop="Observacion"
              />
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          label="Tipo Servicio"
          min-width="450px"
          prop="TpServicio"
        />
        <el-table-column
          label="Cantidad"
          width="150px"
          prop="Cantidad"
        />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { usuarioTaksStatusByDep, listaDetallesTaskAsig } from '../querys/listOfQuerys'
import { usuarioTaksStatusByDepSub } from '../querys/listOfSubs'
import BarChart from '../Components/charts/BarChart'
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
      isRed: false,
      isGreen: false,
      isYellow: false,
      isBlue: false,
      ordersStatus: [
        'Creación',
        'Abierta',
        'Por Cobrar',
        'Pagada',
        'Anulada',
        'En Proceso',
        'Para Entrega',
        'Finalizada'
      ],
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
      userName: '',
      dialogTableVisible: false,
      userCedula: '',
      listaDetalles: [],
      listaServicios: [],
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
    getDetailList(row) {
      console.log(row)
      this.dialogTableVisible = true
      this.$apollo.query({
        query: listaDetallesTaskAsig,
        variables: {
          cedula: row.Cedula,
          fechaInicio: this.listQuery.fechas[0].toString(),
          fechaFin: this.listQuery.fechas[1].toString()
        },
        error(error) {
          this.error = JSON.stringify(error.message)
        }
      }).then(data => {
        this.listaServicios = data.data.lista_servicios
        console.log(this.listaServicios)
      })
    },
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
              Cedula: tramites.Cedula,
              noIniciado: tramites.noIniciado.aggregate.count,
              revJud: tramites.revJud.aggregate.count,
              revJudComp: tramites.revJudComp.aggregate.count,
              enProceso: tramites.enProceso.aggregate.count,
              porFirmar: tramites.porFirmar.aggregate.count,
              Completado: tramites.completado.aggregate.count,
              Pendiente: tramites.pendiente.aggregate.count,
              Anulado: tramites.anulado.aggregate.count,
              Total: tramites.total.aggregate.count,
              tipoServicios: tramites.Usuario_TipoServicios
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
          console.log(data)
          var mostrar = {}
          mostrar.nombres = []
          mostrar.totales = []
          var lista = []
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
            lista.push(aux)
          })
          this.barChartData = mostrar
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.isRed {
  background-color: red;
  color: white;
}
.isYellow {
  background-color: yellow;
    color: white;
}
.isGreen {
  background-color: green;
    color: white;
}
.isBlue {
  background-color: blue;
  color: white;
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

