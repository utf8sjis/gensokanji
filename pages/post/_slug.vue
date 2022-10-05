<template>
  <div class="page">
    <article class="article">
      <div class="article__heading-wrap">
        <h1 class="article__heading">{{ post.title }}</h1>
        <div class="article__date">
          <div class="article__date-item">
            <div class="article__published-at-icon">
              <fa-icon :icon="['far', 'calendar-check']" />
            </div>
            <div class="article__published-at">
              {{ $dateFns.format(post.publishedDate, 'yyyy-MM-dd') }}
            </div>
          </div>
          <div class="article__date-item">
            <div class="article__revised-at-icon">
              <fa-icon :icon="['fas', 'arrow-rotate-right']" />
            </div>
            <div class="article__revised-at">
              {{ $dateFns.format(post.updatedAt, 'yyyy-MM-dd') }}
            </div>
          </div>
        </div>
      </div>
      <nuxt-content :document="post" />
    </article>
    <gensokanji-footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('post', params.slug).fetch()

    return {
      post,
    }
  },

  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        // OGP
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://gensokanji.pages.dev' + this.post.path,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.post.title} - gensokanji`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/module' as g;
@use '@/assets/scss/module/gensokanji' as gk;

.page {
  line-height: 1.5;
  font-family: 'Source Han Sans JP';
  font-weight: lighter;
  font-size: 16px;
  color: gk.$colorWhite;
  background: gk.$colorBase;
}

.article {
  padding: 40px 15px;
  @include g.breakpoint(g.$tablet) {
    padding: 40px 10%;
  }
  @include g.breakpoint() {
    padding: 70px 15%;
  }
  ::selection {
    background: gk.$colorAccent;
    color: gk.$colorBase;
  }

  &__heading-wrap {
    padding-bottom: 8px;
    border-bottom: 3px solid gk.$colorAccent;
  }

  &__heading {
    font-weight: bold;
    font-size: 28px;
    @include g.breakpoint() {
      font-size: 32px;
    }
  }

  &__date {
    display: grid;
    grid-template-rows: 25px;
    grid-template-columns: auto 1fr;
    gap: 0 10px;
    font-size: 16px;
    color: rgba(gk.$colorWhite, 0.5);
  }

  &__date-item {
    @include g.flexCentering(flex-start, center)
  }

  &__published-at-icon,
  &__revised-at-icon {
    padding-right: 5px;
  }
}

:deep(.nuxt-content) {
  h2 {
    margin-top: 50px;
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 24px;
    border-bottom: 1px solid gk.$colorWhite;
    @include g.breakpoint() {
      font-size: 28px;
    }
  }

  h3 {
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
    @include g.breakpoint() {
      font-size: 20px;
    }
  }

  h4,
  h5,
  h6 {
    margin-top: 15px;
    font-weight: bold;
  }

  > *:not(h2, h3, h4, h5, h6) {
    margin: 15px 0;
  }

  a {
    cursor: pointer;
    color: gk.$colorAccent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(120%);
    }
  }

  th,
  td {
    padding: 2px 5px;
  }
}
</style>
