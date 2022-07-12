<template>
  <div class="element-search">
    <div class="element-search__container">
      <div class="element-search__select-wrapper">
        <select v-model="searchType" class="element-search__select">
          <option value="all">すべて</option>
          <option value="number">原子番号</option>
          <option value="symbol">元素記号</option>
          <option value="ja">日本語名</option>
          <option value="en">英語名</option>
          <option value="zh">中国語名</option>
        </select>
        <i class="element-search__select-icon fas fa-chevron-down"></i>
      </div>
      <div class="element-search__input-wrapper">
        <input
          ref="elementSearchInput"
          type="text"
          class="element-search__input"
          @input="seachElements"
        />
        <button
          v-show="$refs.elementSearchInput && $refs.elementSearchInput.value"
          type="button"
          class="element-search__input-reset-button"
          @click="resetInput"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div
        class="element-search__result-container"
        :class="{
          'has-no-results':
            !$refs.elementSearchInput || !$refs.elementSearchInput.value,
        }"
      >
        <div class="element-search__result-bar">
          <div>検索結果：{{ resultList.length }} 元素</div>
          <div class="u-spacer"></div>
          <button
            type="button"
            class="element-search__result-bar-button"
            @click="isShownResultList = !isShownResultList"
          >
            <i
              v-show="resultList.length && isShownResultList"
              class="fas fa-chevron-circle-up"
            ></i
            ><i
              v-show="resultList.length && !isShownResultList"
              class="fas fa-chevron-circle-down"
            ></i>
          </button>
        </div>
        <ul
          v-show="resultList.length && isShownResultList"
          class="element-search__result-list"
        >
          <template v-for="(result, resultIndex) in resultList">
            <li :key="'button-' + result.element.atomicNumber">
              <button
                type="button"
                class="element-search__result-item-button"
                @click="openDataPage(result.element.atomicNumber)"
              >
                <span
                  >{{ result.element.atomicNumber }}
                  {{ result.element.elementSymbol }}
                  {{ result.element.japaneseName }}</span
                >
                <inline-tag
                  v-for="type in result.matchTypeList"
                  :key="type.tagName"
                  class="u-mr5"
                  :type="type.className"
                  >{{ type.tagName }}</inline-tag
                >
              </button>
            </li>
            <li
              v-show="resultIndex !== resultList.length - 1"
              :key="'separator-' + result.element.atomicNumber"
              class="element-search__result-separator"
            ></li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      searchType: 'all',
      isShownResultList: false,
      resultList: [],
    }
  },

  computed: {
    ...mapGetters({
      elementList: 'element/elementList',
    }),
  },

  watch: {
    /**
     * 元素の検索対象の変更を監視し、inputイベントを発生させる
     */
    searchType() {
      const e = new Event('input')
      this.$refs.elementSearchInput.dispatchEvent(e)
    },
  },

  methods: {
    ...mapActions({
      openDataPage: 'element/openDataPage',
    }),
    /**
     * 検索対象をもとに元素を検索し結果をリストに格納する
     * @param {object} e - InputEvent
     */
    seachElements(e) {
      this.resultList = []
      const value = e.target.value.toLowerCase()

      if (value) {
        this.isShownResultList = true

        const sortedElementList = this.elementList.slice()
        if (this.searchType === 'symbol') {
          // 元素記号は完全一致likeな表示にした方がわかりやすい
          sortedElementList.sort(
            (a, b) => a.elementSymbol.length - b.elementSymbol.length
          )
        }

        sortedElementList.forEach((element) => {
          const typeList = []
          typeList.push({
            type: {
              type: 'number',
              className: 'atomic-number',
              tagName: '番号',
            },
            // eslint-disable-next-line eqeqeq
            isMatch: element.atomicNumber == value,
          })
          typeList.push({
            type: {
              type: 'symbol',
              className: 'element-symbol',
              tagName: '記号',
            },
            isMatch: element.elementSymbol.toLowerCase().includes(value),
          })
          typeList.push({
            type: { type: 'en', className: 'english-name', tagName: '英' },
            isMatch: element.englishName.toLowerCase().includes(value),
          })
          typeList.push({
            type: { type: 'ja', className: 'japanese-name', tagName: '日' },
            isMatch:
              element.japaneseName.includes(value) ||
              element.japaneseReading.includes(value),
          })
          typeList.push({
            type: {
              type: 'zh',
              className: 'simplified-chinese',
              tagName: '大陸',
            },
            isMatch: element.simplifiedChinese.includes(value),
          })
          typeList.push({
            type: { type: 'zh', className: 'taiwan-trad', tagName: '台湾' },
            isMatch: element.taiwanTrad.includes(value),
          })
          typeList.push({
            type: { type: 'zh', className: 'hongkong-trad', tagName: '香港' },
            isMatch: element.hongkongTrad.includes(value),
          })

          if (
            typeList.some(
              (item) =>
                item.isMatch &&
                (this.searchType === 'all' ||
                  item.type.type === this.searchType)
            )
          ) {
            const matchTypeList = []
            typeList.forEach((item) => {
              if (item.isMatch) {
                matchTypeList.push(item.type)
              }
            })
            this.resultList.push({ element, matchTypeList })
          }
        })
      }
    },
    /**
     * 元素の検索結果と入力をリセットする
     */
    resetInput() {
      this.resultList = []
      this.$refs.elementSearchInput.value = ''
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/global' as g;

$inputHeight: 28px;

.element-search {
  @include g.flexCentering();
  position: relative;
  overflow: visible;
  height: 100%;
  padding: 0 20px;

  &__container {
    @include g.flexCentering();
    width: 100%;
  }

  &__select-wrapper {
    flex: none;
    position: relative;
  }

  &__select {
    width: 100px;
    height: $inputHeight;
    border: 2px solid g.$colorMain2;
    border-radius: 2px;
    padding: 0 20px 0 5px;
    background: g.$colorWhite;
  }

  &__select-icon {
    @include g.flexCentering();
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: 2px;
    width: 20px;
    height: 20px;
    font-size: 13px;
    transform: translateY(-50%);
  }

  &__input-wrapper {
    position: relative;
    margin-left: 20px;
    width: 100%;
    @include g.mediaQuery() {
      margin-left: 10px;
    }
  }

  &__input {
    width: 100%;
    height: $inputHeight;
    border: 2px solid g.$colorMain2;
    border-radius: 2px;
    padding: 0 23px 0 10px;
    background: g.$colorWhite;
    transition: border-color 0.2s;
    &:focus {
      border-color: g.$colorMain1;
    }
  }

  &__input-reset-button {
    @include g.flexCentering();
    position: absolute;
    top: 50%;
    right: 3px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
  }

  &__result-container {
    margin-left: 20px;
    width: 100%;
    height: $inputHeight;
    background: none;
    @include g.mediaQuery() {
      position: absolute;
      right: 20px;
      top: calc(100% - 13px);
      width: 75%;
      height: auto;
      border: 2px solid g.$colorLightGray;
      border-radius: 3px;
      background: g.$colorWhite;
      &.has-no-results {
        display: none;
      }
    }
  }

  &__result-bar {
    @include g.flexCentering(flex-start, center);
    height: 100%;
    @include g.mediaQuery() {
      height: 30px;
      padding: 0 10px;
    }
  }

  &__result-bar-button {
    @include g.flexCentering();
    height: 100%;
    padding-left: 5px;
    font-size: 20px;
    color: g.$colorMain2;
    @include g.mediaQuery() {
      font-size: 18px;
    }
  }

  &__result-list {
    display: grid;
    grid-template-columns: auto;
    gap: 5px 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    max-height: 200px;
    border: 2px solid g.$colorLightGray;
    border-radius: 3px;
    padding: 10px;
    background: g.$colorWhite;
    @include g.mediaQuery() {
      border: none;
      padding: 5px 10px 10px;
    }
  }

  &__result-separator {
    width: 100%;
    height: 1px;
    background: g.$colorLightGray;
  }

  &__result-item-button {
    width: 100%;
    min-height: 25px;
    transition: background 0.2s;
    &:active {
      background: #0001;
    }
  }
}
</style>
