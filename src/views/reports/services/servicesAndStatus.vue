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
        class="total-container"
        type="info"
      > Total Recaudado $ {{ formatPrice(total) }} </el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >
        Exportar
      </el-button></div>
    <div class="table-container">
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
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table
              :data="props.row.Tareas"
              style="width: 50%"
            >
              <el-table-column
                label="Tipo Trámite"
                min-width="150px"
                prop="DscaTipoTramite"
              />
              <el-table-column
                label="Cantidad"
                width="120px"
                prop="Cantidad"
                align="center"
              />
              <el-table-column
                label="Detalles"
                width="100px"
                align="center"
              >
                <template slot-scope="{row}">
                  <el-button type="primary" size="mini" @click="getUserList(row)">
                    Listar
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
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
            <span>{{ row.paraEntrega | moment("YYYY-MM-DD hh:mm:ss") }}</span>
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
      </el-table>
    </div>
    <el-dialog :visible.sync="dialogTableVisible" width="90%" center>
      <el-row type="flex" justify="center">
        <span>{{ userName }}</span>
      </el-row>
      <el-table
        :data="listaDetalles"
        height="450"
        style="width: 100%"
      >
        <el-table-column
          label="Tipo Servicio"
          width="150px"
          prop="TipoServicio.TpServicio"
        />
        <el-table-column
          label="Tipo Tramite"
          width="150px"
          prop="TipoTramite.DscaTipoTramite"
        />
        <el-table-column
          label="Nro Orden"
          width="130px"
          prop="OrdenTrabajo_Cabecera.NroOrden"
        />
        <el-table-column
          label="Cantidad"
          width="100px"
          prop="Cantidad"
          align="center"
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
            <span>{{ ordersStatus[row.OrdenTrabajo_Cabecera.Estado] }}</span>
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
            <span>{{ row.CreadoEn | moment("YYYY-MM-DD hh:mm:ss") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="F. Inscripción"
          width="160px"
        >
          <template slot-scope="{ row }">
            <span>{{ row.FechaInscripcion | moment("YYYY-MM-DD hh:mm:ss") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="F. Estimada E"
          width="160px"
        >
          <template slot-scope="{ row }">
            <span>{{ row.FechaEstimadaEntrega | moment("YYYY-MM-DD hh:mm:ss") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="F.Pospuesta E"
          width="160px"
        >
          <template slot-scope="{ row }">
            <span>{{ row.FechaPospuestaEntrega | moment("YYYY-MM-DD hh:mm:ss") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="F. Real Ent"
          width="160px"
        >
          <template slot-scope="{ row }">
            <span>{{ row.FechaRealEntrega | moment("YYYY-MM-DD hh:mm:ss") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="F. Finalización"
          width="160px"
        >
          <template slot-scope="{ row }">
            <span>{{ row.FechaFinalizacion | moment("YYYY-MM-DD hh:mm:ss") }}</span>
          </template>
        </el-table-column>
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
            <span>{{ row.usuarioByCreadopor.Nombres }}</span>
            <span>{{ row.usuarioByCreadopor.Apellidos }}</span>
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
            <span>{{ row.OrdenTrabajo_Cabecera.clienteByClientefactura.Nombres }}</span>
            <span>{{ row.OrdenTrabajo_Cabecera.clienteByClientefactura.Apellidos }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { tiposServicios, listaDetallesServAndStat } from '../querys/listOfQuerys'
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
      userName: '',
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
      dialogTableVisible: false,
      tableKey: 0,
      totRecaudado: '',
      listaDetalles: [],
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
    getUserList(row) {
      this.userName = row.DscaTipoTramite
      this.dialogTableVisible = true
      this.$apollo.query({
        query: listaDetallesServAndStat,
        variables: {
          orders: row.OID
        },
        error(error) {
          this.error = JSON.stringify(error.message)
        }
      }).then(data => {
        this.listaDetalles = data.data.OrdenTrabajo_Detalle
      })
    },
    handleFilter() {
      if (this.listQuery.fechas != null) {
        console.log(this.listQuery.fechas[0].toString())
        console.log(this.listQuery.fechas[1].toString())
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
          this.listaServicios = data.data.rep_tiposServicios
          console.log(this.listaServicios)
          this.total = this.listaServicios[this.listaServicios.length - 1].totalRecaudado
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
.table-container div {
  margin-top: 10px
}

.total-container {
 margin-left: 40px;
}

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

