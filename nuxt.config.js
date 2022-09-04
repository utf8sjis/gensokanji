import * as fontawesome from './build/fontawesome'

const baseURL = 'https://gensokanji.pages.dev'

const siteName = 'gensokanji'

const siteDescription =
  'gensokanjiは、思い描いた幻想をデジタルに昇華し閑事を嗜む、そんなWebサイトです。'

const gtagScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-GBVV8SS85F');
`

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate(title) {
      return (title ? `${title} - ` : '') + 'gensokanji'
    },
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteDescription,
      },
      { name: 'format-detection', content: 'telephone=no' },
      // OGP
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseURL,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteName,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDescription,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: baseURL + '/img/brand.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // google fonts
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Blinker:wght@200;300&family=Ubuntu&family=M+PLUS+1p:wght@300;500&display=swap',
      },
      // material icons
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      // fontawesome
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.11.0/css/all.css',
      },
    ],
    script: [
      // <!-- Global site tag (gtag.js) - Google Analytics -->
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-GBVV8SS85F',
      },
      {
        hid: 'gtagScript',
        innerHTML: gtagScript,
      },
      // <!-- Cloudflare Web Analytics -->
      {
        defer: true,
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': '{"token": "ce8d66bcb58b4cef8b657d685532f4ac"}',
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      gtagScript: ['innerHTML'],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['destyle.css', '~/assets/scss/global/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/init_client.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/date-fns-module
    '@nuxtjs/date-fns',
    // Font Awesome
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        suffix: true,
        icons: {
          solid: fontawesome.solid,
          regular: fontawesome.regular,
          brands: fontawesome.brands,
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://content.nuxtjs.org
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //
  generate: {
    fallback: true,
  },
}
