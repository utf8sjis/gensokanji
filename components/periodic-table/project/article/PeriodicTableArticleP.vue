<template>
  <p class="article-section__paragraph">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/periodic-table' as pt;

.article-section {
  &__paragraph {
    line-height: 1.7;
  }
}
</style>
