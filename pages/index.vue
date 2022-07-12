<template>
  <div class="body">
    <header class="header">
      <div class="header__moon-container">
        <img class="header__moon" src="@/assets/img/home/moon.svg" />
      </div>
      <div class="header__cloud-container">
        <img class="header__cloud" src="@/assets/img/home/cloud.svg" />
        <img class="header__cloud" src="@/assets/img/home/cloud.svg" />
      </div>
      <div class="header__skyline-container _layer-3">
        <img
          class="header__skyline _layer-3"
          src="@/assets/img/home/skyline3.svg"
        />
        <img
          class="header__skyline _layer-3"
          src="@/assets/img/home/skyline3.svg"
        />
      </div>
      <div class="header__skyline-container _layer-2">
        <img
          class="header__skyline _layer-2"
          src="@/assets/img/home/skyline2.svg"
        />
        <img
          class="header__skyline _layer-2"
          src="@/assets/img/home/skyline2.svg"
        />
      </div>
      <div class="header__logo-container">
        <img class="header__nh" src="@/assets/img/home/nh.svg" />
        <h1 class="header__logo">gensokanji</h1>
        <!-- eslint-disable-next-line no-irregular-whitespace -->
        <p class="header__subtitle">幻　想　閑　事</p>
      </div>
      <div class="header__skyline-container _layer-1">
        <img
          class="header__skyline _layer-1"
          src="@/assets/img/home/skyline1.svg"
        />
        <img
          class="header__skyline _layer-1"
          src="@/assets/img/home/skyline1.svg"
        />
      </div>
    </header>

    <main class="main">
      <section class="main__section">
        <h2 class="main__title">Works</h2>
        <ul class="main__cards-container">
          <li class="card">
            <a href="/periodic-table">
              <div class="card__image-container">
                <img
                  class="card__image"
                  src="@/assets/img/periodic_table.png"
                  alt="元素の漢字周期表"
                />
              </div>
            </a>
            <div class="card__title">元素の漢字周期表</div>
          </li>
        </ul>
      </section>
      <section class="main__section">
        <h2 class="main__title">Links</h2>
        <ul class="main__cards-container">
          <li class="card">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/gensokanji_bot"
            >
              <div class="card__image-container">
                <img
                  class="card__image"
                  src="@/assets/img/gensokanji_bot.png"
                  alt="元素の漢字bot"
                />
                <div class="card__image-inset-shadow"></div>
                <i
                  class="card__external-link-icon fas fa-external-link-alt"
                ></i>
              </div>
            </a>
            <div class="card__title">元素の漢字bot</div>
          </li>
        </ul>
      </section>
    </main>

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

    <footer class="footer">
      <div class="footer__container">
        <p>v2.0.0</p>
        <p>© 2019-2022 gensokanji</p>
      </div>
    </footer>
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

    // 読み込み後明示的にアニメーションを開始する
    const actElements = document.querySelectorAll(
      '.header__logo-container,' +
        '.header__moon,' +
        '.header__cloud-container,' +
        '.header__cloud,' +
        '.header__skyline-container,' +
        '.header__skyline'
    )
    actElements.forEach((el) => {
      el.classList.add('_act')
    })

    // .cardの交差を監視し、フェードインアニメーションを適用する
    const cardsElements = document.querySelectorAll('.card')
    const cardsObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }
    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('_fade-in')
        }
      })
    }, cardsObserverOptions)

    cardsElements.forEach((el) => {
      cardsObserver.observe(el)
    })
  },
}
</script>

<style lang="scss" scoped>
/* 変数・関数定義 */
$colorBase: #293040;
$colorMain: #f0f0f0;
$colorAccent: #e1eb7b;
$colorBlack: #303030;
$colorWhite: #f0f0f0;

$colorTwitter: #55acee;
$colorFacebook: #315096;
$colorLINE: #00c300;

@mixin font($family, $weight) {
  @if $family == en {
    font-family: 'Blinker', sans-serif;
    @if $weight == 0 {
      font-weight: 200;
    } @else if $weight == 1 {
      font-weight: 300;
    }
  } @else if $family == jp {
    font-family: 'M PLUS 1p', sans-serif;
    @if $weight == 0 {
      font-weight: 300;
    } @else if $weight == 1 {
      font-weight: 500;
    }
  }
}

/* ブレイクポイント */
$tablet: 600px;
$pc: 1025px;
@mixin breakpoint($breakpoint: $pc) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

/* 縦より横が長い横長なスクリーンの場合 */
@mixin landscape {
  @media (orientation: landscape) {
    @content;
  }
}

/* ポインティングデバイスの場合 */
// 要素上にポインタを乗せることが可能なデバイス
@mixin hover {
  @media (hover: hover) {
    @content;
  }
}

@mixin flexCentering($justify: center, $align: center) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
}

/* ベース */
.body {
  display: grid;
  grid-gap: 100px;
  gap: 100px;
  overflow-x: hidden;
  background: $colorBase;
  @include font(jp, 0);
  color: $colorWhite;
}

