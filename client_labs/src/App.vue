<template>
  <div>
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  import TopMenu from './components/TopMenu'

  export default {
    created() {
      console.log('app created.')
    },
    components: {
      'top-menu': TopMenu,
    }
  }
</script>
<style lang="scss">
  @import "./assets/sass/app.scss";
</style>
