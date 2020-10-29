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
        v-model="selectedEstate"
        style="width:200px;"
        filterable
        collapse-tags
        placeholder="Opcion"
      >
        <el-option
          v-for="item in DepOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input v-model="listQuery.user" placeholder="Creado por" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
        @click="exportEXCEL"
      >
        Export EXCEL
      </el-button>
    </div>
    <div class="table-container">
      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="normal"
        border
        fit
        height="550"
        highlight-current-row
        style="width: 100%;"
      >
        <el-table-column
          label="Estado"
          width="150px"
          prop="Estado"
        />
        <el-table-column
          label="Nro Ficha"
          width="100px"
          prop="Ficha"
        />
        <el-table-column
          label="Norte"
          width="150px"
          prop="Norte"
        />
        <el-table-column
          label="Sur"
          width="150px"
          align="center"
          prop="Sur"
        />
        <el-table-column
          label="Este"
          min-width="150px"
          prop="Este"
        />
        <el-table-column
          label="Oeste"
          min-width="150px"
          align="center"
          prop="Oeste"
        />
        <el-table-column
          label="Frente"
          width="150px"
          align="center"
          prop="Frente"
        />
        <el-table-column
          label="Atras"
          width="150px"
          align="center"
          prop="Atras"
        />
        <el-table-column
          label="Derecha"
          min-width="150px"
          prop="Derecho"
        />
        <el-table-column
          label="Izquierda"
          min-width="150px"
          prop="Izquierdo"
        />
        <el-table-column
          label="Lindero"
          min-width="700px"
          prop="Lindero"
        />
        <el-table-column
          label="Usuario"
          min-width="150px"
          prop="Usuario"
        />
        <el-table-column
          label="Fecha"
          width="150px"
          align="center"
        >
          <template slot-scope="{ row }">
            <span>{{ row.Fecha | moment("YY-MM-DD hh:mm:ss") }}</span>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="listQuery.total>0" :total="listQuery.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="handleFilter" />
    </div>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { linderos_vacios } from '../querys/listOfQuerys'
import Pagination from '@/components/Pagination'
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
      selectedEstate: '',
      selected: [],
      tableKey: 0,
      normal: [],
      download: [],
      listLoading: false,
      total: 0,
      listQuery: {
        total: 0,
        page: 1,
        limit: 10,
        offset: 10,
        title: '',
        type: undefined,
        sort: '',
        nroficha: '',
        norte: '',
        sur: '',
        este: '',
        oeste: '',
        frente: '',
        atras: '',
        derecho: '',
        izquierdo: '',
        lindero: '',
        usuario: '',
        fechas: null
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      DepOptions: [{ label: 'CORRECTO', value: 'CORRECTO' }, { label: 'INCORRECTO', value: 'INCORRECTO' }],
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
    exportEXCEL() {
      this.downloadLoading = true
      this.$apollo.query({
        query: linderos_vacios,
        variables: {
            fechaInicio: this.listQuery.fechas[0],
            fechaFin: this.listQuery.fechas[1],
            offset: 0,
            limit: this.listQuery.total,
            nombre: '%' + this.listQuery.usuario + '%'
        },
        error(error) {
          this.error = JSON.stringify(error.message)
        }
      }).then(data => {
                 data.data.linderos_vacios.forEach(value => {
                    var sum = value.IdNorte + value.IdSur + value.IdEste + value.IdOeste + value.Frente + value.Atras + value.Derecho + value.Izquierdo
                    var data = {
                        Ficha: value.NroFicha,
                        Norte: value.IdNorte === '1' ? 'vacio' : value.IdNorte,
                        Sur: value.IdSur === '1' ? 'vacio' : value.IdSur,
                        Este: value.IdEste === '1' ? 'vacio' : value.IdEste,
                        Oeste: value.IdOeste === '1' ? 'vacio' : value.IdOeste,
                        Frente: value.Frente === '1' ? 'vacio' : value.Frente,
                        Atras: value.Atras === '1' ? 'vacio' : value.Atras,
                        Derecho: value.Derecho === '1' ? 'vacio' : value.Derecho,
                        Izquierdo: value.Izquierdo === '1' ? 'vacio' : value.Izquierdo,
                        Lindero: value.Lindero,
                        Usuario: value.Usuario,
                        Fecha: value.fecha,
                        Estado: sum > 4 ? 'INCORRECTO' : 'CORRECTO'
                    }
                    if (this.selectedEstate === '') {
                         this.download.push(data)
                    } else if (this.selectedEstate === data.Estado) {
                        this.download.push(data)
                    }
                })
                    this.listLoading = false
                    this.listQuery.total = data.data.linderos_vacios_aggregate.aggregate.count
                    this.handleDownload(this.download)
            })
      this.downloadLoading = false
    },
    handleFilter() {
      if (this.listQuery.fechas != null) {
        if (this.selected.length === 0) {
           this.selected = [0, 1, 2, 3, 4, 5, 6, 7]
        }
        this.listLoading = true
        this.listQuery.offset = (this.listQuery.page - 1) * this.listQuery.limit
        if (this.listQuery.fechas.length > 0) {
            this.normal = []
            this.$apollo.query({
            query: linderos_vacios,
            variables: {
                fechaInicio: this.listQuery.fechas[0],
                fechaFin: this.listQuery.fechas[1],
                offset: this.listQuery.offset,
                limit: this.listQuery.limit,
                nombre: '%' + this.listQuery.usuario + '%'
            },
            error(error) {
                this.error = JSON.stringify(error.message)
            }
            }).then(data => {
                 data.data.linderos_vacios.forEach(value => {
                    var sum = value.IdNorte + value.IdSur + value.IdEste + value.IdOeste + value.Frente + value.Atras + value.Derecho + value.Izquierdo
                    var data = {
                        Ficha: value.NroFicha,
                        Norte: value.IdNorte === '1' ? 'vacio' : value.IdNorte,
                        Sur: value.IdSur === '1' ? 'vacio' : value.IdSur,
                        Este: value.IdEste === '1' ? 'vacio' : value.IdEste,
                        Oeste: value.IdOeste === '1' ? 'vacio' : value.IdOeste,
                        Frente: value.Frente === '1' ? 'vacio' : value.Frente,
                        Atras: value.Atras === '1' ? 'vacio' : value.Atras,
                        Derecho: value.Derecho === '1' ? 'vacio' : value.Derecho,
                        Izquierdo: value.Izquierdo === '1' ? 'vacio' : value.Izquierdo,
                        Lindero: value.Lindero,
                        Usuario: value.Usuario,
                        Fecha: value.fecha,
                        Estado: sum > 4 ? 'INCORRECTO' : 'CORRECTO'
                    }
                    if (this.selectedEstate === '') {
                         this.normal.push(data)
                    } else if (this.selectedEstate === data.Estado) {
                        this.normal.push(data)
                    }
                })
                    this.listLoading = false
                    this.listQuery.total = data.data.linderos_vacios_aggregate.aggregate.count
            })
        }
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
    handleDownload(rows) {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Nro de ficha', 'Norte', 'Sur', 'Este', 'Oeste', 'Frente', 'Atras', 'Izquierdo', 'Derecho', 'Lindero', 'Usuario', 'Fecha']
        const filterVal = ['NroFicha', 'Norte', 'Sur', 'Este', 'Oeste', 'Frente', 'Atras', 'Izquierdo', 'Derecho', 'Lindero', 'Usuario', 'Fecha']
        const data = this.formatJson(filterVal, rows)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'Reporte-tramites'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, rows) {
      return rows.map(v =>
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
