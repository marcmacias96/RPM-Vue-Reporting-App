<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
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
      chartData: {}
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
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['No Iniciado', 'Revisión jurídico', 'R.J Completado', 'En proceso', 'Por Firmar', 'Completado', 'Pendiente', 'Anulado']
        },
        series: [
          {
            name: 'Tramites',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: Data.tNoIniciado.aggregate.count, name: 'No Iniciado' },
              { value: Data.tRevJud.aggregate.count, name: 'Revisión jurídico' },
              { value: Data.tRevJudComp.aggregate.count, name: 'R.J Completado' },
              { value: Data.tEnProceso.aggregate.count, name: 'En proceso' },
              { value: Data.tPorFirmar.aggregate.count, name: 'Por firmar' },
              { value: Data.tCompletado.aggregate.count, name: 'Completado' },
              { value: Data.tPendiete.aggregate.count, name: 'Pendiente' },
              { value: Data.tAnulado.aggregate.count, name: 'Anulado' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
