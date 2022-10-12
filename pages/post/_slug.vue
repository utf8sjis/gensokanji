<template>
  <div class="page">
    <gensokanji-header
      :heading="post.title"
      :published-date="$dateFns.format(post.publishedDate, 'yyyy-MM-dd')"
      :updated-date="$dateFns.format(post.updatedAt, 'yyyy-MM-dd')"
    />
    <article class="article">
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
  @include g.font(ja2);
  font-size: 16px;
  color: gk.$colorWhite;
  background: gk.$colorBase;
}

.article {
  padding: 20px 15px;
  @include g.breakpoint(g.$tablet) {
    padding: 20px 10%;
  }
  @include g.breakpoint() {
    padding: 40px 15%;
  }
  ::selection {
    background: gk.$colorAccent;
    color: gk.$colorBase;
  }
}

:deep(.nuxt-content) {
  h2 {
    margin-top: 50px;
    padding-bottom: 10px;
    @include g.font(ja2, bold);
    font-size: 24px;
    border-bottom: 1px solid gk.$colorWhite;
    @include g.breakpoint() {
      font-size: 28px;
    }
  }

  h3 {
    margin-top: 30px;
    font-size: 18px;
    @include g.font(ja2, bold);
    @include g.breakpoint() {
      font-size: 20px;
    }
  }

  h4,
  h5,
  h6 {
    margin-top: 15px;
    @include g.font(ja2, bold);
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
