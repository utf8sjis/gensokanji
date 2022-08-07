<template>
  <div class="page">
    <div class="content-wrapper">
      <div class="content">
        <h1>{{ content.headline }}</h1>
        <p>{{ content.message }}</p>
        <p>
          <a href="/" class="u-link u-link--gk">トップへ戻る</a>
        </p>
      </div>
    </div>
    <gensokanji-footer />
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
        },
        401: {
          headline: '401 Unauthorized',
        },
        403: {
          headline: '403 Forbidden',
        },
        404: {
          headline: '404 Not Found',
          message: 'お探しのページは見つかりませんでした',
        },
        408: {
          headline: '408 Request Timeout',
        },
        500: {
          headline: '500 Internal Server Error',
        },
        502: {
          headline: '502 Bad Gateway',
        },
        503: {
          headline: '503 Service Unavailable',
        },
        504: {
          headline: '504 Gateway Timeout',
        },
      },
    }
  },

  head() {
    return {
      title: this.content.headline,
    }
  },

  computed: {
    content() {
      return {
        headline:
          this.contentDict[this.error.statusCode]?.headline ??
          this.error.statusCode + ' Error',
        message:
          this.contentDict[this.error.statusCode]?.message ??
          'エラーが発生しました',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/gensokanji' as gk;

.page {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  @include g.font(ja);
  font-size: 16px;
  line-height: 1.2;
  color: gk.$colorWhite;
  background: gk.$colorBase;
  @include g.breakpointMax() {
    font-size: 15px;
  }
}

.content-wrapper {
  @include g.flexCentering;
}

.content {
  display: grid;
  gap: 10px;
  text-align: center;
  transform: translateY(-15px);

  h1 {
    @include g.font(en2);
    font-size: 48px;
    @include g.breakpointMax {
      font-size: 36px;
    }
  }
}
</style>
