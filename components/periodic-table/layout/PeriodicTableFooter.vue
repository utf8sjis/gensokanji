<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <a
          href="https://twitter.com/gensokanji_bot?ref_src=twsrc%5Etfw"
          class="footer__twitter-follow-button twitter-follow-button"
          data-lang="en"
          data-size="large"
          data-show-count="true"
          >Follow @gensokanji_bot</a
        >
      </div>
      <div class="footer__content">元素の漢字周期表 v4.0.1</div>
      <div class="footer__content">© 2019-2022 gensokanji</div>
    </div>
  </footer>
</template>

<style lang="scss">
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/periodic-table' as p;

.footer {
  @include g.flexCentering();
  padding: 40px 5px;
  color: p.$colorWhite;
  background: p.$colorMainGrad;
  @include g.breakpointMax() {
    padding-bottom: 70px;
  }

  &__container {
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
  }

  &__content {
    @include g.flexCentering();
  }

  &__twitter-follow-button {
    /* iframeを取得できなかった場合 */
    color: p.$colorWhite;
    &:hover {
      color: p.$colorWhiteA;
    }
  }
}
</style>
