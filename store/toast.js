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
  addToast(state, { message, timeoutID }) {
    state.toastList.unshift({ message, timeoutID })
  },
  // => 末尾のトースト通知の削除
  popToast(state) {
    state.toastList.pop()
  },
  // トースト表示のタイムアウトID => トースト通知の削除
  removeToast(state, timeoutID) {
    state.toastList.splice(
      state.toastList.findIndex((item) => item.timeoutID === timeoutID),
      1
    )
  },
}

export const actions = {
  // 通知メッセージ => 新たなトースト通知を表示する
  showToast({ state, commit }, message) {
    const maxLength = 8
    if (state.toastList.length >= maxLength) {
      clearTimeout(state.toastList.at(-1).timeoutID)
      commit('popToast')
    }

    const delay = 3000
    const timeoutID = setTimeout(() => commit('popToast'), delay)
    commit('addToast', { message, timeoutID })
  },
  // 特定のトースト通知を閉じる
  clearToast({ commit }, timeoutID) {
    clearTimeout(timeoutID)
    commit('removeToast', timeoutID)
  },
}
