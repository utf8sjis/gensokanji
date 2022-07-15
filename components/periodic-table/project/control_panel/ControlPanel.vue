<template>
  <section class="control-panel">
    <div class="control-panel__tab-container">
      <div class="control-panel__tab control-panel__tab--left-end"></div>
      <div class="control-panel__tab-button-container">
        <template v-for="(control, index) in controlList">
          <button
            :key="'tab-' + index"
            type="button"
            class="control-panel__tab"
            :class="{ 'is-active': control.isActive }"
            @click="setCurrentControl(index)"
          >
            <div>
              <i class="u-pr5" :class="control.iconClass"></i
              ><span>{{ control.name }}</span>
            </div>
          </button>
          <div
            v-show="index !== controlList.length - 1"
            :key="'separator-' + index"
            class="control-panel__tab-separator"
          ></div>
        </template>
        <div class="control-panel__tab-spacer"></div>
      </div>
    </div>

    <div class="control-panel__info-button-wrapper">
      <button
        type="button"
        class="control-panel__info-button"
        @click="toggleBalloonTip('controlPanel')"
      >
        <i class="fas fa-info-circle"></i>
      </button>
      <balloon-tip
        id="controlPanel"
        :index="currentControlIndex"
        width="90%"
        top="28px"
        right="3px"
        beak-right="8px"
      ></balloon-tip>
    </div>

    <div class="control-panel__content-container">
      <transition
        v-for="(control, index) in controlList"
        :key="index"
        name="control-panel__content-"
      >
        <div
          v-show="currentControlIndex === index"
          class="control-panel__content"
        >
          <component :is="control.component" />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { controlList } from '@/assets/js/control_list.js'

export default {
  data() {
    return {
      controlList,
      currentControlIndex: 0,
    }
  },

  computed: {
    /**
     * リスト中の現在選択されている操作のデータ
     * currentControlIndexに依存
     * @returns {object} リスト中の操作のオブジェクト
     */
    currentControl() {
      return this.controlList[this.currentControlIndex]
    },
  },

  methods: {
    ...mapActions({
      toggleBalloonTip: 'balloon_tip/toggleBalloonTip',
    }),
    /**
     * 操作パネルの操作の内容を変更する
     * @param {number} nextControlIndex - 選択された操作のcontrolListでのインデクス
     */
    setCurrentControl(nextControlIndex) {
      this.currentControl.isActive = false
      this.currentControlIndex = nextControlIndex
      this.currentControl.isActive = true
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/periodic-table' as p;

$controlPanelHeight: 90px;
$controlPanelTabHeight: 28px;
$controlPanelBorderRadius: 8px;

.control-panel {
  display: grid;
  grid-template-columns: auto 35px;
  grid-template-rows: $controlPanelTabHeight auto;
  position: sticky;
  top: p.$headerHeight;
  margin: 0 auto;
  border: 2px solid p.$colorMain2;
  border-radius: $controlPanelBorderRadius;
  width: p.$controlPanelWidth;
  height: $controlPanelHeight;
  filter: drop-shadow(0 0 2px #0002);
  z-index: 100;
  @include g.breakpointMax(p.$controlPanelWidth) {
    margin: 0 10px;
    width: auto;
  }
  @include g.breakpointMax() {
    top: p.$headerHeightPhone;
  }

  &__tab-container {
    display: flex;
    overflow: hidden;
    border-radius: $controlPanelBorderRadius - 2px 0 0 0;
  }

  &__tab-button-container {
    flex: 1;
    display: flex;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }

  &__tab {
    @include g.flexCentering();
    height: 100%;
    padding: 0 10px;
    white-space: nowrap;
    font-size: 14px;
    color: p.$colorWhite;
    background: p.$colorMain2Light;
    transition-property: color, background-color;
    transition-duration: 0.2s;
    &.is-active {
      color: p.$colorMain2;
      background: p.$colorBaseA;
    }
    &--left-end {
      width: 10px;
      padding: 0;
      background: p.$colorMain2;
    }
  }

  &__tab-separator {
    flex: none;
    width: 2px;
    background: p.$colorMain2;
  }

  &__tab-spacer {
    flex-grow: 1;
    background: p.$colorMain2;
  }

  &__info-button-wrapper {
    border-radius: 0 $controlPanelBorderRadius - 2px 0 0;
    z-index: 101;
  }

  &__info-button {
    @include g.flexCentering();
    width: 100%;
    height: 100%;
    border-radius: 0 $controlPanelBorderRadius - 2px 0 0;
    font-size: 15px;
    color: p.$colorWhite;
    background: p.$colorMain1;
  }

  &__content-container {
    grid-column: 1 / -1;
    position: relative;
    overflow: visible;
    border-radius: 0 0 $controlPanelBorderRadius - 2px $controlPanelBorderRadius -
      2px;
    background: p.$colorBaseA;
  }

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    &--enter-active {
      transition-property: opacity, transform;
      transition-duration: 0.2s;
      transition-delay: 0.05s;
    }
    &--leave-active {
      transition-property: opacity, transform;
      transition-duration: 0.2s;
    }
    &--enter,
    &--leave-to {
      opacity: 0;
      transform: translateY(-3px);
    }

    > div {
      /*
        overflowの扱いはcontrol-panelに依存する直下の個々のコンテンツに任せているため、
        その輪郭を指定するborderは親であるcontrol-panelに依存して指定したほうが
        構造の把握が容易。
      */
      border-radius: 0 0 $controlPanelBorderRadius - 2px
        $controlPanelBorderRadius - 2px;
    }
  }
}
</style>
