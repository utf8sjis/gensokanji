<template>
  <section
    class="periodic-table"
    :class="{
      'is-overflow-scroll': isPeriodicTableOverflow,
      'is-overflow-hidden': isBodyScrollLocked,
    }"
    :style="{
      height: periodicTableRect.height * periodicTableScale + 'px',
    }"
  >
    <div
      ref="periodicTable"
      class="periodic-table__grid-container"
      :class="{ 'is-overflow-scroll': isPeriodicTableOverflow }"
      :style="{ transform: 'scale(' + periodicTableScale + ')' }"
    >
      <div class="table-guide">
        <div class="table-guide__category-container">
          <div
            v-for="(category, categoryIndex) in categoryList"
            :key="categoryIndex"
            class="table-guide__category"
          >
            <div
              class="table-guide__category-icon"
              :class="category.categoryClass"
            ></div>
            <div>{{ category.categoryName }}</div>
          </div>
        </div>
      </div>
      <div
        v-for="number in 18"
        :key="'group-' + number"
        class="periodic-table__group-number"
        :class="'periodic-table__group-number--group-' + number"
      >
        {{ number }}
      </div>
      <div
        v-for="number in 7"
        :key="'period-' + number"
        class="periodic-table__period-number"
        :class="'periodic-table__period-number--period-' + number"
      >
        {{ number }}
      </div>
      <div
        v-for="(cell, cellIndex) in otherCellList"
        :key="'la-ac-' + cellIndex"
        class="periodic-table__la-ac-wrapper"
        :class="cell.cellWrapperClass"
      >
        <div class="periodic-table__la-ac" :class="currentLang.class">
          <span>{{ cell[currentLang.key] }}</span>
        </div>
      </div>
      <button
        v-for="(element, elementIndex) in elementList"
        :key="'cell-' + elementIndex"
        type="button"
        class="periodic-table__cell-wrapper"
        :class="[
          'periodic-table__cell-wrapper--cell-' + element.elementSymbol,
          {
            'is-active': elementStatusList[elementIndex].isDataPageActive,
          },
        ]"
        @click="openDataPage(element.atomicNumber)"
      >
        <div
          class="periodic-table__cell"
          :class="[
            'periodic-table__cell--' + element.categoryClass,
            currentLang.class,
          ]"
        >
          <span
            class="periodic-table__cell-text"
            :class="[
              'periodic-table__cell-text--cell-' + element.elementSymbol,
              currentLang.class,
            ]"
            >{{ element[currentLang.key] }}</span
          >
        </div>
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

import { categoryList } from '@/assets/js/category_list.js'
import { otherCellList } from '@/assets/js/other_cell_list.js'

