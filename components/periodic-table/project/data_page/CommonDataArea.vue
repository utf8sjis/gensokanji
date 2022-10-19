<template>
  <div class="data-area" :class="categoryClass">
    <div class="data-area__item-common-container">
      <div class="data-area__label">
        {{ label }}
        <span v-show="subLabel" class="data-area__label-sub">{{
          subLabel
        }}</span>
      </div>
      <div class="data-area__content" :class="'data-area__content--' + type">
        <slot></slot>
      </div>
    </div>
    <slot name="absolute"></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, required: true },
    label: { type: String, required: true },
    subLabel: { type: String, default: '' },
    categoryClass: { type: String, required: true },
  },
}
</script>

<style lang="scss" scoped>
/*
  NOTE:
  The style of the data-area block is defined in the DataPage component.
*/
</style>
