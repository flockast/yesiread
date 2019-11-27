<template>
  <div id="app">
    <Main v-if="isAuth" />
    <Auth v-else />
  </div>
</template>

<script>
import Auth from './components/Auth'
import Main from './components/Main'

export default {
  data() {
    return {
      isAuth: true
    }
  },
  components: {
    Auth,
    Main
  }
}
</script>
