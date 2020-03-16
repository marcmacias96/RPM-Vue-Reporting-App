<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from '../mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      chart: null,
      color: [
        'rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(248,195,248', 'rgba(100,255,249'
      ]
    }
  },
  watch: {
    data: {
      deep: true,
      handler(val) {
        var liney = this.lineY(val.labels, val.data, this.color)
        this.initChart(this.color, val.labels, val.data, liney)
      }
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    lineY(labels, charData, color) {
      const liney = []
      for (var i = 0; i < labels.length; i++) {
        var x = i
        if (x > color.length - 1) {
          x = color.length - 1
        }
        var data = {
          name: labels[i],
          color: color[x] + ')',
          value: charData[(charData.length - 1) - i],
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: color[x] + ', 0.3)'
              }, {
                offset: 1,
                color: color[x] + ', 1)'
              }], false),
              barBorderRadius: 10
            },
            emphasis: {
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
          }
        }
        liney.push(data)
      }
      return liney
    },
    initChart(color, labels, charData, lineY) {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        backgroundColor: '#000',
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item'
        },
        grid: {
          borderWidth: 0,
          top: '10%',
          left: '5%',
          right: '15%',
          bottom: '3%'
        },
        color: color,
        yAxis: [{
          type: 'category',
          inverse: true,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            inside: false
          },
          data: labels
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            inside: false,
            textStyle: {
              color: '#b3ccf8',
              fontSize: '14',
              fontFamily: 'PingFangSC-Regular'
            }
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: charData
        }],
        xAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [{
          name: '',
          type: 'bar',
          zlevel: 2,
          barWidth: '10px',
          data: lineY,
          animationDuration: 1500,
          label: {
            normal: {
              color: '#b3ccf8',
              show: true,
              position: [0, '-24px'],
              textStyle: {
                fontSize: 16
              },
              formatter: function(a, b) {
                return a.name
              }
            }
          }
        }],
        animationEasing: 'cubicOut'
      })
    }
  }
}
</script>
