export const navLinkSectionList = [
  {
    title: 'サイト内リンク',
    links: [
      {
        href: 'https://gensokanji.netlify.app',
        isTargetBlank: false,
        src: require('@/assets/img/brand.png'),
        alt: 'gensokanjiのロゴの画像',
        title: 'gensokanji',
        desc: 'gensokanjiのトップページです。今まで作ったものやリンクなどを載せていきます。',
      },
    ],
  },
  {
    title: '外部リンク',
    links: [
      {
        href: 'https://twitter.com/gensokanji_bot',
        isTargetBlank: true,
        src: require('@/assets/img/gensokanji_bot.png'),
        alt: 'Twitterアカウントのプロフィールの画像',
        title: '元素の漢字botさん (@gensokanji_bot) / Twitter',
        desc: '中の人運営の元素の漢字をつぶやくTwitterのbotです。',
      },
      {
        href: 'https://quiz-maker.site/quiz/play/dBxL2220181106152109',
        isTargetBlank: true,
        src: require('@/assets/img/gensokanji_quiz.png'),
        alt: '元素の漢字クイズのヘッダー画像',
        title:
          '元素の漢字クイズ | クイズメーカー - こたえてあそぶ・つくってあそぶ・クイズのプラットフォームサービス',
        desc: '元素の漢字に関するクイズで特訓の成果を試せます。',
      },
    ],
  },
]
