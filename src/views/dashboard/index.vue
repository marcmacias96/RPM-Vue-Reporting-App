<template>
  <div class="dashboard-editor-container">

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:12px;">
      <bar-chart-amount-year />
    </el-row>

    <el-row :gutter="16">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart-services />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart-procedures />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart-amount-week />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart-task-in />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart-task-cert />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import BarChartAmountYear from './Components/BarChartAmountYear'
import BarChartAmountWeek from './Components/BarChartAmountWeek'
import PieChartServices from './Components/PieChartServices'
import PieChartProcedures from './Components/PieChartProcedures'
import PieChartTaskIn from './Components/PieChartTaskIn'
import PieChartTaskCert from './Components/BarChartTaskCert'

export default {
  name: 'Dashboard',
  components: {
    BarChartAmountYear,
    PieChartServices,
    PieChartProcedures,
    BarChartAmountWeek,
    PieChartTaskIn,
    PieChartTaskCert
  },
  data() {
    return {
      profile: this.$auth.profile
    }
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 10px;
  background-color: rgb(240, 242, 245);
  position: relative;
  .chart-wrapper {
    background: #fff;
    padding: 10px 10px 0;
    margin-bottom: 10px;
  }
}
@media (max-width:1024px) {
  .chart-wrapper {
    padding: 4px;
  }
}
</style>
