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
        Buscar
      </el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >
        Exportar
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="$apollo.loading"
      :data="rep_alcabalas"
      border
      fit
      height="600"
      class="table-container"
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column
        label="Repertorio"
        min-width="150px"
        prop="Inscripcions[0].NroRepertorio"
      />
      <el-table-column
        label="Inscripcion"
        min-width="150px"
        prop="Inscripcions[0].NroInscripcion"
      />
      <el-table-column
        label="Nro Orden"
        min-width="150px"
        prop="OrdenTrabajo_Detalle.OrdenTrabajo_Cabecera.NroOrden"
      />
      <el-table-column
        label="Detalles"
        width="100px"
        align="center"
      >
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="getDetalleList(row)">
            Listar
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogoVisible" width="90%" center>
      <el-row type="flex" justify="end" align="middle">
        <el-col :span="2">
          <span>{{ NombreTramite }}</span>
        </el-col>
        <el-col :span="2" :offset="9">
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
        </el-col>
      </el-row>
      <el-table
        :data="listaDetalles"
        height="450"
        style="width: 100%"
      >
        <el-table-column
          label="Tipo Servicio"
          width="150px"
          prop="TpServicio"
        />
        <el-table-column
          label="Tipo Tramite"
          width="150px"
          prop="DscaTipoTramite"
        />
        <el-table-column
          label="Nro Orden"
          width="130px"
          prop="NroOrden"
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
            <span>{{ row.FechaEstimadaEntrega | moment("YYYY-MM-DD hh:mm:ss") }}</span>
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
            <span>{{ row.CreaNombre }}</span>
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
            <span>{{ row.Clinombre }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { alcabalas } from '../querys/listOfQuerys'
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
      selected: [],
      listasTramites: [],
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
      NombreTramite: '',
      listaDetalles: [],
      dialogoVisible: false,
      tableKey: 0,
      rep_alcabalas: [],
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
      sortOptions: [{ label: 'Cantidad', key: 'cant' }, { label: 'Monto', key: 'mont' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: null,
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
    /* getDetalleList(row) {
      this.dialogoVisible = true
      this.NombreTramite = row.DscaTipoTramite
      console.log(this.tiposTramite)
      var OID = row.OID.map(dep => {
        return dep.OID
      })
      this.$apollo.query({
        query: tramitesMontoDetalles,
        variables: {
          OID: OID
        },
        error(error) {
          this.error = JSON.stringify(error.message)
        }
      }).then(data => {
        this.listaDetalles = data.data.OrdenTrabajo_Detalle.map(dep => {
          var aux = {
            TpServicio: dep.TipoServicio.TpServicio,
            DscaTipoTramite: dep.TipoTramite.DscaTipoTramite,
            StatusOT: dep.StatusOT,
            CreadoEn: dep.CreadoEn,
            FechaInscripcion: dep.FechaInscripcion,
            FechaInicioTrabajo: dep.FechaInicioTrabajo,
            FechaEstimadaEntrega: dep.FechaEstimadaEntrega,
            FechaPospuestaEntrega: dep.FechaPospuestaEntrega,
            FechaRealEntrega: dep.FechaRealEntrega,
            Avaluo: dep.Avaluo,
            AmountInvoiced: dep.AmountInvoiced,
            FojasAdc: dep.FojasAdc,
            Cantidad: dep.Cantidad,
            CreaNombre: dep.usuarioByCreadopor == null ? '' : `${dep.usuarioByCreadopor.Nombres} ${dep.usuarioByCreadopor.Apellidos}`,
            FechaFinalizacion: dep.Usuario_OTs.length === 0 ? '' : dep.Usuario_OTs[0].FechaFinalizacion,
            NroOrden: dep.OrdenTrabajo_Cabecera.NroOrden,
            Estado: dep.OrdenTrabajo_Cabecera.Estado,
            Clinombre: dep.OrdenTrabajo_Cabecera.clienteByClientefactura == null ? '' : `${dep.OrdenTrabajo_Cabecera.clienteByClientefactura.Nombres} ${dep.OrdenTrabajo_Cabecera.clienteByClientefactura.Apellidos}`
          }
          return aux
        })
        console.log(this.listaDetalles)
      })
    }, */
    handleFilter() {
      if (this.listQuery.fechas != null) {
        this.$apollo.query({
          query: alcabalas,
          variables: {
            fechaInicio: this.listQuery.fechas[0].toString(),
            fechaFin: this.listQuery.fechas[1].toString()
          },
          error(error) {
            this.error = JSON.stringify(error.message)
          }
        }).then(data => {
            this.rep_alcabalas = data.data.Usuario_OT
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
      this.rep_alcabalas.splice(index, 1)
    },
    handleDownload(ty) {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        var tHeader = []
        var filterVal = []
        var data
        if (this.dialogoVisible) {
          tHeader = ['Tipo de servicio', 'Tipo de tramite', 'Estatus', 'Creado en', 'Fecha de Inscripcion', 'Fecha de Inicio Trabajo', 'Fecha de Estimada de Entrega', 'Fecha de Pospuesta de Entrega', 'Fecha de Real de Entrega', 'Avaluo', 'Monto', 'Fojas Adicionales', 'Cantidad', 'Creado por', 'Fecha de Finalizacion', 'Nro Orden', 'Estado', 'Clinombre']
          filterVal = ['TpServicio', 'DscaTipoTramite', 'StatusOT', 'CreadoEn', 'FechaInscripcion', 'FechaInicioTrabajo', 'FechaEstimadaEntrega', 'FechaPospuestaEntrega', 'FechaRealEntrega', 'Avaluo', 'AmountInvoiced', 'FojasAdc', 'Cantidad', 'CreaNombre', 'FechaFinalizacion', 'NroOrden', 'Estado', 'Clinombre']
          data = this.formatJson(filterVal, this.listaDetalles)
        } else {
          tHeader = ['Tipo de trámite', 'Cantidad', 'Monto']
          filterVal = ['DscaTipoTramite', 'Cantidad', 'AmountInvoiced']
          data = this.formatJson(filterVal, this.rep_alcabalas)
        }
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'Reporte-tramites'
        })
        this.downloadLoading = false
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

<style lang="scss" scoped>
.total-text {
  font-size: 20px;
}
.table-container {
  margin-top: 10px
}
</style>
