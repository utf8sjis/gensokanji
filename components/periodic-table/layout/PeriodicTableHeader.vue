<template>
  <header class="header">
    <div class="header__fixed-container" :class="{ 'is-active': isNavOpened }">
      <div class="header__start">
        <div class="header__logo">
          <a href="/">gensokanji</a>
        </div>
        <div class="header__site">
          <i class="u-pr5 fas fa-location-arrow"></i>元素の漢字周期表
        </div>
      </div>

      <div class="header__end">
        <div class="header__share-container">
          <div class="header__share-label">SHARE</div>
          <div class="header__share-button-container">
            <a
              class="header__share-button header__share-button--twitter"
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/share?url=https://gensokanji.netlify.app/periodic-table&text=元素の漢字周期表%20-%20gensokanji%20@gensokanji_bot"
              ><i class="fab fa-twitter"></i
            ></a>
            <a
              class="header__share-button header__share-button--facebook"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/sharer/sharer.php?u=https://gensokanji.netlify.app/periodic-table"
              ><i class="fab fa-facebook"></i
            ></a>
            <a
              class="header__share-button header__share-button--line"
              target="_blank"
              rel="noreferrer noopener"
              href="https://social-plugins.line.me/lineit/share?url=https://gensokanji.netlify.app/periodic-table"
              ><i class="fab fa-line"></i
            ></a>
          </div>
        </div>
        <button
          type="button"
          class="header__nav-open-button"
          @click="toggleNav"
        >
          <span v-show="!isNavOpened">MORE</span>
          <span v-show="isNavOpened">CLOSE</span>
          <span class="header__nav-open-button-icon-wrapper">
            <i
              class="header__nav-open-button-arrow-icon fas fa-long-arrow-alt-down"
              :class="{ 'is-active': isNavOpened }"
            ></i>
            <i class="fas fa-list"></i>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isNavOpened']),
  },

  methods: {
    ...mapMutations(['toggleNav']),
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/periodic-table' as pt;

.header {
  height: pt.$headerHeight;
  @include g.breakpointMax() {
    height: pt.$headerHeightPhone;
  }

  &__fixed-container {
    position: fixed;
    width: 100%;
    height: pt.$headerFixedContainerHeight;
    color: pt.$colorWhite;
    background: pt.$colorMainGrad;
    z-index: 202;
    @include g.breakpointMax() {
      height: pt.$headerFixedContainerHeightPhone;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2e245e4d;
      opacity: 0;
      transition: opacity pt.$navOpenTime;
    }
    &.is-active::before {
      opacity: 1;
    }
  }

  &__start {
    position: absolute;
    top: 0;
    left: 30px;
    height: 100%;
    @include g.breakpointMax() {
      left: 15px;
      line-height: 1.1;
    }
  }

  &__logo {
    cursor: pointer;
    @include g.font(en);
    font-size: 38px;
    @include g.breakpointMax() {
      font-size: 35px;
    }
  }

  &__site {
    padding-left: 20px;
    font-size: 14px;
    @include g.breakpointMax() {
      padding-left: 12px;
    }
  }

  &__end {
    @include g.flexCentering();
    position: absolute;
    top: 0;
    right: 40px;
    height: 100%;
    @include g.breakpointMax() {
      right: 10px;
    }
  }

  &__share-container {
    @include g.flexCentering();
    flex-direction: column;
    @include g.breakpointMax() {
      display: none;
    }
  }

  &__share-label {
    @include g.font(en);
    font-size: 20px;
  }

  &__share-button-container {
    @include g.flexCentering();
  }

  &__share-button {
    @include g.flexCentering();
    margin: 0 4px;
    width: 33px;
    height: 33px;
    border: 2px solid pt.$colorWhiteA;
    border-radius: 50%;
    font-size: 20px;
    transition: background-color 0.2s;
    &--twitter {
      &:hover {
        background: g.$colorTwitter;
      }
    }
    &--facebook {
      &:hover {
        background: g.$colorFacebook;
      }
    }
    &--line {
      &:hover {
        background: g.$colorLINE;
      }
    }
  }

  &__nav-open-button {
    cursor: pointer;
    @include g.flexCentering();
    flex-direction: column;
    margin-left: 10px;
    width: 85px;
    height: 53px;
    border: 2px solid pt.$colorWhiteA;
    border-radius: 5px;
    padding-bottom: 2px;
    @include g.font(en);
    font-size: 20px;
    transition: background-color 0.2s;
    @include g.breakpointMax() {
      width: 52px;
      height: 46px;
      font-size: 16px;
      line-height: 1;
    }
    &:hover {
      background: #fff3;
    }
  }

  &__nav-open-button-icon-wrapper {
    font-size: 22px;
    @include g.breakpointMax() {
      font-size: 18px;
    }
  }

  &__nav-open-button-arrow-icon {
    transition: transform pt.$navOpenTime;
    &.is-active {
      transform: rotateX(0.5turn);
    }
  }
}
</style>
