<template>
  <section class="article-section">
    <h1 v-if="isLevelOne" class="article-section__headline">{{ headline }}</h1>
    <h2 v-else class="article-section__headline">{{ headline }}</h2>
    <div class="article-section__contents">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    headline: { type: String, required: true },
    isLevelOne: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/periodic-table' as pt;

.article-section {
  padding-top: 20px;
  border-radius: 5px;
  @include g.boxShadow(2);
  background: pt.$colorWhite;

  &__headline {
    position: relative;
    margin: 0 30px 0 -8px;
    border-radius: 3px 0 0 0;
    padding: 10px 20px;
    @include g.font(ja, bold);
    font-size: 25px;
    color: pt.$colorWhite;
    background: pt.$colorMain2;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border: 8px solid;
      border-color: pt.$colorMain2Dark pt.$colorWhite pt.$colorWhite
        pt.$colorMain2Dark;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 0;
      border: 4px solid;
      border-color: pt.$colorMain2Dark pt.$colorMain2Dark transparent transparent;
    }
    @include g.breakpointMax() {
      margin: 0 10px 0 -6px;
      border-radius: 2px 0 0 0;
      padding: 10px 15px;
      font-size: 20px;
      &::before {
        border-width: 6px;
      }
      &::after {
        bottom: -6px;
        border-width: 3px;
      }
    }
  }

  &__contents {
    display: grid;
    grid-template-columns: auto;
    gap: 30px 0;
    padding: 30px 20px;
    @include g.breakpointMax() {
      padding: 30px 10px;
    }
  }
}
</style>
