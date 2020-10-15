<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { penAndCompByDep } from '../Querys/listOfQuerys'
import resize from './mixins/resize'
import moment from 'moment'
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
        data: [],
        labels: []
      }
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
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
    },
    setOptions(Data) {
      this.chart.setOption({
        title: {
          text: 'Tareas Certficados x fecha fin',
          left: 'center',
          align: 'right'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: Data.labels
        },
        series: [
          {
            name: 'Tramites',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: Data.data,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  },
  apollo: {
    $subscribe: {
      addtram: {
        query: penAndCompByDep,
        variables() {
          this.fechas = []
          this.fechas[0] = moment().set({ 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[1] = moment().set({ 'hour': 23, 'minute': 59, 'second': 59 }).format('YYYY-MM-DD HH:mm:ss')
          return {
            fechaInicio: this.fechas[0],
            fechaFin: this.fechas[1],
            departamento: '%cert%'
          }
        },
        result({ data }) {
          var sumatoria = [
            {
              name: 'Pendientes',
              value: 0
            },
            {
              name: 'Completados',
              value: 0
            },
            {
              name: 'Por Firmar',
              value: 0
            },
            {
              name: 'No Iniciado',
              value: 0
            }
          ]
          data.Usuario.forEach(usu => {
            sumatoria[0].value += usu.pendientes.aggregate.count
            sumatoria[1].value += usu.completado.aggregate.count
            sumatoria[2].value += usu.porFirmar.aggregate.count
            sumatoria[3].value += usu.noIniciada.aggregate.count
          })
          this.chartData.data = sumatoria
          this.chartData.labels = ['Pendientes', 'Completados', 'Por firmar', 'No Iniciado']
        }
      }
    }
  }
}
</script>
