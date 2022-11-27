<template>
  <div class="page">
    <gensokanji-header
      :heading="post.title"
      :published-date="$dateFns.format(post.publishedDate, 'yyyy-MM-dd')"
      :updated-date="$dateFns.format(post.updatedDate, 'yyyy-MM-dd')"
    />
    <article class="article">
      <nuxt-content :document="post" />
    </article>
    <gensokanji-footer />
  </div>
</template>

<script>
export default {
  validate({ params }) {
    if (params.slug) {
      return true
    } else {
      return false
    }
  },

  async asyncData({ $content, params, error }) {
    try {
      const post = await $content('post', params.slug).fetch()

      return {
        post,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'This page could not be found' })
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
  display: grid;
  gap: 50px;
  line-height: 1.5;
  @include g.font(ja2);
  font-size: 16px;
  color: gk.$colorWhite;
  background: gk.$colorBase;

  ::selection {
    background: gk.$colorAccent;
    color: gk.$colorBase;
  }

  > *:not(header, footer) {
    padding: 0 15px;
    @include g.breakpoint(g.$tablet) {
      padding: 0 10%;
    }
    @include g.breakpoint() {
      padding: 0 15%;
    }
  }
}

:deep(.nuxt-content) {
  display: grid;
  gap: 15px;

  h2 {
    padding: 35px 0 10px;
    @include g.font(ja2, bold);
    font-size: 24px;
    border-bottom: 1px solid gk.$colorWhite;
    @include g.breakpoint() {
      font-size: 28px;
    }
  }

  h3 {
    padding-top: 15px;
    font-size: 18px;
    @include g.font(ja2, bold);
    @include g.breakpoint() {
      font-size: 20px;
    }
  }

  h4,
  h5,
  h6 {
    @include g.font(ja2, bold);
  }

  a {
    cursor: pointer;
    color: gk.$colorAccent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(120%);
    }
  }

  table {
    width: 100%;
  }

  tbody tr:nth-child(odd) {
    background: rgba(g.$colorGensokanjiNavy, 0.5);
  }

  th,
  td {
    padding: 2px 5px;
  }
}
</style>
