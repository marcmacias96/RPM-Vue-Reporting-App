<template>
  <div class="dashboard-container">

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <bar-chart-amount-year :height="'400px'" />
    </el-row>

    <el-row :gutter="32">
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

  </div>
</template>

<script>
import BarChartAmountYear from './Components/BarChartAmountYear'
import BarChartAmountWeek from './Components/BarChartAmountWeek'
import PieChartServices from './Components/PieChartServices'
import PieChartProcedures from './Components/PieChartProcedures'
export default {
  name: 'Dashboard',
  components: {
    BarChartAmountYear,
    PieChartServices,
    PieChartProcedures,
    BarChartAmountWeek
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
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
