<template>
  <footer class="footer">
    <div class="footer__container">
      <p>© 2019-2022 gensokanji</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/gensokanji' as gk;

.footer {
  @include g.flexCentering;
  height: 200px;
  color: gk.$colorBlack;
  background-color: gk.$colorMain;
}
</style>
