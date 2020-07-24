let init = [
  function (){
    const vsbar = this
    const { action, config } = vsbar

    action.stop = ()=>{
      vsbar.stepID && cancelAnimationFrame(vsbar.stepID)
      vsbar.ctx && vsbar.ctx.clearRect(0, 0, config.cvsDom.clientWidth, config.cvsDom.clientHeight);// 清除画布已有内容
    }
  }
]

export default function (){
  init.forEach(v=>{v.call(this)})
}