<template>
  <section class="share">
    <div class="share__container">
      <ul class="share__links-container">
        <li class="share__link _twitter">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/share?url=https://gensokanji.netlify.app"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="share__link _facebook">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/sharer/sharer.php?u=https://gensokanji.netlify.app"
          >
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li class="share__link _line">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://social-plugins.line.me/lineit/share?url=https://gensokanji.netlify.app"
          >
            <i class="fab fa-line"></i>
          </a>
        </li>
      </ul>
      <div class="share__share-icon">
        <span class="material-icons">share</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;
@use '@/assets/scss/global/gensokanji' as p;

.share {
  @include g.flexCentering;

  &__container {
    position: relative;
    border: 2px solid p.$colorMain;
    border-radius: 6px;
  }

  &__share-icon {
    @include g.flexCentering;
    position: absolute;
    top: 50%;
    left: 0;
    padding: 5px 0;
    transform: translateX(-50%) translateY(-50%);
    background-color: p.$colorBase;
  }

  &__links-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    gap: 30px;
    padding: 15px 40px;
  }

  &__link {
    font-size: 30px;
    transition: color 0.3s, filter 0.3s;
    @include g.hover {
      &:hover {
        &._twitter {
          color: g.$colorTwitter;
        }
        &._facebook {
          color: g.$colorFacebook;
        }
        &._line {
          color: g.$colorLINE;
        }
      }
    }
  }
}
</style>
