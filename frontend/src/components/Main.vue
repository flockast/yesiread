<template>
  <div class="wrapper">
    <div class="sidebar-wrapper">
      <Sidebar />
    </div>
    <div class="content-wrapper">
      <MainContent />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Sidebar from './Sidebar'
import MainContent from './MainContent'

export default {
  components: {
    Sidebar,
		MainContent
  },
  computed: mapGetters('settings', ['theme', 'sizePx']),
  mounted() {
    // set user theme
    document.documentElement.setAttribute('theme', this.theme);

    // set user size
    document.documentElement.style.fontSize = `${this.sizePx}px`;
	}
}
</script>

<style lang="scss">
.wrapper {
  display: flex;
}
.sidebar-wrapper {
  width: 30rem;
  height: 100vh;
  overflow: hidden;
  position: sticky;
  top: 0;
}
.content-wrapper {
  flex: 1;
  min-height: 100vh;
  background: var(--color-bg);
}
</style>
