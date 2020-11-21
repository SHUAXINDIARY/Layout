const body = document.querySelector('body')
var HTMLList = document.querySelectorAll('.viewHTML')
var CSSList = document.querySelectorAll('.viewCSS')
var HTMLCodeList = document.querySelectorAll('.code-html')
var CSSCodeList = document.querySelectorAll('.code-css')

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

body.addEventListener('click', (e) => {
  const dom = e.target
  const targetType = dom.dataset.type
  // 根据type判断是都点击的是目标按钮
  if (targetType) {
    // 获取当前点击的dom索引
    const targetIndex = findTargetDom(window[`${targetType}List`], dom)
    let HTMLStatus = 'none', CSSStatus = 'block'
    if (targetType === 'HTML') CSSStatus = 'none', HTMLStatus = 'block'
    if (targetType === 'CSS') CSSStatus = 'block', HTMLStatus = 'none'
    // 设置当前操作的dom
    HTMLCodeList[targetIndex].style.display = HTMLStatus
    CSSCodeList[targetIndex].style.display = CSSStatus
  }
})