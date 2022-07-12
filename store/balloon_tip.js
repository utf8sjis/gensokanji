import { balloonTipDict } from '@/assets/js/balloon_tip_dict.js'

export const state = () => ({
  balloonTipDict,
  balloonTipStatusDict: Object.keys(balloonTipDict).reduce((obj, key) => {
    obj[key] = { isActive: false }
    return obj
  }, {}),
})

export const getters = {
  // => 各バルーンチップのデータのリストを返す
  balloonTipDict: (state) => {
    return state.balloonTipDict
  },
  // => 現在の各バルーンチップの処理状態のリストを返す
  balloonTipStatusDict: (state) => {
    return state.balloonTipStatusDict
  },
}

export const mutations = {
  // バルーンチップのID => バルーンチップをアクティブ化
  activateBalloonTip(state, id) {
    state.balloonTipStatusDict[id].isActive = true
  },
  // バルーンチップのID => バルーンチップを非アクティブ化
  deactivateBalloonTip(state, id) {
    state.balloonTipStatusDict[id].isActive = false
  },
}

export const actions = {
  // バルーンチップのID => バルーンチップを表示非表示
  toggleBalloonTip({ state, commit }, id) {
    if (state.balloonTipStatusDict[id].isActive) {
      commit('deactivateBalloonTip', id)
    } else {
      commit('activateBalloonTip', id)
    }
  },
  // バルーンチップのID => バルーンチップを閉じる
  closeBalloonTip({ commit }, id) {
    commit('deactivateBalloonTip', id)
  },
}
