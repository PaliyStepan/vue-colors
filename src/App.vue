<template lang="pug">
    #app
        app-header

</template>

<script>
    import AppHeader from "./components/Header";
export default {
  name: 'App',
  components: {
      AppHeader
  }
}
</script>

<style lang="scss">
    @import "~normalize.css";
    @import "assets/Styles/main";
</style>
