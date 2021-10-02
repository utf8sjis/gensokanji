window.onload = function() {
  // 明示的にアニメーションを開始する
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