export default {
  data() {
    return {
      categoryList,
      otherCellList,
      /** 画面幅が周期表の幅を超過しているか否か */
      isPeriodicTableOverflow: false,
      /** 周期表の幅と高さ */
      periodicTableRect: {
        width: 0,
        height: 0,
      },
      /** 周期表の幅に対して作成したMediaQueryList */
      periodicTableMQL: null,
    }
  },

  computed: {
    ...mapGetters(['isBodyScrollLocked', 'periodicTableScale']),
    ...mapGetters({
      elementList: 'element/elementList',
      elementStatusList: 'element/elementStatusList',
      currentLang: 'lang/currentLang',
    }),
  },

  watch: {
    /**
     * 周期表の大きさの倍率を監視する
     */
    periodicTableScale() {
      this.createMediaQuery()
      this.checkPeriodicTableOverflow()
      const itemObj = JSON.parse(localStorage.getItem('itemStorage'))
      itemObj.periodicTableScale = this.periodicTableScale
      localStorage.setItem('itemStorage', JSON.stringify(itemObj))
    },
  },

  mounted() {
    // 周期表の幅と高さの初期値をセット
    this.periodicTableRect = this.$refs.periodicTable.getBoundingClientRect()
    // periodicTableScaleの読み出し
    const itemStorage = JSON.parse(localStorage.getItem('itemStorage'))
    this.updatePeriodicTableScale(itemStorage.periodicTableScale)
    // 周期表の幅に対するメディアクエリを作成
    this.createMediaQuery()
    this.checkPeriodicTableOverflow()
  },

  methods: {
    ...mapMutations(['updateIsBodyScrollLocked', 'updatePeriodicTableScale']),
    ...mapActions({
      openDataPage: 'element/openDataPage',
    }),
    /**
     * 画面幅が周期表の幅を超過しているかを示すハンドラ
     */
    checkPeriodicTableOverflow() {
      this.isPeriodicTableOverflow = !this.periodicTableMQL.matches
    },
    /**
     * 周期表の幅に対するメディアクエリを作成する
     */
    createMediaQuery() {
      this.periodicTableMQL = window.matchMedia(
        `(min-width: ${
          this.periodicTableRect.width * this.periodicTableScale
        }px)`
      )
      const handler = this.checkPeriodicTableOverflow
      try {
        this.periodicTableMQL.addEventListener('change', handler)
      } catch (e) {
        this.periodicTableMQL.addListener(handler) // for Safari 14 and earlier
      }
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/periodic-table' as pt;

$cellSize: 52px;
$cellGap: 8px;

// 族と周期のグリッド位置情報
$groupNumberList: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18;
$groupRowList: 1 2 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 1;
$periodNumberList: 1 2 3 4 5 6 7;

// 各元素のグリッド位置情報
//  prettier-ignore
$cellSymbolList:
  'H'  'He' 'Li' 'Be' 'B'  'C'  'N'  'O'  'F'  'Ne' 'Na' 'Mg' 'Al' 'Si' 'P'  'S'  'Cl' 'Ar'
  'K'  'Ca' 'Sc' 'Ti' 'V'  'Cr' 'Mn' 'Fe' 'Co' 'Ni' 'Cu' 'Zn' 'Ga' 'Ge' 'As' 'Se' 'Br' 'Kr'
  'Rb' 'Sr' 'Y'  'Zr' 'Nb' 'Mo' 'Tc' 'Ru' 'Rh' 'Pd' 'Ag' 'Cd' 'In' 'Sn' 'Sb' 'Te' 'I'  'Xe'
  'Cs' 'Ba' 'Hf' 'Ta' 'W'  'Re' 'Os' 'Ir' 'Pt' 'Au' 'Hg' 'Tl' 'Pb' 'Bi' 'Po' 'At' 'Rn'
  'Fr' 'Ra' 'Rf' 'Db' 'Sg' 'Bh' 'Hs' 'Mt' 'Ds' 'Rg' 'Cn' 'Nh' 'Fl' 'Mc' 'Lv' 'Ts' 'Og'
  'La' 'Ce' 'Pr' 'Nd' 'Pm' 'Sm' 'Eu' 'Gd' 'Tb' 'Dy' 'Ho' 'Er' 'Tm' 'Yb' 'Lu'
  'Ac' 'Th' 'Pa' 'U'  'Np' 'Pu' 'Am' 'Cm' 'Bk' 'Cf' 'Es' 'Fm' 'Md' 'No' 'Lr';
//  prettier-ignore
$cellRowList:
  1  1  2  2  2  2  2  2  2  2  3  3  3  3  3  3  3  3
  4  4  4  4  4  4  4  4  4  4  4  4  4  4  4  4  4  4
  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5
  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6
  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7
  8  8  8  8  8  8  8  8  8  8  8  8  8  8  8
  9  9  9  9  9  9  9  9  9  9  9  9  9  9  9;
//  prettier-ignore
$cellColumnList:
  1  18 1  2  13 14 15 16 17 18 1  2  13 14 15 16 17 18
  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
  1  2  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
  1  2  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17
  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17;

// 見た目変更時のアニメーション
$animeNameList: 'intoAN' 'intoES' 'intoJA' 'intoEN' 'intoSC' 'intoTW' 'intoHK';
@each $animeName in $animeNameList {
  @keyframes #{$animeName} {
    0% {
      transform-origin: center top;
      color: transparent;
      transform: rotateZ(12deg);
    }
    25% {
      transform: rotateZ(-8deg);
    }
    50% {
      transform: rotateZ(3deg);
    }
    75% {
      transform: rotateZ(-1deg);
    }
    100% {
      transform-origin: center top;
      transform: rotateZ(0deg);
    }
  }
}

.periodic-table {
  @include g.flexCentering(center, flex-start);
  overflow: visible;
  -webkit-overflow-scrolling: touch;
  transition: height 0.3s;
  &.is-overflow-scroll {
    @include g.flexCentering(flex-start, flex-start);
    overflow-x: scroll;
    overflow-y: hidden;
  }
  &.is-overflow-hidden {
    overflow: hidden;
  }

  &__grid-container {
    user-select: none;
    display: grid;
    padding: 40px 60px;
    grid-template: repeat(9, $cellSize) / repeat(18, $cellSize);
    row-gap: $cellGap;
    column-gap: $cellGap;
    transform-origin: top center;
    transition: transform 0.3s;
    &.is-overflow-scroll {
      transform-origin: top left;
    }
  }

  &__group-number {
    @include g.flexCentering();
    height: 0;
    @include g.font(en);
    font-size: 20px;
    transform: translateY(-15px);
    @each $groupNumber in $groupNumberList {
      $groupRow: nth($groupRowList, index($groupNumberList, $groupNumber));
      &--group-#{$groupNumber} {
        grid-column: #{$groupNumber} / span 1;
        grid-row: #{$groupRow} / span 1;
      }
    }
  }

  &__period-number {
    @include g.flexCentering();
    width: 0;
    @include g.font(en);
    font-size: 20px;
    transform: translateX(-15px);
    @each $periodNumber in $periodNumberList {
      &--period-#{$periodNumber} {
        grid-column: 1 / span 1;
        grid-row: #{$periodNumber} / span 1;
      }
    }
  }

  &__cell-wrapper {
    cursor: pointer;
    transition: transform 1s, opacity, 1s;
    outline: none;
    @each $cellClass in $cellSymbolList {
      $cellRow: nth($cellRowList, index($cellSymbolList, $cellClass));
      $cellColumn: nth($cellColumnList, index($cellSymbolList, $cellClass));
      &--cell-#{$cellClass} {
        grid-column: #{$cellColumn} / span 1;
        grid-row: #{$cellRow} / span 1;
        z-index: #{$cellRow};
      }
    }
    &.is-active {
      cursor: default;
      transform: translate3d(0, -5px, 100px) scale(2) rotateY(1turn);
      opacity: 0;
      z-index: 50;
    }
  }

  &__cell {
    @include g.flexCentering();
    width: 100%;
    height: 100%;
    border-radius: 5px;
    color: pt.$colorWhite;
    text-align: center;
    @include g.boxShadow(2);
    transform: translate3d(0, 0, 0) scale(1) rotateY(0);
    transition-property: transform, background-color, color, border-color,
      box-shadow;
    transition-duration: 1s;
    @each $category in pt.$categoryList {
      $categoryColor: nth(
        pt.$categoryColorList,
        index(pt.$categoryList, $category)
      );
      &--category-#{$category} {
        @if $category == h {
          color: pt.$colorHydrogenBlack;
        }
        border: 2.5px solid $categoryColor;
        background: $categoryColor;
        &:hover {
          @if $category == h {
            border-color: pt.$colorHydrogenBlack;
            color: pt.$colorHydrogenBlack;
          } @else {
            color: $categoryColor;
          }
          transform: translate3d(0, -5px, 10px) scale(1.2) rotateY(0);
          @include g.boxShadow(4);
          background: pt.$colorWhite;
          transition-property: transform, background-color, color, border-color,
            box-shadow;
          transition-duration: 0.2s;
        }
      }
    }
    &.is-atomic-number {
      padding-bottom: 4px;
      @include g.font(en, light);
      font-size: 30px;
      animation: intoAN 0.8s;
    }
    &.is-element-symbol {
      padding-bottom: 4px;
      @include g.font(en, light);
      font-size: 30px;
      animation: intoES 0.8s;
    }
    &.is-simplified-chinese {
      padding-bottom: 5px;
      font-size: 32px;
      @include g.font(cn);
      animation: intoSC 0.8s;
    }
    &.is-taiwan-trad {
      padding-bottom: 5px;
      font-size: 32px;
      @include g.font(tw);
      animation: intoTW 0.8s;
    }
    &.is-hongkong-trad {
      padding-bottom: 5px;
      font-size: 32px;
      @include g.font(hk);
      animation: intoHK 0.8s;
    }
    &.is-japanese-name {
      padding-bottom: 1px;
      font-size: 11px;
      animation: intoJA 0.8s;
    }
    &.is-english-name {
      padding-bottom: 3px;
      @include g.font(en);
      font-size: 10px;
      animation: intoEN 0.8s;
    }
  }

  &__cell-text {
    &--cell-Mg,
    &--cell-Ge,
    &--cell-Mn,
    &--cell-Tc,
    &--cell-La,
    &--cell-Dy,
    &--cell-Cf,
    &--cell-Es {
      &.is-english-name {
        transform: scale(0.95);
      }
    }
    &--cell-P,
    &--cell-Sg,
    &--cell-Cn,
    &--cell-Nd,
    &--cell-Pm,
    &--cell-Lr {
      &.is-english-name {
        transform: scale(0.9);
      }
    }
    &--cell-Mo,
    &--cell-Lv,
    &--cell-Pa,
    &--cell-Md {
      &.is-english-name {
        transform: scale(0.85);
      }
    }
    &--cell-Rg {
      &.is-english-name {
        transform: scale(0.8);
      }
    }
    &--cell-Rf,
    &--cell-Ds,
    &--cell-Pr {
      &.is-english-name {
        transform: scale(0.75);
      }
    }
  }

  &__la-ac-wrapper {
    &--lanthanoid {
      grid-column: 3 / span 1;
      grid-row: 6 / span 1;
    }
    &--actinoid {
      grid-column: 3 / span 1;
      grid-row: 7 / span 1;
    }
  }

  &__la-ac {
    @include g.flexCentering();
    width: 100%;
    height: 100%;
    color: pt.$colorBlack;
    text-align: center;
    line-height: 1;
    white-space: pre;
    &.is-atomic-number {
      padding-bottom: 4px;
      @include g.font(en);
      font-size: 20px;
      animation: intoAN 0.8s;
    }
    &.is-element-symbol {
      padding-bottom: 4px;
      @include g.font(en);
      font-size: 20px;
      animation: intoES 0.8s;
    }
    &.is-simplified-chinese {
      padding-bottom: 3px;
      font-size: 20px;
      @include g.font(cn);
      animation: intoSC 0.8s;
    }
    &.is-taiwan-trad {
      padding-bottom: 3px;
      font-size: 20px;
      @include g.font(tw);
      animation: intoTW 0.8s;
    }
    &.is-hongkong-trad {
      padding-bottom: 3px;
      font-size: 20px;
      @include g.font(hk);
      animation: intoHK 0.8s;
    }
    &.is-japanese-name {
      padding-bottom: 2px;
      font-size: 10px;
      animation: intoJA 0.8s;
    }
    &.is-english-name {
      padding-bottom: 3px;
      @include g.font(en);
      font-size: 10px;
      animation: intoEN 0.8s;
    }
  }
}

.table-guide {
  grid-row: 1 / span 1;
  grid-column: 4 / span 8;

  &__category-container {
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(4, 1fr);
    grid-auto-flow: column;
    padding: 7px 13px;
    background: #e8e8e8;
    border-radius: 5px;
  }

  &__category {
    display: grid;
    grid-template-columns: 22px auto;
    column-gap: 4px;
    align-items: center;
    font-size: 13px;
  }

  &__category-icon {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    @include g.boxShadow(2);
    @each $category in pt.$categoryList {
      $categoryColor: nth(
        pt.$categoryColorList,
        index(pt.$categoryList, $category)
      );
      &--category-#{$category} {
        background: $categoryColor;
      }
    }
  }
}
</style>
