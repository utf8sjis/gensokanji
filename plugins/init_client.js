let itemStorage = JSON.parse(localStorage.getItem('itemStorage'))
itemStorage = {
  themeId: itemStorage?.themeId ?? 'default',
  periodicTableScale: itemStorage?.periodicTableScale ?? 1,
}
localStorage.setItem('itemStorage', JSON.stringify(itemStorage))
