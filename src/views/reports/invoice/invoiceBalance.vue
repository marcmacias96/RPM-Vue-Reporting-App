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
      <el-input v-model="listQuery.title" placeholder="Nro Comprobante" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.user" placeholder="Usuario" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select
        v-model="selected"
        placeholder="Tipo Reporte"
      >
        <el-option
          v-for="item in repOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
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
        class="total-container"
        type="info"
      > Total Recaudado $ {{ formatPrice(total) }} </el-button>
    </div>
    <div class="table-container">
      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="rep_comprobantes"
        border
        fit
        height="550"
        highlight-current-row
        style="width: 100%;"
      >
        <el-table-column
          label="Comprobante"
          width="150px"
          prop="ProformaFactura.NroFactura"
          align="center"
        />
        <el-table-column
          label="Fecha-Hora"
          width="120px"
          prop="ProformaFactura.FacturadoEn"
          align="center"
        />
        <el-table-column
          label="Cedula"
          width="130px"
          prop="ProformaFactura.clienteByCliente.CedRuc"
          align="center"
        />
        <el-table-column
          label="Contribuyente"
          min-width="200px"
        >
          <template slot-scope="{ row }">
            <span>{{ row.ProformaFactura.clienteByCliente.Nombres }}</span>
            <span>{{ row.ProformaFactura.clienteByCliente.Apellidos }}</span>
            <span>{{ row.ProformaFactura.clienteByCliente.NombreEmpresa }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Creado Por"
          min-width="200px"
        >
          <template slot-scope="{ row }">
            <span>{{ row.ProformaFactura.usuarioByCreadopor.Nombres }}</span>
            <span>{{ row.ProformaFactura.usuarioByCreadopor.Apellidos }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Cantidad"
          width="90px"
          prop="CantidadFactura"
          align="center"
        />
        <el-table-column
          label="Descuento"
          width="100px"
          prop="Dscto"
          align="center"
        />
        <el-table-column
          label="Valor Unitario"
          width="120px"
          prop="ValorUnitario"
          align="center"
        />
        <el-table-column
          label="IVA"
          width="90px"
          prop="Impuesto"
          align="center"
        />
        <el-table-column
          label="Total"
          width="90px"
          prop="Total"
          align="center"
        />
      </el-table>
      <pagination v-show="listQuery.total>0" :total="listQuery.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="handleFilter" />
    </div>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { invoiceBalance } from '../querys/listOfQuerys'
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
      selected: '',
      tableKey: 0,
      rep_comprobantes: [],
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
        var numOrden = '%' + this.listQuery.title + '%'
        var tipo = '%' + this.selected + '%'
        var usuario = '%' + this.listQuery.user + '%'
        this.listQuery.offset = (this.listQuery.page - 1) * this.listQuery.limit
        this.$apollo.query({
          query: invoiceBalance,
          variables: {
            fechaInicio: this.listQuery.fechas[0],
            fechaFin: this.listQuery.fechas[1],
            factura: numOrden,
            tipo: tipo,
            offset: this.listQuery.offset,
            limit: this.listQuery.limit,
            usuario: usuario
          },
          error(error) {
            this.error = JSON.stringify(error.message)
          }
        }).then(data => {
          this.total = data.data.ProformaFacturaDetalle_aggregate.aggregate.sum.Total
          this.rep_comprobantes = data.data.ProformaFacturaDetalle
          this.listQuery.total = data.data.ProformaFacturaDetalle_aggregate.aggregate.Total
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
      this.rep_comprobantes.splice(index, 1)
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
      return this.rep_comprobantes.map(v =>
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
