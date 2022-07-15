<template>
  <div>
    <layout-header />
    <layout-nav />
    <layout-nav-back />
    <main>
      <section>
        <control-panel />
        <periodic-table />
        <data-page />
      </section>
      <section>
        <layout-article />
      </section>
    </main>
    <layout-footer />
    <layout-bottom-fixed-area />
    <layout-toast />
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
    bodyAttrs: { class: 'body-preload' },
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
      const body = document.querySelector('body')
      body.classList.remove('body-preload')
    }
  },
}
</script>
