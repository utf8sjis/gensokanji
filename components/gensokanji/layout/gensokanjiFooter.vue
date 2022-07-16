<template>
  <footer class="footer">
    <div class="footer__container">
      <p>© 2019-2022 gensokanji</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/gensokanji' as p;

.footer {
  @include g.flexCentering;
  height: 200px;
  color: p.$colorBlack;
  background-color: p.$colorMain;
}
</style>
