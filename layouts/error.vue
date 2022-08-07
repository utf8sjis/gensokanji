<template>
  <div class="page">
    <div class="content-wrapper">
      <div class="content">
        <h1>{{ error.statusCode }}</h1>
        <h2>{{ error.message }}</h2>
        <p>{{ description }}</p>
        <p><a href="/" class="u-link u-link--gk">トップへ戻る</a></p>
      </div>
    </div>
    <gensokanji-footer />
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',

  props: {
    error: { type: Object, default: null },
  },

  head() {
    return {
      title: this.description,
    }
  },

  computed: {
    description() {
      const contentDict = {
        404: { description: 'お探しのページは見つかりませんでした' },
      }
      return (
        contentDict[this.error.statusCode]?.description ??
        'エラーが発生しました'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/gensokanji' as gk;

.page {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  @include g.font(ja);
  font-size: 16px;
  line-height: 1.2;
  color: gk.$colorWhite;
  background: gk.$colorBase;
  @include g.breakpointMax() {
    font-size: 15px;
  }
}

.content-wrapper {
  @include g.flexCentering;
}

.content {
  display: grid;
  gap: 10px;
  text-align: center;
  transform: translateY(-15px);
}

h1 {
  @include g.font(en2);
  font-size: 48px;
}

h2 {
  @include g.font(en2);
  font-size: 24px;
}
</style>
