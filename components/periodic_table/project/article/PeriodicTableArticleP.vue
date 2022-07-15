<template>
  <p class="article-section__paragraph">
    <slot></slot>
  </p>
</template>

<style lang="scss">
@use '@/assets/scss/global' as g;

.article-section {
  &__paragraph {
    line-height: 1.7;
  }
}
</style>
