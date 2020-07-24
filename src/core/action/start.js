let init = [
  function (){
    const vsbar = this
    const { action, canvas } = vsbar

    action.start = ()=>{
      let start = null
      let step = now => {
        if (!start) {
          start = now
        }

        now = now - start
        vsbar.barNow = now/vsbar.config.millisecond * (vsbar.config.cvsBarPercent - vsbar.config.barBeforeEnd) + vsbar.config.barBeforeEnd
  
        if (vsbar.config.cvsBarPercent > vsbar.config.barBeforeEnd && vsbar.barNow > vsbar.config.cvsBarPercent) {
          vsbar.barNow = vsbar.config.cvsBarPercent
        } else if(vsbar.config.cvsBarPercent < vsbar.config.barBeforeEnd && vsbar.barNow < vsbar.config.cvsBarPercent) {
          vsbar.barNow = vsbar.config.cvsBarPercent
        }
  
        canvas.canvas()
        if(now/vsbar.config.millisecond > 1) {
          cancelAnimationFrame(vsbar.stepID)
          return false
        }
        vsbar.stepID = requestAnimationFrame(step)
      }
      vsbar.stepID = requestAnimationFrame(step)
    }
  }
]

export default function (){
  init.forEach(v=>{v.call(this)})
}