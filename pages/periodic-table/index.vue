<template>
  <div ref="page" class="page page--preload">
    <periodic-table-header />
    <periodic-table-nav />
    <periodic-table-nav-back />
    <main>
      <section>
        <control-panel />
        <periodic-table />
        <data-page />
      </section>
      <section>
        <periodic-table-article />
      </section>
    </main>
    <periodic-table-footer />
    <periodic-table-bottom-fixed />
    <periodic-table-toast />
  </div>
</template>

<script>
const title = '元素の漢字周期表'

const baseURL = 'https://gensokanji.netlify.app'

const twitterSnippet = `
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
`

export default {
  name: 'PeriodicTablePage',

  head: {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '元素の漢字周期表は、中国語での元素名を並べた漢字の元素周期表です。中国語圏では、化学元素の命名は漢字1字でなされ、部首で気体か金属かなどの性質を表します。そんな漢字だけでできた周期表を当サイトでお楽しみください。',
      },
      // OGP
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: (title ? `${title} - ` : '') + process.env.npm_package_name,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseURL + '/periodic-table',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: (title ? `${title} - ` : '') + process.env.npm_package_name,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '元素の漢字周期表は、中国語での元素名を並べた漢字の元素周期表です。そんな漢字だけでできた周期表を当サイトでお楽しみください。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: baseURL + '/img/periodic_table.png',
      },
    ],
    link: [
      // micron.js
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://unpkg.com/webkul-micron@1.1.6/dist/css/micron.min.css',
      },
    ],
    script: [
      // micron.js
      {
        type: 'text/javascript',
        src: 'https://unpkg.com/webkul-micron@1.1.6/dist/script/micron.min.js',
      },
      // Twitter wedgets.js
      // https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
      {
        hid: 'twitterSnippet',
        innerHTML: twitterSnippet,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      twitterSnippet: ['innerHTML'],
    },
  },

  mounted() {
    window.onload = () => {
      this.$refs.page.classList.remove('page--preload')
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

.page {
  @include g.font(ja);
  font-size: 16px;
  line-height: 1.2;
  color: g.$colorBlack;
  background: g.$colorBase;
  @include g.breakpointMax() {
    font-size: 15px;
  }

  &--preload * {
    transition: none !important;
  }
}

::selection {
  background: g.$colorMain3;
  color: g.$colorWhite;
}
</style>
