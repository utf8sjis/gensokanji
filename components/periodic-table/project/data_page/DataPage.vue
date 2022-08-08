<template>
  <transition
    name="data-page-"
    @enter="enterFade"
    @before-enter="beforeEnterFade"
    @before-leave="beforeLeaveFade"
  >
    <section
      v-show="isDataPageActive"
      class="data-page"
      :class="'is-' + currentDataPage.categoryClass"
    >
      <div
        class="data-page__main-wrapper"
        :class="{ 'is-overflow-hidden': !isBodyScrollLocked }"
      >
        <div class="data-page__main">
          <div class="data-page__containers-wrapper">
            <div class="data-page__container-base">
              <div class="data-page__area data-page__area--element-symbol">
                <div
                  class="data-area"
                  :class="'is-' + currentDataPage.categoryClass"
                >
                  <div class="data-area__item-state">
                    <img
                      class="data-area__state-image"
                      :class="'is-' + currentDataPage.categoryClass"
                      :src="currentDataPage.stateSrc"
                    />
                  </div>
                  <div class="data-area__item-radioactivity">
                    <img
                      v-show="currentDataPage.isRadioactive"
                      class="data-area__radioactivity-image"
                      src="@/assets/img/periodic-table/state/radioactivity.svg"
                    />
                  </div>
                  <div class="data-area__item-element-symbol">
                    {{ currentDataPage.elementSymbol }}
                  </div>
                </div>
              </div>
              <div class="data-page__area data-page__area--atomic-number">
                <common-data-area
                  type="num"
                  label="Z ="
                  :category-class="'is-' + currentDataPage.categoryClass"
                  >{{ currentDataPage.atomicNumber }}</common-data-area
                >
              </div>
              <div class="data-page__area data-page__area--period">
                <common-data-area
                  type="num"
                  label="Period"
                  :category-class="'is-' + currentDataPage.categoryClass"
                  >{{ currentDataPage.period }}</common-data-area
                >
              </div>
              <div class="data-page__area data-page__area--group">
                <common-data-area
                  type="num"
                  label="Group"
                  :category-class="'is-' + currentDataPage.categoryClass"
                  >{{ currentDataPage.group }}</common-data-area
                >
              </div>
              <div class="data-page__area data-page__area--atomic-weight">
                <common-data-area
                  type="num"
                  label="Weight"
                  :category-class="'is-' + currentDataPage.categoryClass"
                  >{{ currentDataPage.atomicWeight }}</common-data-area
                >
              </div>
              <div class="data-page__area data-page__area--category">
                <common-data-area
                  type="category"
                  label="Category"
                  :category-class="'is-' + currentDataPage.categoryClass"
                >
                  <div class="data-area__category-text">
                    <template
                      v-for="(
                        category, categoryIndex
                      ) in currentDataPage.categoryList"
                    >
                      <span
                        :key="categoryIndex"
                        class="data-area__category-text-item"
                        >{{ category
                        }}<span
                          v-show="
                            categoryIndex !==
                            currentDataPage.categoryList.length - 1
                          "
                          >／</span
                        ></span
                      >
                    </template>
                  </div>
                </common-data-area>
              </div>
            </div>
            <div class="data-page__container-kanji">
              <div class="data-page__area data-page__area--cn">
                <common-data-area
                  type="kanji"
                  label="Mainland China"
                  :category-class="'is-' + currentDataPage.categoryClass"
                >
                  <div
                    class="data-area__kanji-character data-area__kanji-character--cn"
                  >
                    {{ currentDataPage.simplifiedChinese }}
                  </div>
                  <div class="data-area__kanji-code-point">
                    U+{{ currentDataPage.unicodeCodePointCN }}
                  </div>
                  <template #absolute>
                    <button
                      type="button"
                      class="data-area__item-kanji-copy-button"
                      :class="'is-' + currentDataPage.categoryClass"
                      @click="
                        copyToClipboard(currentDataPage.simplifiedChinese)
                      "
                    >
                      <i class="data-area__kanji-copy-icon fas fa-copy"></i>
                    </button>
                  </template>
                </common-data-area>
              </div>
              <div class="data-page__area data-page__area--tw">
                <common-data-area
                  type="kanji"
                  label="Taiwan"
                  :category-class="'is-' + currentDataPage.categoryClass"
                >
                  <div
                    class="data-area__kanji-character data-area__kanji-character--tw"
                  >
                    {{ currentDataPage.taiwanTrad }}
                  </div>
                  <div class="data-area__kanji-code-point">
                    U+{{ currentDataPage.unicodeCodePointTW }}
                  </div>
                  <template #absolute>
                    <button
                      type="button"
                      class="data-area__item-kanji-copy-button"
                      :class="'is-' + currentDataPage.categoryClass"
                      @click="copyToClipboard(currentDataPage.taiwanTrad)"
                    >
                      <i class="data-area__kanji-copy-icon fas fa-copy"></i>
                    </button>
                  </template>
                </common-data-area>
              </div>
              <div class="data-page__area data-page__area--hk">
                <common-data-area
                  type="kanji"
                  label="Hong Kong"
                  :category-class="'is-' + currentDataPage.categoryClass"
                >
                  <div
                    class="data-area__kanji-character data-area__kanji-character--hk"
                  >
                    {{ currentDataPage.hongkongTrad }}
                  </div>
                  <div class="data-area__kanji-code-point">
                    U+{{ currentDataPage.unicodeCodePointHK }}
                  </div>
                  <template #absolute>
                    <button
                      type="button"
                      class="data-area__item-kanji-copy-button"
                      :class="'is-' + currentDataPage.categoryClass"
                      @click="copyToClipboard(currentDataPage.hongkongTrad)"
                    >
                      <i class="data-area__kanji-copy-icon fas fa-copy"></i>
                    </button>
                  </template>
                </common-data-area>
              </div>
            </div>
            <div class="data-page__container-reading">
              <div class="data-page__area data-page__area--pinyin">
                <common-data-area
                  type="pinyin"
                  label="Pinyin"
                  sub-label="Mainland China"
                  :category-class="'is-' + currentDataPage.categoryClass"
                  >{{ currentDataPage.pinyin }}</common-data-area
                >
              </div>
              <div class="data-page__area data-page__area--bopomofo">
                <common-data-area
                  type="pinyin"
                  label="Bopomofo"
                  sub-label="Taiwan"
                  :category-class="'is-' + currentDataPage.categoryClass"
                  >{{ currentDataPage.bopomofo }} ({{
                    currentDataPage.taiwanPinyin
                  }})</common-data-area
                >
              </div>
            </div>
            <div class="data-page__container-name">
              <div class="data-page__area data-page__area--japanese-name">
                <common-data-area
                  type="japanese-name"
                  label="Japanese Name"
                  :category-class="'is-' + currentDataPage.categoryClass"
                  >{{ currentDataPage.japaneseName }}</common-data-area
                >
              </div>
              <div class="data-page__area data-page__area--english-name">
                <common-data-area
                  type="english-name"
                  label="English Name"
                  :category-class="'is-' + currentDataPage.categoryClass"
                  >{{ currentDataPage.englishName }}</common-data-area
                >
              </div>
            </div>
            <div class="data-page__container-tweet">
              <div class="data-page__area data-page__area--tweet">
                <div
                  class="data-area data-area--tweet"
                  :class="'is-' + currentDataPage.categoryClass"
                >
                  <div
                    class="data-area__item-tweet"
                    v-html="currentDataPage.twitterTweet"
                  ></div>
                </div>
              </div>
            </div>
            <div class="data-page__container-close">
              <div class="data-page__area data-page__area--close">
                <div
                  class="data-area"
                  :class="'is-' + currentDataPage.categoryClass"
                >
                  <button
                    type="button"
                    class="data-area__item-close-button"
                    :class="'is-' + currentDataPage.categoryClass"
                    @click="closeDataPage()"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="data-page__main-info-icon"
            :class="'is-' + currentDataPage.categoryClass"
            @click="toggleBalloonTip('dataPage')"
          >
            <i class="fas fa-info-circle"></i>
          </button>
          <balloon-tip
            id="dataPage"
            width="90%"
            top="-10px"
            left="4px"
            beak-left="6px"
          ></balloon-tip>
        </div>
      </div>
      <button
        type="button"
        class="data-page__close-button"
        :class="'is-' + currentDataPage.categoryClass"
        @click="closeDataPage()"
      >
        <span class="data-page__close-button-icon material-icons">cancel</span>
      </button>
      <div class="data-page__container-element-changer">
        <div class="data-page__area data-page__area--element-changer">
          <div class="data-area" :class="'is-' + currentDataPage.categoryClass">
            <div
              class="data-area__item-element-changer"
              :class="'is-' + currentDataPage.categoryClass"
            >
              <button
                type="button"
                :disabled="elementChangeButton.isStart"
                class="data-area__element-changer-button"
                :class="{ 'is-disabled': elementChangeButton.isStart }"
                @click="switchDataPage('prev')"
              >
                <span
                  class="data-area__element-changer-button-icon material-icons"
                  >arrow_back</span
                >
                <span class="data-area__element-changer-button-text">
                  <span
                    class="data-area__element-changer-button-atomic-number"
                    >{{ elementChangeButton.prev.atomicNumber }}</span
                  >{{ elementChangeButton.prev.elementSymbol }}
                </span>
              </button>
              <button
                type="button"
                :disabled="elementChangeButton.isEnd"
                class="data-area__element-changer-button"
                :class="{ 'is-disabled': elementChangeButton.isEnd }"
                @click="switchDataPage('next')"
              >
                <span class="data-area__element-changer-button-text">
                  <span
                    class="data-area__element-changer-button-atomic-number"
                    >{{ elementChangeButton.next.atomicNumber }}</span
                  >{{ elementChangeButton.next.elementSymbol }}
                </span>
                <span
                  class="data-area__element-changer-button-icon material-icons"
                  >arrow_forward</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default {
  computed: {
    ...mapGetters(['isBodyScrollLocked']),
    ...mapGetters({
      elementList: 'element/elementList',
      currentDataPage: 'element/currentDataPage',
      isDataPageActive: 'element/isDataPageActive',
    }),
    /**
     * 現在のデータページのページ遷移ボタンの表示内容
     * @returns {object} 表示内容の情報を含んだオブジェクト
     */
    elementChangeButton() {
      const atomicNumberToIndex = (atomicNumber) =>
        this.elementList.findIndex((item) => item.atomicNumber === atomicNumber)

      const z = this.currentDataPage.atomicNumber
      const obj = {
        prev: {
          atomicNumber: 0,
          elementSymbol: '',
        },
        next: {
          atomicNumber: 0,
          elementSymbol: '',
        },
        isStart: true,
        isEnd: false,
      }
      if (z - 1 < 1) {
        const nextIndex = atomicNumberToIndex(z + 1)
        obj.prev.atomicNumber = 0
        obj.prev.elementSymbol = 'n'
        obj.next.atomicNumber = this.elementList[nextIndex].atomicNumber
        obj.next.elementSymbol = this.elementList[nextIndex].elementSymbol
        obj.isStart = true
        obj.isEnd = false
      } else if (z + 1 > 118) {
        const prevIndex = atomicNumberToIndex(z - 1)
        obj.prev.atomicNumber = this.elementList[prevIndex].atomicNumber
        obj.prev.elementSymbol = this.elementList[prevIndex].elementSymbol
        obj.next.atomicNumber = 119
        obj.next.elementSymbol = 'Uue'
        obj.isStart = false
        obj.isEnd = true
      } else {
        const nextIndex = atomicNumberToIndex(z + 1)
        const prevIndex = atomicNumberToIndex(z - 1)
        obj.prev.atomicNumber = this.elementList[prevIndex].atomicNumber
        obj.prev.elementSymbol = this.elementList[prevIndex].elementSymbol
        obj.next.atomicNumber = this.elementList[nextIndex].atomicNumber
        obj.next.elementSymbol = this.elementList[nextIndex].elementSymbol
        obj.isStart = obj.isEnd = false
      }
      return obj
    },
  },

  methods: {
    ...mapMutations(['updateIsBodyScrollLocked']),
    ...mapActions({
      toggleBalloonTip: 'balloon_tip/toggleBalloonTip',
      openDataPage: 'element/openDataPage',
      closeDataPage: 'element/closeDataPage',
      showToast: 'toast/showToast',
    }),
    /**
     * オーバーレイ表示時、データページのスクロール量を0にする
     * @param {object} el - オーバーレイの要素
     */
    enterFade(el) {
      el.querySelector('.data-page__main-wrapper').scrollTop = 0
    },
    /**
     * オーバーレイ表示前、bodyのスクロールを無効にする
     * @param {object} el - オーバーレイの要素
     */
    beforeEnterFade(el) {
      const targetEl = el.querySelector('.data-page__main-wrapper')
      disableBodyScroll(targetEl, {
        reserveScrollBarGap: true,
      })
      this.updateIsBodyScrollLocked(true)
    },
    /**
     * オーバーレイを閉じる前、bodyのスクロールを有効にする
     * @param {object} el - オーバーレイの要素
     */
    beforeLeaveFade(el) {
      clearAllBodyScrollLocks()
      this.updateIsBodyScrollLocked(false)
    },
    /**
     * データページを遷移する
     * @param {string} to - 'next'か'prev'
     */
    switchDataPage(to) {
      let z = this.currentDataPage.atomicNumber
      if (to === 'next') {
        z++
      } else if (to === 'prev') {
        z--
      }
      if (z >= 1 && z <= 118) {
        this.closeDataPage()
        this.openDataPage(z)
      }
    },
    /**
     * 漢字をクリップボードにコピーする
     * @param {string} text - 選択された元素の漢字
     */
    copyToClipboard(text) {
      const successMessage = '漢字をコピーしました'
      const failureMessage = '漢字のコピーに失敗しました'
      try {
        if (!navigator.clipboard) {
          const handler = (e) => {
            e.clipboardData.setData('text/plain', text)
            e.preventDefault()
            document.removeEventListener('copy', handler)
          }
          document.addEventListener('copy', handler)
          document.execCommand('copy')
          this.showToast(successMessage)
        } else {
          navigator.clipboard.writeText(text).then(
            () => this.showToast(successMessage),
            () => this.showToast(failureMessage)
          )
        }
      } catch (e) {
        this.showToast(failureMessage)
      }
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/periodic-table' as pt;

$areaGap: 10px;

/*
NOTICE: The style of the data-area block is defined globally
in the CommonDataArea component.
*/

/* 埋め込みツイートの読み込み前 */
blockquote.twitter-tweet {
  flex: none;
  @include g.flexCentering();
  width: 100%;
  height: 500px;
  @include g.font(en, light);
  font-size: 20px;
  opacity: 0.7;
}

/* 埋め込みツイート */
.twitter-tweet {
  margin: 0 !important;
}

.data-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: background-color pt.$dataPageTurnDuration;
  z-index: 300;
  @each $category in pt.$categoryList {
    $categoryColor: nth(
      pt.$categoryColorList,
      index(pt.$categoryList, $category)
    );
    &.is-category-#{$category} {
      background: rgba($categoryColor, 0.925);
    }
  }
  &--enter-active {
    transition: opacity 0.5s 0.3s;
  }
  &--leave-active {
    transition: opacity 0.5s;
  }
  &--enter,
  &--leave-to {
    opacity: 0;
  }

  &__main-wrapper {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;
    padding: 80px 10% 90px;
    @include g.breakpointMax(g.$tabletMax) {
      padding: 80px 50px 90px;
    }
    @include g.breakpointMax() {
      padding: 80px 15px 90px;
    }
    @include g.breakpointMax(g.$seMax) {
      padding: 80px 8px 90px;
    }
    &.is-overflow-hidden {
      overflow: hidden;
    }
  }

  &__containers-wrapper {
    display: grid;
    grid-template-areas:
      'base  kanji'
      'base  reading'
      'base  name'
      'tweet tweet'
      'close close';
    grid-template-rows: repeat(6, auto);
    grid-template-columns: 5fr 6fr;
    gap: $areaGap;
    @include g.breakpointMax(g.$tabletMax) {
      grid-template-areas:
        'base'
        'name'
        'kanji'
        'reading'
        'tweet'
        'close';
      grid-template-rows: repeat(7, auto);
      grid-template-columns: auto;
    }
  }

  &__main {
    position: relative;
  }

  &__main-info-icon {
    @include g.flexCentering();
    position: absolute;
    bottom: calc(100% + 10px);
    left: 2px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: pt.$colorWhite;
    filter: drop-shadow(0 0 3px #0002);
    transition: filter pt.$dataPageTurnDuration;
    &.is-category-h {
      filter: drop-shadow(0 0 3px #0005);
    }
  }

  &__container-base {
    grid-area: base;
    display: grid;
    grid-template-areas:
      'es an'
      'es pr'
      'es gr'
      'ca aw';
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 2fr 1fr;
    gap: $areaGap;
    @include g.breakpointMax() {
      grid-template-areas:
        'es es es'
        'an pr gr'
        'ca ca aw';
      grid-template-rows: auto 1fr 1fr;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__container-kanji {
    grid-area: kanji;
    display: grid;
    grid-template-areas: 'cn tw hk';
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: $areaGap;
  }

  &__container-reading {
    grid-area: reading;
    display: grid;
    grid-template-areas: 'py bp';
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: $areaGap;
  }

  &__container-name {
    grid-area: name;
    display: grid;
    grid-template-areas: 'ja en';
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: $areaGap;
    @include g.breakpointMax(g.$seMax) {
      grid-template-columns: repeat(2, auto);
    }
  }

  &__container-tweet {
    grid-area: tweet;
  }

  &__container-close {
    grid-area: close;
  }

  &__container-element-changer {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    height: 70px;
    padding: 0 20%;
    z-index: 301;
    @include g.breakpointMax(g.$tabletMax) {
      padding: 0 50px;
    }
    @include g.breakpointMax() {
      padding: 0 15px;
    }
  }

  &__area {
    &--element-symbol {
      grid-area: es;
    }
    &--category {
      grid-area: ca;
    }
    &--atomic-number {
      grid-area: an;
    }
    &--period {
      grid-area: pr;
    }
    &--group {
      grid-area: gr;
    }
    &--atomic-weight {
      grid-area: aw;
    }
    &--cn {
      grid-area: cn;
    }
    &--tw {
      grid-area: tw;
    }
    &--hk {
      grid-area: hk;
    }
    &--pinyin {
      grid-area: py;
    }
    &--bopomofo {
      grid-area: bp;
    }
    &--japanese-name {
      grid-area: ja;
    }
    &--english-name {
      grid-area: en;
    }
  }

  &__close-button {
    cursor: pointer;
    @include g.flexCentering();
    position: absolute;
    top: 20px;
    right: 50px;
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 0 3px #0002);
    transition: transform 0.3s, filter pt.$dataPageTurnDuration;
    z-index: 301;
    @include g.breakpointMax() {
      right: 20px;
    }
    &:hover {
      transform: scale(1.1);
    }
    &.is-category-h {
      filter: drop-shadow(0 0 3px #0005);
    }
  }

  &__close-button-icon {
    font-size: 50px;
    color: #fffc;
  }
}
</style>
