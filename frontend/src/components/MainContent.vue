<template>
  <div class="main-content">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
.main-content {
  padding: 5rem;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s .3s ease-in;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
