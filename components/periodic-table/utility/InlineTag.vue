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
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/periodic-table' as p;

.inline-tag {
  display: inline-block;
  border-radius: 2px;
  padding: 2px 3px;
  white-space: nowrap;
  vertical-align: top;
  font-size: 12px;
  &--atomic-number {
    background: coral;
    color: p.$colorWhite;
  }
  &--element-symbol {
    background: darkcyan;
    color: p.$colorWhite;
  }
  &--simplified-chinese {
    background: #ee1c25;
    color: p.$colorWhite;
  }
  &--taiwan-trad {
    background: #0029cc;
    color: p.$colorWhite;
  }
  &--hongkong-trad {
    background: #cf142b;
    color: p.$colorWhite;
  }
  &--japanese-name {
    background: #e8e8e8;
    color: p.$colorBlack;
  }
  &--english-name {
    background: #00247d;
    color: p.$colorWhite;
  }
}
</style>
