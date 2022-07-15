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

<style lang="scss">
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/periodic-table' as p;

$borderColor: #fff9;
$borderColorHydrogen: #0003;

.data-area {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  border: 2px solid $borderColor;
  color: p.$colorWhite;
  background: #0002;
  transition-property: border-color, background-color, color;
  transition-duration: p.$dataPageTurnDuration;
  &.is-category-h {
    border-color: $borderColorHydrogen;
    color: p.$colorHydrogenBlack;
    background: #fff6;
  }
  &--tweet {
    @include g.breakpointMax() {
      border: none;
      background: none;
    }
  }

  &__item-element-symbol {
    @include g.flexCentering();
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    @include g.font(en);
    font-size: 165px;
    @include g.breakpointMax() {
      font-size: 130px;
    }
  }

  &__item-state {
    @include g.flexCentering();
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
  }

  &__item-radioactivity {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 16px;
  }

  &__item-tweet {
    @include g.flexCentering();
  }

  &__item-close-button {
    cursor: pointer;
    @include g.flexCentering();
    width: 100%;
    height: 100%;
    padding: 15px;
    @include g.font(en);
    font-size: 20px;
    transition: background-color 0.2s;
    &:hover {
      background: #fff3;
    }
    &.is-category-h {
      &:hover {
        background: #ffff;
      }
    }
  }

  &__item-element-changer {
    user-select: none;
    @include g.flexCentering(space-between, center);
    transition-property: background-color, color;
    transition-duration: p.$dataPageTurnDuration;
    @each $category in p.$categoryList {
      $categoryColor: nth(
        p.$categoryColorList2,
        index(p.$categoryList, $category)
      );
      @if $category == h {
        &.is-category-#{$category} {
          background: #fffe;
        }
      } @else {
        &.is-category-#{$category} {
          color: #{$categoryColor};
          background: #fffe;
        }
      }
    }
  }

  &__item-kanji-copy-button {
    cursor: pointer;
    @include g.flexCentering();
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-radius: 15px 0 3px 0;
    border: 16px solid $borderColor;
    font-size: 20px;
    color: p.$colorWhite;
    transition-property: border-color;
    transition-duration: p.$dataPageTurnDuration;
    @include g.breakpointMax() {
      border: 14px solid $borderColor;
      border-radius: 12px 0 3px 0;
      font-size: 15px;
    }
    &.is-category-h {
      border: 16px solid $borderColorHydrogen;
      @include g.breakpointMax() {
        border: 14px solid $borderColorHydrogen;
      }
    }
  }

  &__item-common-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 6px 9px;
  }

  &__label {
    @include g.font(en, light);
    line-height: 1;
    font-size: 23px;
    opacity: 0.7;
    @include g.breakpointMax() {
      font-size: 20px;
    }
  }

  &__label-sub {
    display: inline-block;
    font-size: 17px;
    opacity: 0.7;
  }

  &__content {
    flex: 1;
    flex-direction: column;
    &--num {
      @include g.flexCentering(center, flex-end);
      @include g.font(en);
      font-size: 45px;
      @include g.breakpointMax() {
        font-size: 35px;
      }
    }
    &--kanji {
      @include g.flexCentering(flex-end, center);
      padding-bottom: 25px;
      @include g.breakpointMax() {
        padding-bottom: 23px;
      }
    }
    &--pinyin {
      @include g.flexCentering(flex-end, center);
      padding: 5px 0;
      white-space: nowrap;
      @include g.font(py);
      font-size: 20px;
    }
    &--category {
      @include g.flexCentering();
      padding: 5px 0;
      font-size: 20px;
      @include g.breakpointMax() {
        font-size: 18px;
      }
    }
    &--japanese-name {
      @include g.flexCentering();
      padding: 5px 0;
      white-space: nowrap;
      font-size: 20px;
      @include g.breakpointMax() {
        font-size: 18px;
      }
      @include g.breakpointMax(g.$seMax) {
        white-space: normal;
      }
    }
    &--english-name {
      @include g.flexCentering();
      padding: 5px 0;
      @include g.font(en);
      font-size: 22px;
      @include g.breakpointMax() {
        font-size: 20px;
      }
    }
  }

  &__state-image {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-width: 320px;
    opacity: 0.15;
    &.is-category-h {
      opacity: 0.1;
    }
  }

  &__radioactivity-image {
    width: 45px;
  }

  &__category-text {
    text-align: center;
  }

  &__category-text-item {
    display: inline-block;
  }

  &__kanji-character {
    font-size: 125px;
    @include g.breakpointMax() {
      font-size: 70px;
    }
    &--cn {
      @include g.font(cn);
    }
    &--tw {
      @include g.font(tw);
    }
    &--hk {
      @include g.font(hk);
    }
  }

  &__kanji-code-point {
    @include g.font(en, light);
    font-size: 20px;
    opacity: 0.7;
    @include g.breakpointMax() {
      font-size: 16px;
    }
  }

  &__element-changer-button {
    cursor: pointer;
    @include g.flexCentering(flex-start, center);
    transition: transform 0.05s;
    &:active {
      transform: translateY(2px);
    }
    &.is-disabled {
      pointer-events: none;
      opacity: 0.4;
    }
  }

  &__element-changer-button-icon {
    font-size: 70px;
    transform: translateY(3px);
  }

  &__element-changer-button-text {
    @include g.font(en);
    font-size: 50px;
    @include g.breakpointMax() {
      font-size: 35px;
    }
  }

  &__element-changer-button-atomic-number {
    font-size: 30px;
    @include g.breakpointMax() {
      font-size: 20px;
    }
  }
}
</style>
