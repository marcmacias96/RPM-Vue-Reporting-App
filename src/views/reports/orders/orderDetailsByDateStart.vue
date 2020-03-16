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
        @click="handleDownload"
      >
        Exportar Excel
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
          label="Creado en"
          min-width="200px"
          prop="CreadoEn"
          align="center"
        />
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
import { orderDetailsByDateStart, detellesExcel } from '../querys/listOfQuerys'
import Pagination from '@/components/Pagination'
import 'jspdf-autotable'
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
  components: { Pagination },
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
      rows: null,
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
        { label: 'No Iniciado', value: 0 },
        { label: 'Rev Jurídico', value: 1 },
        { label: 'Rev Jud Comp', value: 2 },
        { label: 'En Proceso', value: 3 },
        { label: 'Por Firmar', value: 4 },
        { label: 'Completado', value: 5 },
        { label: 'Pendiente', value: 6 },
        { label: 'Anulado', value: 7 }
      ],
      selected: [],
      tableKey: 0,
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
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      repOptions: [{ label: 'Comprobante', key: 'NC' }, { label: 'Nota Crédito', key: 'CP' }],
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
        this.listLoading = true
        this.listQuery.offset = (this.listQuery.page - 1) * this.listQuery.limit
        this.$apollo.query({
          query: orderDetailsByDateStart,
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
      this.rep_orderDetails.splice(index, 1)
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        this.$apollo.query({
          query: detellesExcel,
          variables: {
            fechaInicio: this.listQuery.fechas[0],
            fechaFin: this.listQuery.fechas[1],
            status: this.selected
          },
          error(error) {
            this.error = JSON.stringify(error.message)
          }
        }).then(data => {
          const tHeader = ['Nro', 'Tipo Servicio', 'Fecha Registro', 'Estado Tarea', 'Asiganado a', 'Tipo Tramite', 'Nro Orden', 'Fecha Estimada Entrega', 'Observación', 'Creado En', 'Fecha Inscripción', 'Fecha Inicio Trabajo', 'Fecha Pospuesta Entrega', 'Fecha Real Entrega', 'Avaluo', 'Monto', 'Fojas Adc', 'Cantidad', 'Creado Por', 'Fecha Finalización', 'Excento a Cobro', 'Orden Gubernamental', 'Estado Orden', 'Cliente', 'Empresa', 'Representante Legal', 'Tercera Edad', 'Discapacidad']
          const filterVal = ['Nro', 'TpServicio', 'fRegistro', 'Etarea', 'Asignado', 'tpTramite', 'NroOrden', 'FEfin', 'Observacion', 'CreadoEn', 'FInscripcion', 'FInicioTrabajo', 'FPostpuestaEntrega', 'FRealEntrega', 'Avaluo', 'Monto', 'FojasAdc', 'Cantidad', 'CreadoPor', 'FFinalizacion', 'ExcentoCobro', 'OrdenGubernamental', 'EstadoOrden', 'Cliente', 'Empresa', 'RepLegal', 'TerceraEdad', 'Discapacidad']
          const Exdata = this.formatJson(filterVal, data.data.detalles_excel)
          excel.export_json_to_excel({
            header: tHeader,
            data: Exdata,
            filename: 'Reporte-ordenes'
          })
          this.downloadLoading = false
        })
      })
    },
    formatJson(filterVal, data) {
      return data.map(v =>
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

<style scoped>
.table-container div {
  margin-top: 10px;
}
.total-text {
  font-size: 20px;
}

</style>
