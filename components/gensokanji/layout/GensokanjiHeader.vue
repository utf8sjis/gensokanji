<template>
  <header class="header">
    <div class="header__moon-container">
      <img
        class="header__moon"
        :class="{ '_is-active': startAnimation }"
        src="@/assets/img/gensokanji/moon.svg"
      />
    </div>
    <div
      class="header__cloud-container"
      :class="{ '_is-active': startAnimation }"
    >
      <img
        class="header__cloud"
        :class="{ '_is-active': startAnimation }"
        src="@/assets/img/gensokanji/cloud.svg"
      />
      <img
        class="header__cloud"
        :class="{ '_is-active': startAnimation }"
        src="@/assets/img/gensokanji/cloud.svg"
      />
    </div>
    <div
      class="header__skyline-container _layer-3"
      :class="{ '_is-active': startAnimation }"
    >
      <img
        class="header__skyline _layer-3"
        :class="{ '_is-active': startAnimation }"
        src="@/assets/img/gensokanji/skyline3.svg"
      />
      <img
        class="header__skyline _layer-3"
        :class="{ '_is-active': startAnimation }"
        src="@/assets/img/gensokanji/skyline3.svg"
      />
    </div>
    <div
      class="header__skyline-container _layer-2"
      :class="{ '_is-active': startAnimation }"
    >
      <img
        class="header__skyline _layer-2"
        :class="{ '_is-active': startAnimation }"
        src="@/assets/img/gensokanji/skyline2.svg"
      />
      <img
        class="header__skyline _layer-2"
        :class="{ '_is-active': startAnimation }"
        src="@/assets/img/gensokanji/skyline2.svg"
      />
    </div>
    <div
      class="header__logo-container"
      :class="{ '_is-active': startAnimation }"
    >
      <img class="header__nh" src="@/assets/img/gensokanji/nh.svg" />
      <h1 class="header__logo">gensokanji</h1>
      <!-- eslint-disable-next-line no-irregular-whitespace -->
      <p class="header__subtitle">幻　想　閑　事</p>
    </div>
    <div
      class="header__skyline-container _layer-1"
      :class="{ '_is-active': startAnimation }"
    >
      <img
        class="header__skyline _layer-1"
        :class="{ '_is-active': startAnimation }"
        src="@/assets/img/gensokanji/skyline1.svg"
      />
      <img
        class="header__skyline _layer-1"
        :class="{ '_is-active': startAnimation }"
        src="@/assets/img/gensokanji/skyline1.svg"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      startAnimation: false,
    }
  },

  mounted() {
    // 読み込み後明示的にアニメーションを開始する
    this.startAnimation = true
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/gensokanji' as gk;

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

.header {
  overflow: hidden;
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  background: linear-gradient(
    g.$colorGensokanjiMidnight,
    g.$colorGensokanjiNavy,
    g.$colorGensokanjiNavy
  );

  /* logo-container */
  &__logo-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 65%;
    opacity: 0;
    transform: translateX(-50%) translateY(-60%) scale(0.95);
    text-align: center;

    &._is-active {
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
    @include g.font(en);
    font-size: 40px;
  }

  /* moon-cotainer */
  &__moon-container {
    position: absolute;
    top: 50%;
    left: 70%;
    width: 10%;
    @include g.landscape {
      top: 25%;
      width: 3%;
    }
  }

  &__moon {
    width: 100%;
    height: 0%;
    transform: translateY(100%) scale(2);

    &._is-active {
      animation: moonEnter 2.5s both;
    }
  }

  /* cloud-container */
  &__cloud-container {
    display: flex;
    position: absolute;
    transform: translateY(-100%);

    &._is-active {
      animation: verticalEnter 2.5s 0.5s both;
    }
  }

  &__cloud {
    flex-shrink: 0;
    width: 300%;
    height: 0%;
    @include g.landscape {
      width: 125%;
    }

    &._is-active {
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
      @include g.landscape {
        bottom: -10vw;
      }

      &._is-active {
        animation: verticalEnter 2s 0.5s both;
      }
    }

    &._layer-2 {
      bottom: -30vw;
      @include g.landscape {
        bottom: -12.5vw;
      }

      &._is-active {
        animation: verticalEnter 2s 0.25s both;
      }
    }

    &._layer-1 {
      bottom: -40vw;
      @include g.landscape {
        bottom: -15vw;
      }

      &._is-active {
        animation: verticalEnter 2s both;
      }
    }
  }

  &__skyline {
    flex-shrink: 0;
    width: 300%;
    height: 0%;
    @include g.landscape {
      width: 125%;
    }

    &._layer-3 {
      &._is-active {
        animation: horizontalLoop 150s -20s linear infinite;
      }
    }

    &._layer-2 {
      &._is-active {
        animation: horizontalLoop 80s linear infinite;
      }
    }

    &._layer-1 {
      &._is-active {
        animation: horizontalLoop 50s -3s linear infinite;
      }
    }
  }
}
</style>
