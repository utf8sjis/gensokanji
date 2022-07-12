<template>
  <div
    class="lang-switch"
    :class="{ 'is-overflow-hidden': isBodyScrollLocked }"
  >
    <div class="lang-switch__button-container">
      <template v-for="(lang, langIndex) in langList">
        <button
          :key="'button-' + langIndex"
          type="button"
          class="lang-switch__button"
          :class="[{ 'is-active-lang': langStatusList[langIndex].isActive }]"
          @click="switchLang(langIndex)"
        >
          {{ lang.name }}
        </button>
        <div
          v-show="langIndex !== langList.length - 1"
          :key="'separator-' + langIndex"
          class="lang-switch__separator"
        ></div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isBodyScrollLocked']),
    ...mapGetters({
      langList: 'lang/langList',
      langStatusList: 'lang/langStatusList',
    }),
  },

  methods: {
    ...mapActions({
      switchLang: 'lang/switchLang',
    }),
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/global' as g;

.lang-switch {
  @include g.flexCentering();
  overflow-x: visible;
  height: 100%;
  @include g.mediaQuery(g.$controlPanelWidth) {
    @include g.flexCentering(flex-start, center);
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  &.is-overflow-hidden {
    overflow: hidden;
  }

  &__button-container {
    @include g.flexCentering();
    height: 100%;
    padding: 0 20px;
  }

  &__button {
    cursor: pointer;
    position: relative;
    height: 100%;
    padding: 0 10px;
    white-space: nowrap;
    color: g.$colorBlackA;
    transition: color 0.5s;
    &:hover {
      color: g.$colorBlack;
      &::after {
        left: 0;
        width: 100%;
        background: g.$colorMain2;
      }
    }
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      height: 5px;
      background: transparent;
      transition-property: left, width, background-color;
      transition-duration: 0.5s;
    }
    &.is-active-lang {
      color: g.$colorMain1;
      &::after {
        left: 0;
        width: 100%;
        background: g.$colorMain1;
      }
    }
  }

  &__separator {
    width: 1px;
    height: 20px;
    margin: 0 2px;
    background: g.$colorLightGray;
  }
}
</style>
