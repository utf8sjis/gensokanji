import { elementList } from '@/assets/js/element_list.js'

export const state = () => ({
  elementList,
  elementStatusList: [...Array(elementList.length)].map(() => ({
    isDataPageActive: false,
  })),
  currentDataPage: elementList[1],
  focusedAtomicNumber: null,
})

export const getters = {
  // => 各元素のデータのリストを返す
  elementList: (state) => {
    return state.elementList
  },
  // => 現在の各元素の処理状態のリストを返す
  elementStatusList: (state) => {
    return state.elementStatusList
  },
  // => 現在表示中および直近で表示されたデータページの元素のデータを返す
  currentDataPage: (state) => {
    return state.currentDataPage
  },
  // => いずれかのデータページが表示中か否かを返す
  isDataPageActive: (state) => {
    return state.elementStatusList.some((item) => item.isDataPageActive)
  },
  // => 現在フォーカスされている元素の原子番号を返す
  focusedAtomicNumber: (state) => {
    return state.focusedAtomicNumber
  },
}

export const mutations = {
  // 元素のインデクス => 表示するデータページの更新
  activateDataPage(state, index) {
    // 最初にすべての元素を非アクティブにする
    state.elementStatusList.forEach((item) => (item.isDataPageActive = false))
    // 新しい元素をアクティブにする
    state.currentDataPage = state.elementList[index]
    state.elementStatusList[index].isDataPageActive = true
  },
  // => 全てのデータページを非表示に更新
  deactivateDataPage(state) {
    state.elementStatusList.forEach((item) => (item.isDataPageActive = false))
  },
  // => フォーカスされている元素の原子番号を更新
  updateFocusedAtomicNumber(state, atomicNumber) {
    state.focusedAtomicNumber = atomicNumber
  },
}

export const actions = {
  // 原子番号 => データページを表示し、Twitterのwidgets.jsを実行する
  openDataPage({ state, commit }, atomicNumber) {
    commit(
      'activateDataPage',
      state.elementList.findIndex((item) => item.atomicNumber === atomicNumber)
    )
    window.twttr.widgets.load(document.body)
  },
  // => バルーンチップも閉じ、データページを閉じる
  closeDataPage({ commit }) {
    commit('balloon_tip/deactivateBalloonTip', 'dataPage', { root: true })
    commit('deactivateDataPage')
  },
}
