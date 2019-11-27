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
import Sidebar from './Sidebar'
import MainContent from './MainContent'

export default {
  components: {
    Sidebar,
		MainContent
  },
  computed: {
    theme() {
      return this.$store.getters['settings/getTheme']
    },
    size() {
      return this.$store.getters['settings/getSize']
    }
  },
  mounted() {
    // set user theme
    document.documentElement.setAttribute('theme', this.theme);

    // set user size
    const size = Math.ceil(this.size * 15);
    document.documentElement.style.fontSize = `${size}px`;
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
