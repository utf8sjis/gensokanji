<template>
  <div class="page">
    <gensokanji-header />
    <gensokanji-main />
    <gensokanji-share />
    <gensokanji-footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    // 画面高さいっぱいの値を取得しvhをCSS変数にセットする
    const setViewportHeight = function () {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    setViewportHeight()

    // リサイズ時にもvhを再取得（ただし画面幅が変わったときのみ）
    let vw = window.innerWidth
    window.addEventListener('resize', () => {
      if (vw !== window.innerWidth) {
        vw = window.innerWidth
        setViewportHeight()
      }
    })
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/gensokanji' as gk;

.page {
  display: grid;
  grid-gap: 100px;
  gap: 100px;
  overflow-x: hidden;
  background: gk.$colorBase;
  @include g.font(ja);
  color: gk.$colorWhite;
}
</style>
