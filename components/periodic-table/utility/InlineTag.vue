<template>
  <span class="inline-tag" :class="'inline-tag--' + type">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    type: { type: String, required: true },
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/periodic-table' as pt;

.inline-tag {
  display: inline-block;
  border-radius: 2px;
  padding: 2px 3px;
  white-space: nowrap;
  vertical-align: top;
  font-size: 12px;
  &--atomic-number {
    background: coral;
    color: pt.$colorWhite;
  }
  &--element-symbol {
    background: darkcyan;
    color: pt.$colorWhite;
  }
  &--simplified-chinese {
    background: #ee1c25;
    color: pt.$colorWhite;
  }
  &--taiwan-trad {
    background: #0029cc;
    color: pt.$colorWhite;
  }
  &--hongkong-trad {
    background: #cf142b;
    color: pt.$colorWhite;
  }
  &--japanese-name {
    background: #e8e8e8;
    color: pt.$colorBlack;
  }
  &--english-name {
    background: #00247d;
    color: pt.$colorWhite;
  }
}
</style>
