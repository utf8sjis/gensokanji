<template>
  <transition name="nav-back-">
    <div v-show="isNavOpened" class="nav-back" @click="closeNav"></div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isNavOpened']),
  },

  methods: {
    ...mapMutations(['closeNav']),
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/periodic-table' as pt;

.nav-back {
  cursor: pointer;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #0008;
  z-index: 200;
  &--enter-active,
  &--leave-active {
    transition: opacity pt.$navOpenTime;
  }
  &--enter,
  &--leave-to {
    opacity: 0;
  }
}
</style>
