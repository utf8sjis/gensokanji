<template>
  <footer class="footer">
    <div class="footer__container">
      <p>© 2019-2023 gensokanji</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/gensokanji' as gk;

.footer {
  @include g.flexCentering;
  height: 200px;
  color: gk.$colorBlack;
  background-color: gk.$colorMain;
}
</style>
