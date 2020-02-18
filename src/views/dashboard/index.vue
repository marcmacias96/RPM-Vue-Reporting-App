<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ profile.name }}</div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
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
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
