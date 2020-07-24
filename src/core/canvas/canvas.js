let init = [
  function (){
    const vsbar = this
    const { config, canvas } = vsbar

    canvas.canvas = ()=>{
      let r = (config.cvsDom.clientWidth - config.cvslineWidth - config.cvsPadding*2)/2
      vsbar.ctx = config.cvsDom.getContext('2d')
      vsbar.ctx.clearRect(0, 0, config.cvsDom.clientWidth, config.cvsDom.clientHeight);// 清除画布已有内容
      vsbar.ctx.lineWidth = config.cvslineWidth
      vsbar.ctx.beginPath()
      vsbar.ctx.lineCap = 'round'
      vsbar.ctx.strokeStyle = config.color
      vsbar.ctx.arc(config.cvsDom.clientWidth / 2, config.cvsDom.clientHeight / 2, r, -90 * Math.PI / 180, (360 * vsbar.barNow - 90) * Math.PI / 180);// 绘制一个弧线
      vsbar.ctx.stroke()
    }
  }
]

export default function (){
  init.forEach(v=>{v.call(this)})
}