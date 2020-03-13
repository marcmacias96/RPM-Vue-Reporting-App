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
      default: '250px'
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
        title: {
          text: 'Recaudación Anual',
          left: 'center',
          align: 'right'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function(val) {
            return parseFloat(val[0].value).toFixed(2)
          },
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '10%',
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
          return {
            year: moment().format('YYYY')
          }
        },
        result({ data }) {
          this.chartData.labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
          var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          data.IngresosAnuales.forEach(data => {
            values[0] += data.enero == null ? 0 : data.enero
            values[1] += data.febrero == null ? 0 : data.febrero
            values[2] += data.marzo == null ? 0 : data.marzo
            values[3] += data.abril == null ? 0 : data.abril
            values[4] += data.mayo == null ? 0 : data.mayo
            values[5] += data.junio == null ? 0 : data.junio
            values[6] += data.julio == null ? 0 : data.julio
            values[7] += data.agosto == null ? 0 : data.agosto
            values[8] += data.septiembre == null ? 0 : data.septiembre
            values[9] += data.octubre == null ? 0 : data.octubre
            values[10] += data.noviembre == null ? 0 : data.noviembre
            values[11] += data.diciembre == null ? 0 : data.diciembre
          })
          this.chartData.data = values
        }
      }
    }
  }
}
</script>
