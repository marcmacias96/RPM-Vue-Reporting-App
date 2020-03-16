<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import moment from 'moment'
import { AmountWeek } from '../Querys/listOfQuerys'
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
      default: '375px'
    }
  },
  data() {
    return {
      chart: null,
      chartData: {
        labels: [],
        data: [0, 0, 0, 0, 0]
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
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions(Data) {
      this.chart.setOption({
        title: {
          text: 'Recaudación Semanal',
          left: 'center',
          align: 'right',
          button: 'center'
        },
        tooltip: {
          trigger: 'axis',
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
        query: AmountWeek,
        variables() {
          this.fechas = []
          var fecha = new Date() // obtener fecha hoy
          var dia = fecha.getDay() // obtiene el indice del dia
          var diff = fecha.getDate() - dia + (dia === 0 ? -6 : 1) // obtiene el lunes de la semana
          fecha = new Date(fecha.setDate(diff)) // devuelve la fecha desde el lunes
          for (let index = 0; index < 6; index++) {
            this.fechas[index] = moment(fecha).set({ 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
            fecha.setDate(fecha.getDate() + 1)
          }
          return {
            lunes: this.fechas[0],
            martes: this.fechas[1],
            miercoles: this.fechas[2],
            jueves: this.fechas[3],
            viernes: this.fechas[4],
            viernesf: this.fechas[5]
          }
        },
        result({ data }) {
          this.chartData.labels = ['Lunes', 'Martes', 'Miécoles', 'Jueves', 'Viernes']
          var values = [0, 0, 0, 0, 0]
          data.ProformaFactura.forEach(data => {
            values[0] += data.lunes.aggregate.sum.Total == null ? 0 : data.lunes.aggregate.sum.Total
            values[1] += data.martes.aggregate.sum.Total == null ? 0 : data.martes.aggregate.sum.Total
            values[2] += data.miercoles.aggregate.sum.Total == null ? 0 : data.miercoles.aggregate.sum.Total
            values[3] += data.jueves.aggregate.sum.Total == null ? 0 : data.jueves.aggregate.sum.Total
            values[4] += data.viernes.aggregate.sum.Total == null ? 0 : data.viernes.aggregate.sum.Total
          })
          this.chartData.data = values.map(val => {
            return this.decimal(val, 2)
          })
        }
      }
    }
  }
}
</script>
