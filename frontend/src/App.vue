<template>
  <div id="app">
    <Main v-if="isAuth" />
    <Auth v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Auth from './components/Auth'
import Main from './components/Main'

export default {
  computed: mapGetters('user', ['isAuth']),
  components: {
    Auth,
    Main
  }
}
</script>
