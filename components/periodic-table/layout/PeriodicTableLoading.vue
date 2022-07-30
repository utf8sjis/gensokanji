<template>
  <transition name="loading-">
    <div v-if="isShow" class="loading"></div>
  </transition>
</template>

<script>
export default {
  props: {
    isShow: { type: Boolean, default: true },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

.loading {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    g.$colorGensokanjiMidnight,
    g.$colorGensokanjiNavy,
    g.$colorGensokanjiNavy
  );
  z-index: 1000;

  &--leave-active {
    transition: opacity, 0.8s;
  }
  &--leave-to {
    opacity: 0;
  }
}
</style>
