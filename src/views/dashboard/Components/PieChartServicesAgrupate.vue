<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { AmountOfServices } from '../Querys/listOfQuerys'
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
          text: 'Recaudación x Servicio',
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
        query: AmountOfServices,
        variables() {
          this.fechas = []
          this.fechas[0] = moment().set({ 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss')
          this.fechas[1] = moment().set({ 'hour': 23, 'minute': 59, 'second': 59 }).format('YYYY-MM-DD HH:mm:ss')
          return {
            fechaInicio: this.fechas[0],
            fechaFin: this.fechas[1]
          }
        },
        result({ data }) {
          this.chartData.labels = [
            'CERTIFICADOS',
            'INSCRIPCIONES',
            'SERVICIO ONLINE'
          ]
           var sinAgrupar = data.TipoServicio.map(tramite => {
            var data = {
              name: tramite.TpServicio,
              value: tramite.ProformaFacturaDetalles_aggregate.aggregate.sum.Total
            }
            return data
          })
          var cert = {
            name: 'CERTIFICADOS',
            value: 0
          }
          var ins = {
            name: 'INSCRIPCIONES',
            value: 0
          }
          var onl = {
            name: 'SERVICIO ONLINE',
            value: 0
          }
           sinAgrupar.forEach(data => {
            if (data.name.includes('CERTI')) {
                cert.value += data.value
            }
            if (data.name.includes('INSC')) {
                ins.value += data.value
            }
            if (data.name.includes('ONLINE')) {
                onl.value += data.value
            }
          })
          this.chartData.data = [
            ins,
            cert,
            onl
          ]
        }
      }
    }
  }
}
</script>
