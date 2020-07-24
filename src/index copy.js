class VsBar {
  constructor(config){
    this.config = {
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
    this.config = Object.assign(this.config, config)

    if(!this.config.cvsDom){
      throw new Error('缺少canvas画板')
    }
    if(typeof this.config.cvsDom === "string") {
      let cvsChild = [...document.getElementsByClassName(this.config.cvsDom)]
      if(cvsChild.length === 0){
        throw new Error('缺少canvas画板')
      }
      cvsChild.forEach(v => {
        new vsBar(v)
      });
      return
    }
    if(!HTMLCanvasElement.prototype.isPrototypeOf(this.config.cvsDom)) {
      throw new Error('缺少canvas画板')
    }

    this.config.cvsDom.width = this.config.cvsDom.clientWidth
    this.config.cvsDom.height = this.config.cvsDom.clientHeight

    this.config.autoPlay && this.step()
  }

  // 过渡
  step(){
    let start = null
    let step = now => {
      if (!start) {
        start = now
      }

      now = now - start
      this.barNow = now/this.config.millisecond * (this.config.cvsBarPercent - this.config.barBeforeEnd) + this.config.barBeforeEnd

      if (this.config.cvsBarPercent > this.config.barBeforeEnd && this.barNow > this.config.cvsBarPercent) {
        this.barNow = this.config.cvsBarPercent
      } else if(this.config.cvsBarPercent < this.config.barBeforeEnd && this.barNow < this.config.cvsBarPercent) {
        this.barNow = this.config.cvsBarPercent
      }

      this.barCircle()
      if(now/this.config.millisecond > 1) {
        cancelAnimationFrame(this.stepID)
        return false
      }
      this.stepID = requestAnimationFrame(step)
    }

    this.stepID = requestAnimationFrame(step)
  }

  // 重置
  reset(config){
    this.stepID && cancelAnimationFrame(this.stepID)
    this.config.barBeforeEnd = this.config.cvsBarPercent
    this.config = Object.assign(this.config, config)
    this.step()
  }

  // 停止
  stop(){
    cancelAnimationFrame(this.stepID)
    this.ctx.clearRect(0, 0, this.config.cvsDom.clientWidth, this.config.cvsDom.clientHeight);// 清除画布已有内容
  }

  // 画板
  barCircle() {
    let r = (this.config.cvsDom.clientWidth - this.config.cvslineWidth - this.config.cvsPadding*2)/2
    this.ctx = this.config.cvsDom.getContext('2d')
    this.ctx.clearRect(0, 0, this.config.cvsDom.clientWidth, this.config.cvsDom.clientHeight);// 清除画布已有内容
    this.ctx.lineWidth = this.config.cvslineWidth
    this.ctx.beginPath()
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = this.config.color
    this.ctx.arc(this.config.cvsDom.clientWidth / 2, this.config.cvsDom.clientHeight / 2, r, -90 * Math.PI / 180, (360 * this.barNow - 90) * Math.PI / 180);// 绘制一个弧线
    this.ctx.stroke()
  }
}

export {
  VsBar
}