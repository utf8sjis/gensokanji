// 画面高さいっぱいの値を取得しvhをCSS変数にセットする
const setViewportHeight = function() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
setViewportHeight();

// リサイズ時にもvhを再取得（ただし画面幅が変わったときのみ）
let vw = window.innerWidth;
window.addEventListener('resize', () => {
  if (vw !== window.innerWidth) {
    vw = window.innerWidth;
    setViewportHeight();
  }
});


// 読み込み後明示的にアニメーションを開始する
window.onload = function() {
  setTimeout(() => {
    const actElements = document.querySelectorAll(
      '.header__logo-container,' +
      '.header__moon,' +
      '.header__cloud-container,' +
      '.header__cloud,' +
      '.header__skyline-container,' +
      '.header__skyline');
    actElements.forEach((el) => {
      el.classList.add('_act');
    });
  }, 100);
};
