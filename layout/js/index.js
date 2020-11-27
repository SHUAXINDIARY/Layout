const domList = {
  body: document.querySelector('body'),
  HTMLList: document.querySelectorAll('.viewHTML'),
  CSSList: document.querySelectorAll('.viewCSS'),
  HTMLCodeList: document.querySelectorAll('.code-html'),
  CSSCodeList: document.querySelectorAll('.code-css')
}
const findTargetDom = (domList, targetDom) => {
  let index = 0
  while (index < domList.length) {
    if ([...domList][index] === targetDom) {
      break
    }
    index++
  }
  return index
}

domList.body.addEventListener('click', (e) => {
  const dom = e.target
  const targetType = dom.dataset.type
  // 根据type判断是都点击的是目标按钮
  if (targetType) {
    // 获取当前点击的dom索引
    const targetIndex = findTargetDom(domList[`${targetType}List`], dom)
    let HTMLStatus = 'none', CSSStatus = 'block'
    if (targetType === 'HTML') CSSStatus = 'none', HTMLStatus = 'block'
    if (targetType === 'CSS') CSSStatus = 'block', HTMLStatus = 'none'
    // 设置当前操作的dom
    domList.HTMLCodeList[targetIndex].style.display = HTMLStatus
    domList.CSSCodeList[targetIndex].style.display = CSSStatus
  }
})