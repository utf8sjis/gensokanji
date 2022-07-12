export const state = () => ({
  isBodyScrollLocked: false,
  isNavOpened: false,
  periodicTableScale: 1,
})

export const getters = {
  // => bodyScrollLockが有効か否か
  isBodyScrollLocked: (state) => {
    return state.isBodyScrollLocked
  },
  // => ナビゲーションが開いているか否か
  isNavOpened: (state) => {
    return state.isNavOpened
  },
  // => 周期表の大きさの倍率
  periodicTableScale: (state) => {
    return state.periodicTableScale
  },
}

export const mutations = {
  // bodyScrollLockが有効か否かの更新
  updateIsBodyScrollLocked(state, isLocked) {
    state.isBodyScrollLocked = isLocked
  },
  // ナビゲーションを開閉する
  toggleNav(state) {
    state.isNavOpened = !state.isNavOpened
  },
  // ナビゲーションを閉じる
  closeNav(state) {
    state.isNavOpened = false
  },
  // 周期表の大きさの倍率の更新
  updatePeriodicTableScale(state, scale) {
    state.periodicTableScale = scale
  },
}
