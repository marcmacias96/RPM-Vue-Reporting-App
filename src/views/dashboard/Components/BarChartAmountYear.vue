<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { AmountYear } from '../Querys/listOfQuerys'
import moment from 'moment'
const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      chartData: {
        labels: [],
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        if (val != null) {
          this.setOptions(val)
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions(Data) {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          formatter: function(val) {
            return val
          },
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: Data.labels,
          show: true,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: {
          name: 'Monto',
          type: 'bar',
          stack: 'vistors',
          barWidth: '80%',
          data: Data.data,
          animationDuration
        }
      })
    }
  },
  apollo: {
    $subscribe: {
      addtram: {
        query: AmountYear,
        variables() {
          this.fechas = []
          this.fechas[0] = moment().set({ 'month': 0, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[1] = moment().set({ 'month': 1, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[2] = moment().set({ 'month': 2, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[3] = moment().set({ 'month': 3, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[4] = moment().set({ 'month': 4, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[5] = moment().set({ 'month': 5, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[6] = moment().set({ 'month': 6, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[7] = moment().set({ 'month': 7, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[8] = moment().set({ 'month': 8, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[9] = moment().set({ 'month': 9, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[10] = moment().set({ 'month': 10, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[11] = moment().set({ 'month': 11, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[12] = moment().set({ 'month': 11, 'date': 31, 'hour': 23, 'minute': 59, 'second': 59 }).format('YYYY-MM-DD HH:mm:ss')
          return {
            enero: this.fechas[0],
            febrero: this.fechas[1],
            marzo: this.fechas[2],
            abril: this.fechas[3],
            mayo: this.fechas[4],
            junio: this.fechas[5],
            julio: this.fechas[6],
            agosto: this.fechas[7],
            septiembre: this.fechas[8],
            octubre: this.fechas[9],
            noviembre: this.fechas[10],
            diciembre: this.fechas[11],
            enerof: this.fechas[12]
          }
        },
        result({ data }) {
          this.chartData.labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
          var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          data.ProformaFactura.forEach(data => {
            values[0] += data.enero.aggregate.sum.Total == null ? 0 : data.enero.aggregate.sum.Total
            values[1] += data.febrero.aggregate.sum.Total == null ? 0 : data.febrero.aggregate.sum.Total
            values[2] += data.marzo.aggregate.sum.Total == null ? 0 : data.marzo.aggregate.sum.Total
            values[3] += data.abril.aggregate.sum.Total == null ? 0 : data.abril.aggregate.sum.Total
            values[4] += data.mayo.aggregate.sum.Total == null ? 0 : data.mayo.aggregate.sum.Total
            values[5] += data.junio.aggregate.sum.Total == null ? 0 : data.junio.aggregate.sum.Total
            values[6] += data.julio.aggregate.sum.Total == null ? 0 : data.julio.aggregate.sum.Total
            values[7] += data.agosto.aggregate.sum.Total == null ? 0 : data.agosto.aggregate.sum.Total
            values[8] += data.septiembre.aggregate.sum.Total == null ? 0 : data.septiembre.aggregate.sum.Total
            values[9] += data.octubre.aggregate.sum.Total == null ? 0 : data.octubre.aggregate.sum.Total
            values[10] += data.noviembre.aggregate.sum.Total == null ? 0 : data.noviembre.aggregate.sum.Total
            values[11] += data.diciembre.aggregate.sum.Total == null ? 0 : data.diciembre.aggregate.sum.Total
          })
          this.chartData.data = values
        }
      }
    }
  }
}
</script>
