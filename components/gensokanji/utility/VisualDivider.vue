<template>
  <div class="divider">
    <div class="divider__dot"></div>
    <div class="divider__dot"></div>
    <div class="divider__dot"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/gensokanji' as gk;

.divider {
  @include g.flexCentering;
  gap: 25px;

  &__dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: rgba(g.$colorGensokanjiNavy, 0.5);
  }
}
</style>
