<template>
  <transition name="nav-">
    <nav v-show="isNavOpened" class="nav">
      <div class="nav__content-wrapper">
        <div class="nav__content">
          <section class="nav__section">
            <div class="nav__section-title">テーマカラー</div>
            <div class="nav__theme-switch">
              <div class="nav__theme-switch-button-wrapper">
                <button
                  v-for="(theme, themeId) in themeDict"
                  :key="themeId"
                  type="button"
                  class="nav__theme-switch-button"
                  :class="'nav__theme-switch-button--' + themeId"
                  :style="{ background: theme.main2 }"
                  @click="switchTheme(themeId)"
                >
                  {{ theme.name }}
                </button>
              </div>
            </div>
          </section>
          <template
            v-for="(navLinkSection, navLinkSectionIndex) in navLinkSectionList"
          >
            <section :key="navLinkSectionIndex" class="nav__section">
              <div class="nav__section-title">
                {{ navLinkSection.title }}
              </div>
              <div class="nav__link-container">
                <a
                  v-for="(navLink, navLinkIndex) in navLinkSection.links"
                  :key="navLinkIndex"
                  class="nav__link"
                  v-bind="
                    navLink.isTargetBlank
                      ? {
                          target: '_blank',
                          rel: 'noreferrer noopener',
                        }
                      : false
                  "
                  :href="navLink.href"
                >
                  <div class="nav__link-image-container">
                    <img
                      class="nav__link-image"
                      :src="navLink.src"
                      :alt="navLink.alt"
                    />
                    <div class="nav__image-inset-shadow"></div>
                    <i
                      v-show="navLink.isTargetBlank"
                      class="nav__image-external-link-icon fas fa-external-link-alt"
                    ></i>
                  </div>
                  <div class="nav__link-content">
                    <div class="nav__link-title">{{ navLink.title }}</div>
                    <div class="nav__link-desc">{{ navLink.desc }}</div>
                  </div>
                </a>
              </div>
            </section>
          </template>
          <div class="nav__illustration">
            <img
              class="nav__illustration-image"
              src="@/assets/img/periodic-table/demon_core.png"
              alt="デーモンコアのイラスト"
            />
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

import { themeDict } from '@/assets/js/theme_dict.js'
import { navLinkSectionList } from '@/assets/js/nav_link_list.js'

export default {
  data() {
    return {
      themeDict,
      navLinkSectionList,
    }
  },

  computed: {
    ...mapGetters(['isNavOpened']),
  },

  mounted() {
    const themeId = JSON.parse(localStorage.getItem('itemStorage')).themeId
    this.switchTheme(themeId)
  },

  methods: {
    switchTheme(id) {
      const theme = this.themeDict[id]
      const rootElement = document.documentElement
      const mainGrad = `linear-gradient(0.375turn, ${theme.main1}e6, ${theme.main2}e6, ${theme.main3}e6)`
      rootElement.style.setProperty('--theme-main-1', theme.main1)
      rootElement.style.setProperty('--theme-main-2', theme.main2)
      rootElement.style.setProperty('--theme-main-2-light', theme.main2Light)
      rootElement.style.setProperty('--theme-main-2-dark', theme.main2Dark)
      rootElement.style.setProperty('--theme-main-3', theme.main3)
      rootElement.style.setProperty('--theme-main-grad', mainGrad)
      const itemStorage = JSON.parse(localStorage.getItem('itemStorage'))
      itemStorage.themeId = id
      localStorage.setItem('itemStorage', JSON.stringify(itemStorage))
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/periodic-table' as p;

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80vh;
  color: p.$colorWhite;
  background: p.$colorMainGrad;
  z-index: 201;
  &--enter-active,
  &--leave-active {
    transition-property: opacity, transform;
    transition-duration: p.$navOpenTime;
  }
  &--enter,
  &--leave-to {
    opacity: 0;
    transform: translateY(-80vh);
  }
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    width: 100%;
    height: 10px;
    background: linear-gradient(#0003, transparent);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(transparent, #fff3, #fff3);
  }

  &__content-wrapper {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;
    padding: p.$headerFixedContainerHeight + 30px 100px 30px;
    @include g.breakpointMax() {
      padding: p.$headerFixedContainerHeightPhone + 30px 15px 30px;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: auto;
    row-gap: 30px;
  }

  &__section {
    display: grid;
    grid-template-columns: auto;
    row-gap: 25px;
  }

  &__section-title {
    position: relative;
    padding-bottom: 5px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: p.$colorWhite;
    }
  }

  &__theme-switch {
    @include g.flexCentering();
  }

  &__theme-switch-button-wrapper {
    display: grid;
    grid-template-rows: repeat(2, 40px);
    grid-template-columns: repeat(3, 70px);
    gap: 15px 20px;
  }

  &__theme-switch-button {
    cursor: pointer;
    @include g.flexCentering();
    border: 1px solid p.$colorWhite;
    border-radius: 3px;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.1);
    }
    &--default {
      grid-row: 1 / span 1;
      grid-column: 1 / -1;
    }
    &--wakaba {
      grid-row: 2 / span 1;
      grid-column: 1 / span 1;
    }
    &--ramune {
      grid-row: 2 / span 1;
      grid-column: 2 / span 1;
    }
    &--momiji {
      grid-row: 2 / span 1;
      grid-column: 3 / span 1;
    }
  }

  &__link-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    row-gap: 20px;
    column-gap: 20px;
    @include g.breakpointMax() {
      padding: 0 15px;
    }
  }

  &__link {
    overflow: hidden;
    border-radius: 5px;
    border: 2.5px solid p.$colorWhite;
    @include g.boxShadow(2);
    color: p.$colorBlack;
    background: p.$colorWhite;
  }

  &__link-image-container {
    position: relative;
  }

  &__link-image {
    width: 100%;
  }

  &__image-inset-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: inset 0 0 20px 0 #0002;
  }

  &__image-external-link-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    filter: drop-shadow(0 0 2px #0005);
    font-size: 16px;
    color: p.$colorWhite;
  }

  &__link-content {
    display: grid;
    grid-template-columns: auto;
    row-gap: 10px;
    padding: 10px;
  }

  &__link-title {
    overflow: hidden;
    border-bottom: solid 1px #0003;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__illustration {
    @include g.flexCentering();
  }

  &__illustration-image {
    height: 100px;
    opacity: 0.5;
    @include g.breakpointMax() {
      height: 80px;
    }
  }
}
</style>