@keyframes logoEnter {
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(-60%) scale(1);
  }
}

@keyframes horizontalLoop {
  to {
    transform: translateX(-100%);
  }
}

@keyframes verticalEnter {
  to {
    transform: translateY(0);
  }
}

@keyframes moonEnter {
  to {
    transform: translateY(0) scale(1);
  }
}

/* ヘッダ */
.header {
  overflow: hidden;
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  background: linear-gradient($colorBase, #424c66, #424c66);

  /* logo-container */
  &__logo-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 65%;
    opacity: 0;
    transform: translateX(-50%) translateY(-60%) scale(0.95);
    text-align: center;

    &._act {
      animation: logoEnter 2s 0.5s both;
    }
  }

  &__nh {
    width: 100%;
    max-width: 400px;
    height: 0%;
    max-height: 50vh;
  }

  &__logo {
    margin-top: 30px;
    @include font(en, 1);
    font-size: 40px;
  }

  /* moon-cotainer */
  &__moon-container {
    position: absolute;
    top: 50%;
    left: 70%;
    width: 10%;
    @include landscape {
      top: 25%;
      width: 3%;
    }
  }

  &__moon {
    width: 100%;
    height: 0%;
    transform: translateY(100%) scale(2);

    &._act {
      animation: moonEnter 2.5s both;
    }
  }

  /* cloud-container */
  &__cloud-container {
    display: flex;
    position: absolute;
    transform: translateY(-100%);

    &._act {
      animation: verticalEnter 2.5s 0.5s both;
    }
  }

  &__cloud {
    flex-shrink: 0;
    width: 300%;
    height: 0%;
    @include landscape {
      width: 125%;
    }

    &._act {
      animation: horizontalLoop 250s linear infinite;
    }
  }

  /* skyline-container */
  &__skyline-container {
    display: flex;
    position: absolute;
    transform: translateY(100%);

    &._layer-3 {
      bottom: -20vw;
      @include landscape {
        bottom: -10vw;
      }

      &._act {
        animation: verticalEnter 2s 0.5s both;
      }
    }

    &._layer-2 {
      bottom: -30vw;
      @include landscape {
        bottom: -12.5vw;
      }

      &._act {
        animation: verticalEnter 2s 0.25s both;
      }
    }

    &._layer-1 {
      bottom: -40vw;
      @include landscape {
        bottom: -15vw;
      }

      &._act {
        animation: verticalEnter 2s both;
      }
    }
  }

  &__skyline {
    flex-shrink: 0;
    width: 300%;
    height: 0%;
    @include landscape {
      width: 125%;
    }

    &._layer-3 {
      &._act {
        animation: horizontalLoop 150s -20s linear infinite;
      }
    }

    &._layer-2 {
      &._act {
        animation: horizontalLoop 80s linear infinite;
      }
    }

    &._layer-1 {
      &._act {
        animation: horizontalLoop 50s -3s linear infinite;
      }
    }
  }
}

/* メイン */
.main {
  display: grid;
  grid-gap: 100px;
  gap: 100px;
  margin: 0 20px;
  @include breakpoint($tablet) {
    margin: 0 100px;
  }
  @include breakpoint {
    margin: 0 200px;
  }

  &__section {
    display: grid;
    grid-gap: 20px;
    gap: 20px;
  }

  &__title {
    @include font(en, 0);
    font-size: 40px;
  }

  &__cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 50px;
    gap: 50px;
  }
}

/* カード */
.card {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 10px;
  gap: 10px;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 1s, opacity 1s;

  &._fade-in {
    transform: translateY(0);
    opacity: 1;
  }

  &__image-container {
    position: relative;
    overflow: hidden;
    border: 1px solid $colorMain;
    border-radius: 6px;
    background-color: $colorMain;
    transition: 0.3s;
    @include hover {
      &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: #00000080 0px 20px 30px -10px;
      }
    }
  }

  &__image {
    width: 100%;
  }

  &__image-inset-shadow {
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 20px 0 #00000080;
  }

  &__external-link-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 10px 0 0;
    filter: drop-shadow(0 0 3px #00000080);
  }
}

/* 共有 */
.share {
  @include flexCentering;

  &__container {
    position: relative;
    border: 2px solid $colorMain;
    border-radius: 6px;
  }

  &__share-icon {
    @include flexCentering;
    position: absolute;
    top: 50%;
    left: 0;
    padding: 5px 0;
    transform: translateX(-50%) translateY(-50%);
    background-color: $colorBase;
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
    @include hover {
      &:hover {
        &._twitter {
          color: $colorTwitter;
        }
        &._facebook {
          color: $colorFacebook;
        }
        &._line {
          color: $colorLINE;
        }
      }
    }
  }
}

/* フッタ */
.footer {
  @include flexCentering;
  height: 200px;
  color: $colorBlack;
  background-color: $colorMain;

  &__container {
    text-align: center;
  }
}
</style>
