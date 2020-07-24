let init = [
  function (){
    const vsbar = this
    const { stepID, action } = vsbar

    action.reset = (config)=>{
      stepID && cancelAnimationFrame(stepID)
      vsbar.config.barBeforeEnd = vsbar.config.cvsBarPercent
      Object.assign(vsbar.config, config)
      action.start()
    }
  }
]

export default function (){
  init.forEach(v=>{v.call(this)})
}