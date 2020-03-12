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

    <el-table
      v-loading="false"
      :data="rep_tramitesFilter"
      border
      fit
      class="table-container"
      height="600"
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
          <span>{{ formatPrice(row.AmountInvoiced) }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { listaTramites, tiposTramiteFilt } from '../querys/listOfQuerys'
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
      rep_tramitesFilter: null,
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
      downloadLoading: false
    }
  },
  methods: {
    handleFilter() {
      if (this.listQuery.fechas != null) {
        this.$apollo.query({
          query: tiposTramiteFilt,
          variables: {
            fechaInicio: this.listQuery.fechas[0].toString(),
            fechaFin: this.listQuery.fechas[1].toString(),
            tramites: this.selected
          },
          error(error) {
            this.error = JSON.stringify(error.message)
          }
        }).then(data => {
          this.rep_tramitesFilter = []
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
            this.rep_tramitesFilter.push(aux)
            total.Cantidad += tramite.OrdenTrabajo_Detalles_aggregate.aggregate.sum.Cantidad
            total.AmountInvoiced += tramite.ProformaFacturaDetalles_aggregate.aggregate.sum.Total
          })
          this.total = total.AmountInvoiced
          this.rep_tramitesFilter.push(total)
        })
      }
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
          filename: 'Reporte-tramites-filtrados'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.rep_tramitesFilter.map(v =>
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
  },
  apollo: {
    listaTramites: {
      query: listaTramites
    }
  }
}
</script>

<style lang="scss">
.total-text {
  font-size: 20px;
}
.table-container {
 margin-top: 10px;
}

</style>
