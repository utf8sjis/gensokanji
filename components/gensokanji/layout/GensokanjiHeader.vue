<template>
  <header :style="{ background: headerBackground }">
    <div
      class="logo"
      :style="{ transform: `translate(0, ${scrollY * 0.45}px)` }"
    >
      <nuxt-link to="/">gensokanji</nuxt-link>
    </div>
    <div
      class="moon"
      :style="{
        transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.9}px)`,
      }"
    >
      <img
        class="moon__image"
        src="@/assets/img/gensokanji/moon.svg"
        alt="月"
      />
    </div>
    <div
      class="heading-container"
      :style="{
        transform: `translate(0, ${scrollY * 0.5}px)`,
        opacity: 1 - scrollY * 0.005,
      }"
    >
      <h1 class="heading">{{ heading }}</h1>
      <div class="date">
        <div class="date__item">
          <div class="date__icon">
            <fa-icon :icon="['far', 'calendar-check']" />
          </div>
          <div>{{ publishedDate }}</div>
        </div>
        <div class="date__item">
          <div class="date__icon">
            <fa-icon :icon="['fas', 'arrow-rotate-right']" />
          </div>
          <div>{{ updatedDate }}</div>
        </div>
      </div>
    </div>
    <div class="skyline">
      <div class="skyline__image"></div>
    </div>
  </header>
</template>

<script>
import scssModule from '@/assets/scss/module/_index.scss'

export default {
  props: {
    heading: { type: String, required: true },
    publishedDate: { type: String, required: true },
    updatedDate: { type: String, required: true },
  },

  data() {
    return {
      scssModule,
      scrollY: null,
    }
  },

  computed: {
    headerBackground() {
      return `linear-gradient(${scssModule.colorGensokanjiMidnight} ${
        -20 + this.scrollY
      }px, ${scssModule.colorGensokanjiNavy}, ${
        scssModule.colorGensokanjiNavy
      })`
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY
    })
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/gensokanji' as gk;

header {
  position: relative;
  overflow: hidden;
  padding: 70px 15px 60px;
  @include g.breakpoint(g.$tablet) {
    padding: 70px 10% 60px;
  }
  @include g.breakpoint() {
    padding: 70px 15% 60px;
  }
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  line-height: 1;
  @include g.font(en);
  font-size: 30px;
  @include g.breakpoint(g.$tablet) {
    padding: 15px 30px;
  }
}

.moon {
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  @include g.breakpoint(g.$tablet) {
    padding: 15px 30px;
  }

  &__image {
    height: 35px;
  }
}

.heading-container {
  padding-bottom: 8px;
}

.heading {
  @include g.font(ja2, bold);
  font-size: 28px;
  @include g.breakpoint() {
    font-size: 32px;
  }
}

.date {
  display: grid;
  grid-template-rows: 25px;
  grid-template-columns: auto 1fr;
  gap: 0 10px;
  color: rgba(gk.$colorWhite, 0.5);

  &__item {
    @include g.flexCentering(flex-start, center);
  }

  &__icon {
    padding-right: 5px;
  }
}

.skyline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-width: 150px * 5; // 必ずheightいっぱいにして画像が1つは入る大きさ
  height: 150px;
  transform: translateY(100px);

  &__image {
    height: 100%;
    background: url('@/assets/img/gensokanji/skyline1.svg') repeat-x 0% 0% /
      contain;
  }
}
</style>
