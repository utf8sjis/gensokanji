<template>
  <section class="article-section__subsection">
    <h3 v-if="!isNoHeadline" class="article-section__headline-2">
      {{ headline }}
    </h3>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    isNoHeadline: { type: Boolean, default: false },
    headline: { type: String, default: '' },
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/periodic-table' as p;

.article-section {
  &__subsection {
    display: grid;
    grid-template-columns: auto;
    gap: 20px 0;
    @include g.breakpointMax() {
      gap: 16px 0;
    }
  }

  &__headline-2 {
    border-bottom: 2px dashed p.$colorMain2;
    @include g.font(ja, bold);
    font-size: 20px;
    @include g.breakpointMax() {
      font-size: 18px;
    }
  }
}
</style>
