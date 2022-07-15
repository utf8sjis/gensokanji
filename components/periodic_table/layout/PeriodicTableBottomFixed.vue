<template>
  <transition name="bottom-fixed-area-">
    <div v-show="!isAroundTop" class="bottom-fixed-area">
      <div>
        <div class="bottom-fixed-area__share-button-container">
          <div class="bottom-fixed-area__share-button-wrapper">
            <a
              class="bottom-fixed-area__share-button bottom-fixed-area__share-button--twitter"
              :class="{ 'is-expanded': isShareButtonExpanded }"
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/share?url=https://gensokanji.netlify.app/periodic-table&text=元素の漢字周期表%20-%20gensokanji%20@gensokanji_bot"
              ><i class="fab fa-twitter"></i
            ></a>
          </div>
          <div class="bottom-fixed-area__share-button-wrapper">
            <a
              class="bottom-fixed-area__share-button bottom-fixed-area__share-button--facebook"
              :class="{ 'is-expanded': isShareButtonExpanded }"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/sharer/sharer.php?u=https://gensokanji.netlify.app/periodic-table"
              ><i class="fab fa-facebook"></i
            ></a>
          </div>
          <div class="bottom-fixed-area__share-button-wrapper">
            <a
              class="bottom-fixed-area__share-button bottom-fixed-area__share-button--line"
              :class="{ 'is-expanded': isShareButtonExpanded }"
              target="_blank"
              rel="noreferrer noopener"
              href="https://social-plugins.line.me/lineit/share?url=https://gensokanji.netlify.app/periodic-table"
              ><i class="fab fa-line"></i
            ></a>
          </div>
          <div class="bottom-fixed-area__share-button-wrapper">
            <button
              type="button"
              class="bottom-fixed-area__share-expand-button"
              :class="{ 'is-expanded': isShareButtonExpanded }"
              @click="toggleShareExpandButton"
            >
              <span class="material-icons">share</span>
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="bottom-fixed-area__top-button"
        @click="goToTop"
      >
        <i class="fas fa-angle-up"></i>
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      /** スクロール量がページのトップあたりか否か */
      isAroundTop: true,
      /** シェアボタンが展開されているか否か */
      isShareButtonExpanded: false,
    }
  },

  mounted() {
    // スクロールのイベントリスナを追加
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        this.isAroundTop = false
      } else {
        this.isAroundTop = true
        this.isShareButtonExpanded = false
      }
    })
  },

  methods: {
    /** ページトップまでスクロールする */
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    /** シェアボタンを展開、格納する */
    toggleShareExpandButton() {
      this.isShareButtonExpanded = !this.isShareButtonExpanded
    },
  },
}
</script>

<style lang="scss">
@use 'sass:math';
@use '@/assets/scss/global' as g;

$expandTime: 0.2s;

.bottom-fixed-area {
  @include g.flexCentering(center, flex-end);
  position: fixed;
  right: 0;
  bottom: 20px;
  padding-right: 20px;
  color: g.$colorWhite;
  z-index: 100;
  @include g.breakpointMax() {
    bottom: 10px;
    padding-right: 10px;
  }
  &--enter-active,
  &--leave-active {
    transform-origin: right bottom;
    transition-property: opacity, transform;
    transition-duration: 0.2s;
  }
  &--enter,
  &--leave-to {
    opacity: 0;
    transform: scale(0.7) translate(5px, 5px);
  }

  &__share-button-container {
    display: none;
    position: relative;
    margin-right: 5px;
    width: 40px;
    height: 40px;
    @include g.breakpointMax() {
      @include g.flexCentering();
    }
  }

  &__share-button-wrapper {
    @include g.flexCentering();
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__share-expand-button {
    @include g.flexCentering();
    width: 40px;
    height: 40px;
    border: 2px solid g.$colorMain3;
    border-radius: 50%;
    padding-right: 3px;
    font-size: 20px;
    color: g.$colorMain3;
    background: g.$colorWhite;
    transition-property: border-color, color, background-color;
    transition-duration: $expandTime;
    &.is-expanded {
      border-color: g.$colorWhiteA;
      color: g.$colorWhite;
      background: g.$colorMain3;
    }
  }

  &__share-button {
    @include g.flexCentering();
    width: 40px;
    height: 40px;
    border: 2px solid g.$colorWhiteA;
    border-radius: 50%;
    font-size: 20px;
    opacity: 0;
    transition-property: transform, opacity;
    transition-duration: $expandTime;
    &--twitter {
      background: g.$colorTwitter;
      &.is-expanded {
        opacity: 1;
        transform: scale(1)
          translate(-60px * math.cos(0deg), -60px * math.sin(0deg));
      }
    }
    &--facebook {
      background: g.$colorFacebook;
      &.is-expanded {
        opacity: 1;
        transform: scale(1)
          translate(-60px * math.cos(45deg), -60px * math.sin(45deg));
      }
    }
    &--line {
      background: g.$colorLINE;
      &.is-expanded {
        opacity: 1;
        transform: scale(1)
          translate(-60px * math.cos(90deg), -60px * math.sin(90deg));
      }
    }
  }

  &__top-button {
    cursor: pointer;
    @include g.flexCentering();
    width: 50px;
    height: 50px;
    border: 2px solid g.$colorWhiteA;
    border-radius: 50%;
    padding-bottom: 3px;
    font-size: 30px;
    background: g.$colorMain3;
    transition: transform 0.2s;
    @include g.breakpointMax() {
      width: 45px;
      height: 45px;
    }
    &:hover {
      transform: scale(1.1);
      @include g.breakpointMax() {
        transform: none;
      }
    }
  }
}
</style>
