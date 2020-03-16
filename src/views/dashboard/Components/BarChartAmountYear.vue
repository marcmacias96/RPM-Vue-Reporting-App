<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { SubAmountYear, QueryAmountYear } from '../Querys/listOfQuerys'
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
      years: [],
      chartData: {
        labels: [],
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dataLastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    decimal(num, deci) {
      var valor = Math.pow(10, deci || 2)
      return parseInt(num * valor, 10) / valor
    },
    LastYear() {
      this.$apollo.query({
        query: QueryAmountYear,
        variables: {
          year: moment().format('YYYY') - 1
        },
        error(error) {
          this.error = JSON.stringify(error.message)
        }
      }).then(data => {
        this.chartData.labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        data.data.IngresosAnuales.forEach(data => {
          values[0] += data.enero == null ? 0 : this.decimal(data.enero, 2)
          values[1] += data.febrero == null ? 0 : this.decimal(data.febrero, 2)
          values[2] += data.marzo == null ? 0 : this.decimal(data.marzo, 2)
          values[3] += data.abril == null ? 0 : this.decimal(data.abril, 2)
          values[4] += data.mayo == null ? 0 : this.decimal(data.mayo, 2)
          values[5] += data.junio == null ? 0 : this.decimal(data.junio, 2)
          values[6] += data.julio == null ? 0 : this.decimal(data.julio, 2)
          values[7] += data.agosto == null ? 0 : this.decimal(data.agosto, 2)
          values[8] += data.septiembre == null ? 0 : this.decimal(data.septiembre, 2)
          values[9] += data.octubre == null ? 0 : this.decimal(data.octubre, 2)
          values[10] += data.noviembre == null ? 0 : this.decimal(data.noviembre, 2)
          values[11] += data.diciembre == null ? 0 : this.decimal(data.diciembre, 2)
        })
        this.chartData.dataLastYear = values
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
      this.LastYear()
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
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: this.years,
          right: 30,
          top: 12,
          textStyle: {
            color: '#000'
          },
          itemWidth: 12,
          itemHeight: 10 },
        grid: {
          top: '15%',
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
        series: [{
          name: moment().format('YYYY'),
          type: 'bar',
          stack: 'vistors',
          barWidth: '80%',
          data: Data.data,
          animationDuration
        }, {
          name: moment().format('YYYY') - 1,
          type: 'bar',
          stack: 'vistors',
          barWidth: '80%',
          data: Data.dataLastYear,
          animationDuration,
          itemStyle: {
            normal: {
              show: true,
              color: '#5BB1EF'
            }
          }
        }]
      })
    }
  },
  apollo: {
    $subscribe: {
      addtram: {
        query: SubAmountYear,
        variables() {
          return {
            year: moment().format('YYYY')
          }
        },
        result({ data }) {
          this.chartData.labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
          var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          data.IngresosAnuales.forEach(data => {
            values[0] += data.enero == null ? 0 : this.decimal(data.enero, 2)
            values[1] += data.febrero == null ? 0 : this.decimal(data.febrero, 2)
            values[2] += data.marzo == null ? 0 : this.decimal(data.marzo, 2)
            values[3] += data.abril == null ? 0 : this.decimal(data.abril, 2)
            values[4] += data.mayo == null ? 0 : this.decimal(data.mayo, 2)
            values[5] += data.junio == null ? 0 : this.decimal(data.junio, 2)
            values[6] += data.julio == null ? 0 : this.decimal(data.julio, 2)
            values[7] += data.agosto == null ? 0 : this.decimal(data.agosto, 2)
            values[8] += data.septiembre == null ? 0 : this.decimal(data.septiembre, 2)
            values[9] += data.octubre == null ? 0 : this.decimal(data.octubre, 2)
            values[10] += data.noviembre == null ? 0 : this.decimal(data.noviembre, 2)
            values[11] += data.diciembre == null ? 0 : this.decimal(data.diciembre, 2)
          })
          var last = moment().format('YYYY') - 1
          this.years = [last.toString(), moment().format('YYYY').toString()]
          this.chartData.data = values
        }
      }
    }
  }
}
</script>
