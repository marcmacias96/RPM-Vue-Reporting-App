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
      <el-select v-model="listQuery.type" placeholder="Orden" style="width: 140px" class="filter-item">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-input v-model="listQuery.title" placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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

    <el-table
      
      v-loading="$apollo.loading"
      :data="rep_tiposTramite"
      border
      fit
      height="600"
      class="table-container"
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="Tipo de trámite" min-width="150px">
        <template slot-scope="{ row }">
          <span>{{ row.DscaTipoTramite }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Cantidad" width="110px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Cantidad }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Monto" width="110px" align="center">
        <template slot-scope="{ row }">
          <span>{{ formatPrice( row.AmountInvoiced) }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { tiposTramite } from '../querys/listOfQuerys'
// arr to obj, such as { CN : "China", US : "USA" }

export default {
  name: 'ComplexTable',
  directives: { waves },
  data() {
    return {
      rep_tiposTramite: null,
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
      sortOptions: [{ label: 'Cantidad', key: 'cant' }, { label: 'Monto', key: 'mont' }],
      downloadLoading: false
    }
  },
  methods: {
    order(key) {
      var aux = null
      if (key === 'cant') {
        aux = this.rep_tiposTramite.pop()
        this.rep_tiposTramite.sort(function(a, b) {
          if (a.Cantidad < b.Cantidad) {
            return 1
          }
          if (a.Cantidad > b.Cantidad) {
            return -1
          }
          return 0
        })
        this.rep_tiposTramite.push(aux)
      } else {
        aux = this.rep_tiposTramite.pop()
        this.rep_tiposTramite.sort(function(a, b) {
          if (a.AmountInvoiced < b.AmountInvoiced) {
            return 1
          }
          if (a.AmountInvoiced > b.AmountInvoiced) {
            return -1
          }
          return 0
        })
        this.rep_tiposTramite.push(aux)
      }
    },
    handleFilter() {
      if (this.listQuery.fechas != null) {
        var nombre = '%' + this.listQuery.title + '%'
        this.$apollo.query({
          query: tiposTramite,
          variables: {
            fechaInicio: this.listQuery.fechas[0].toString(),
            fechaFin: this.listQuery.fechas[1].toString(),
            title: nombre
          },
          error(error) {
            this.error = JSON.stringify(error.message)
          }
        }).then(data => {
          this.rep_tiposTramite = []
          var total = {
            Cantidad: 0,
            AmountInvoiced: 0,
            DscaTipoTramite: 'TOTAL'
          }
          data.data.TipoTramite.forEach(tramite => {
            var aux = {
              DscaTipoTramite: tramite.DscaTipoTramite,
              Cantidad: tramite.OrdenTrabajo_Detalles_aggregate.aggregate.sum.Cantidad,
              AmountInvoiced: tramite.ProformaFacturaDetalles_aggregate.aggregate.sum.Total
            }
            this.rep_tiposTramite.push(aux)
            total.Cantidad += tramite.OrdenTrabajo_Detalles_aggregate.aggregate.sum.Cantidad
            total.AmountInvoiced += tramite.ProformaFacturaDetalles_aggregate.aggregate.sum.Total
          })
          this.total = total.AmountInvoiced
          this.rep_tiposTramite.push(total)
          this.order(this.listQuery.type)
          // ? this.listQuery.type != null : this.order(this.listQuery.type)
        })
      }
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Tipo de trámite', 'Cantidad', 'Monto']
        const filterVal = ['DscaTipoTramite', 'Cantidad', 'AmountInvoiced']
        const data = this.formatJson(filterVal, this.rep_tiposTramite)
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
