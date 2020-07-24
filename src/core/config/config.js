export default function (){
  let vsBar = this

  let defaultConfig = {
    name:'vsBar',
    cvsPadding: 0, // canvas内边距
    cvslineWidth: 10, // 线条宽度
    millisecond: 2000, // 动画持续时间(毫秒)
    cvsBarPercent: 1, // 结束位置(0~1)
    cvsDom: null,
    frameBarPercent: 0,
    color: '#000',
    barBeforeEnd: 0, // 上一次结束位置
    barNow: 0, // 当前位置
    autoPlay: false
  }

  Object.assign(defaultConfig, vsBar.config)

  vsBar.config = defaultConfig

  let barBox
  if (vsBar.config.name instanceof Element) {
    barBox = vsBar.config.name
  }else if(document.getElementsByClassName(vsBar.config.name)[0]){
    barBox = document.getElementsByClassName(vsBar.config.name)[0]
  }else{
    return
  }

  let canvas = document.createElement('canvas')
  barBox.appendChild(canvas)
  vsBar.config.cvsDom = canvas

  vsBar.config.cvsDom.width = barBox.clientWidth
  vsBar.config.cvsDom.height = barBox.clientHeight

  return true
}