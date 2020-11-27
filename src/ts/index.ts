interface Dom {
  body: HTMLBodyElement
  HTMLList: NodeListOf<HTMLElement>
  CSSList: NodeListOf<HTMLElement>
  HTMLCodeList: NodeListOf<HTMLElement>
  CSSCodeList: NodeListOf<HTMLElement>
}

const domList: Dom = {
  body: document.querySelector('body'),
  HTMLList: document.querySelectorAll('.viewHTML'),
  CSSList: document.querySelectorAll('.viewCSS'),
  HTMLCodeList: document.querySelectorAll('.code-html'),
  CSSCodeList: document.querySelectorAll('.code-css'),
}
const findTargetDom = (domList: NodeListOf<HTMLElement>, targetDom: HTMLElement): number => {
  let index: number = 0
  const arr = Array.from(domList)
  while (index < domList.length) {
    if (arr[index] === targetDom) {
      break
    }
    index++
  }
  return index
}
export default {
  init() {
    domList.body.addEventListener('click', (e: MouseEvent) => {
      const dom: EventTarget = e.target
      const targetType: string = (<HTMLElement>dom).dataset.type!
      // // 根据type判断是都点击的是目标按钮
      if (targetType) {
        const key: string = `${targetType}List`
        // 获取当前点击的dom索引
        const targetIndex = findTargetDom(domList[key], dom as HTMLElement)
        let HTMLStatus = 'none', CSSStatus = 'block'
        if (targetType === 'HTML') CSSStatus = 'none', HTMLStatus = 'block'
        if (targetType === 'CSS') CSSStatus = 'block', HTMLStatus = 'none'
        // 设置当前操作的dom
        domList.HTMLCodeList[targetIndex].style.display = HTMLStatus
        domList.CSSCodeList[targetIndex].style.display = CSSStatus
      }
    })
  }
}