<template>
  <div class="container">
    <layout-header />
    <layout-nav />
    <layout-nav-back />

    <section class="content-wrapper">
      <div class="content">
        <h1>{{ content.headline }}</h1>
        <p>{{ content.message }}</p>
        <p>
          <a href="/periodic-table" class="u-link">元素の漢字周期表へ戻る</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',

  props: {
    error: { type: Object, default: null },
  },

  data() {
    return {
      contentDict: {
        400: {
          headline: '400 Bad Request',
          message: 'エラーが発生しました',
        },
        401: {
          headline: '401 Unauthorized',
          message: 'エラーが発生しました',
        },
        403: {
          headline: '403 Forbidden',
          message: 'エラーが発生しました',
        },
        404: {
          headline: '404 Not Found',
          message: 'お探しのページは見つかりませんでした',
        },
        408: {
          headline: '408 Request Timeout',
          message: 'エラーが発生しました',
        },
        500: {
          headline: '500 Internal Server Error',
          message: 'エラーが発生しました',
        },
        502: {
          headline: '502 Bad Gateway',
          message: 'エラーが発生しました',
        },
        503: {
          headline: '503 Service Unavailable',
          message: 'エラーが発生しました',
        },
        504: {
          headline: '504 Gateway Timeout',
          message: 'エラーが発生しました',
        },
      },
    }
  },

  computed: {
    content() {
      if (this.error.statusCode in this.contentDict) {
        const content = this.contentDict[this.error.statusCode]
        return {
          headline: content.headline,
          message: content.message,
        }
      } else {
        return {
          headline: this.error.statusCode + ' Error',
          message: 'エラーが発生しました',
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

.container {
  height: 100vh;
}

.content-wrapper {
  @include g.flexCentering;
  height: calc(100vh - g.$headerHeight);
  @include g.mediaQuery {
    height: calc(100vh - g.$headerHeightPhone);
  }
}

.content {
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
  text-align: center;
  transform: translateY(-15px);

  h1 {
    @include g.font(en2);
    font-size: 48px;
    @include g.mediaQuery {
      font-size: 36px;
    }
  }
}
</style>
