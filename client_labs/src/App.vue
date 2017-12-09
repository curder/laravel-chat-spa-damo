<template>
  <div>
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  import TopMenu from './components/TopMenu'
  import {mapState} from 'vuex'

  export default {
    created() {
      const userObj = JSON.parse(window.localStorage.getItem('authUser'))
      this.$store.dispatch('setUserObject', userObj)
    },
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    },
    components: {
      'top-menu': TopMenu,
    }
  }
</script>
<style lang="scss">
  @import "./assets/sass/app.scss";
</style>
