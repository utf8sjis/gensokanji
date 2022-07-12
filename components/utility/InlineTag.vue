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

.inline-tag {
  display: inline-block;
  border-radius: 2px;
  padding: 2px 3px;
  white-space: nowrap;
  vertical-align: top;
  font-size: 12px;
  &--atomic-number {
    background: coral;
    color: g.$colorWhite;
  }
  &--element-symbol {
    background: darkcyan;
    color: g.$colorWhite;
  }
  &--simplified-chinese {
    background: #ee1c25;
    color: g.$colorWhite;
  }
  &--taiwan-trad {
    background: #0029cc;
    color: g.$colorWhite;
  }
  &--hongkong-trad {
    background: #cf142b;
    color: g.$colorWhite;
  }
  &--japanese-name {
    background: #e8e8e8;
    color: g.$colorBlack;
  }
  &--english-name {
    background: #00247d;
    color: g.$colorWhite;
  }
}
</style>
