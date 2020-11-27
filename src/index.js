// 入口文件
import {printMe} from './js/print';
import './css/index.css'
function component () {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  console.log('热更新')
}