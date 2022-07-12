import { langList } from '@/assets/js/lang_list.js'

const defaultLangIndex = 3

export const state = () => ({
  langList,
  langStatusList: [...Array(langList.length)].map((_, index) => ({
    isActive: index === defaultLangIndex,
  })),
  currentLang: langList[defaultLangIndex],
})

export const getters = {
  // => 各言語のデータのリストを返す
  langList: (state) => {
    return state.langList
  },
  // => 現在の各言語の処理状態のリストを返す
  langStatusList: (state) => {
    return state.langStatusList
  },
  // => 現在表示中の言語のデータを返す
  currentLang: (state) => {
    return state.currentLang
  },
}

export const mutations = {
  // 言語のインデクス => 表示する言語の変更
  switchLang(state, index) {
    state.langStatusList.forEach((item) => (item.isActive = false))
    state.currentLang = state.langList[index]
    state.langStatusList[index].isActive = true
  },
}

export const actions = {
  // 言語のインデクス => 表示する言語の変更
  switchLang({ commit }, index) {
    commit('switchLang', index)
  },
}
