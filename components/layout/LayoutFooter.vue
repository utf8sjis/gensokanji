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

.footer {
  @include g.flexCentering();
  padding: 40px 5px;
  color: g.$colorWhite;
  background: g.$colorMainGrad;
  @include g.mediaQuery() {
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
    color: g.$colorWhite;
    &:hover {
      color: g.$colorWhiteA;
    }
  }
}
</style>
