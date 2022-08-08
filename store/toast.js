export const state = () => ({
  toastList: [],
})

export const getters = {
  // => トースト通知のリストを返す
  toastList: (state) => {
    return state.toastList
  },
}

export const mutations = {
  // 通知メッセージとトースト表示のタイムアウトID => トースト通知を追加
  addToast(state, { message, timeoutId }) {
    state.toastList.unshift({ message, timeoutId })
  },
  // トースト表示のタイムアウトID => トースト通知の削除
  removeToast(state, timeoutId) {
    state.toastList.splice(
      state.toastList.findIndex((item) => item.timeoutId === timeoutId),
      1
    )
  },
}

export const actions = {
  // 通知メッセージ => 新たなトースト通知を表示する
  showToast({ state, commit }, message) {
    const maxLength = 8
    if (state.toastList.length >= maxLength) {
      const lastTimeoutId = state.toastList.at(-1).timeoutId
      clearTimeout(lastTimeoutId)
      commit('removeToast', lastTimeoutId)
    }

    const delay = 3000
    let timeoutId = 0 // setTimeout returns 正の整数値
    timeoutId = setTimeout(() => commit('removeToast', timeoutId), delay)
    commit('addToast', { message, timeoutId })
  },
  // 特定のトースト通知を閉じる
  clearToast({ commit }, timeoutId) {
    clearTimeout(timeoutId)
    commit('removeToast', timeoutId)
  },
}
