import { controlList } from './control_list.js'

export const balloonTipDict = {
  controlPanel: {
    isActive: false,
    contents: [
      ...controlList.map((item) => ({
        title: item.name,
        titleIconClass: item.iconClass,
      })),
    ],
  },
  overlayMain: {
    isActive: false,
    contents: [
      {
        title: 'データページ',
        titleIconClass: 'fas fa-database',
      },
    ],
  },
}
