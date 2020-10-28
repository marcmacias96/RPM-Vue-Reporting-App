<template>
  <div class="app-container">
    <div class="chart-container">
      <chart height="100%" width="100%" :data="chartData" />
    </div>
  </div>
</template>

<script>
import Chart from '../Components/charts/rankingChart'
import { userRankingTasks } from '../querys/listOfQuerys'
import moment from 'moment'
export default {
  name: 'LineChart',
  components: { Chart },
  data() {
    return {
      selected: '',
      options: [{
        value: 'Certificados',
        label: 'Certificados'
      }, {
        value: 'Inscripciones',
        label: 'Inscripciones'
      }],
      chartData: {
        labels: [],
        data: []
      },
      fechas: null
    }
  },
  apollo: {
    $subscribe: {
      addtram: {
        query: userRankingTasks,
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
          var usersRanking = data.Usuario.sort(function(a, b) {
           if (a.total.aggregate.count < b.total.aggregate.count) {
              return 1
            }
            if (a.total.aggregate.count > b.total.aggregate.count) {
              return -1
            }
            return 0
          })
          this.chartData.labels = usersRanking.map(user => {
            return user.Nombres + ' ' + user.Apellidos
          })
          var auxData = usersRanking.map(user => {
            return user.total.aggregate.count
          })
          this.chartData.data = auxData.reverse()
        }
      }
    }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
