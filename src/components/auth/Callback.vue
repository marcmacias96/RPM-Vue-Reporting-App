<template>
  <div class="spinner">
    <img src="../../assets/loading.svg" alt="Loading">
  </div>
</template>

<script>
export default {
  created() {
    this.$auth.handleAuthentication()
  },
  methods: {
    handleLoginEvent(data) {
      window.location.href = data.state.target || '/'
    }
  }
}
</script>

<style scoped>
.spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
