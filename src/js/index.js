function vsBar(config){
  vsBarconfig = {
    cvsPadding: 5, //canvas内边距
    cvsRadius: 50, //圆弧半径
    cvslineWidth: 10, //线条宽度
    millisecond: 1000, //动画持续时间(毫秒)
    cvsBarPercent: 1,
    cvsDom: null,
    frameBarPercent: 0
    
  }

  vsBarconfig = Object.assign(vsBarconfig, config)

  !vsBarconfig.cvsDom && !function(){throw new Error('缺少canvas画板.')}()

  barAnimation()

  vsBar.prototype.reset = reset

  function reset(config){
    vsBarconfig.cvsBarPercentOld = vsBarconfig.cvsBarPercent
    vsBarconfig = Object.assign(vsBarconfig, config)

    barAnimation()
  }

  function barAnimation(){
    if (vsBarconfig.animationShow) {
      vsBarconfig.animationID && cancelAnimationFrame(vsBarconfig.animationID)
      vsBarconfig.startBarPercent = vsBarconfig.cvsBarPercentOld
      //return false
    }
    vsBarconfig.animationShow = true

    let thatHash = createHash(6)
    //每次执行时存入不同的hash值,保证同一时间只有一个动画在运行.
    vsBarconfig.animationHash = thatHash
    //动画整体持续时间初始化(开始时动画整体已持续时间为0毫秒)
    !vsBarconfig.animationTime && !function(){vsBarconfig.animationTime = 0}()
    //进度条位置初始化
    !vsBarconfig.startBarPercent && !function(){vsBarconfig.startBarPercent = 0}()
    //计算此次进度条开始结束的差值
    let thatBarPercent = vsBarconfig.cvsBarPercent - vsBarconfig.startBarPercent
    //动画整体持续时间更新(本次动画的持续时间不会计算在内)
    vsBarconfig.animationTime = Date.now()
    
    let step = function(){
      //页面持续时间与动画整体持续时间(本次动画的持续时间不会计算在内)的差值
      //页面持续时间在本次动画执行时会增加
      //动画整体持续时间在本次动画不计算在内
      //它们的差值就是本次动画的持续时间
      let stepTime = Date.now() - vsBarconfig.animationTime
      //console.log(stepTime,vsBarconfig.millisecond)

      //当前动画的持续时间小于动画设置的时间才预约下一帧动画
      //画板内存的hash值相同时才预约下一帧动画
      if (stepTime < vsBarconfig.millisecond && vsBarconfig.animationHash == thatHash) {
        vsBarconfig.animationID = requestAnimationFrame(step)
      }else{
        //本次动画流程结束后更新进度条的开始位置(在这里更新是因为动画结束前其开始位置都应该是上一次的结束位置)
        stepTime = vsBarconfig.millisecond
        vsBarconfig.animationShow = false
      }
      vsBarconfig.frameBarPercent = (stepTime/vsBarconfig.millisecond) * thatBarPercent + vsBarconfig.startBarPercent
      barCircle({
        //(本次动画的持续时间 除以 动画设置持续时间 乘以 进度条的设置长度) 加 本次进度条的开始位置(上次进度条的结束位置)
        //加 本次进度条的开始位置(上次进度条的结束位置) 的意义在于进度条不会再从0开始,而是从上次结束时开始播放动画.
        cvsBarPercent: vsBarconfig.frameBarPercent,
      })

      //本次动画最后一帧执行完成后将本次的结束位置存入为下次的开始位置
      if (!vsBarconfig.animationShow) {
        vsBarconfig.startBarPercent = vsBarconfig.cvsBarPercent
      }
    }
    vsBarconfig.animationID = requestAnimationFrame(step)
  }

  function barCircle(config) {
    !vsBarconfig.cvsDom && !function(){throw new Error('缺少canvas画板')}()
    config.cvsBarPercent > 1 && !function(){config.cvsBarPercent = 1}()
    config.cvsBarPercent < 0 && !function(){config.cvsBarPercent = 0}()

    vsBarconfig.cvsDom.width = vsBarconfig.cvsRadius*2 + vsBarconfig.cvslineWidth + vsBarconfig.cvsPadding
    vsBarconfig.cvsDom.height = vsBarconfig.cvsRadius*2 + vsBarconfig.cvslineWidth + vsBarconfig.cvsPadding
    const r = vsBarconfig.cvsRadius
    const ctx = vsBarconfig.cvsDom.getContext('2d')
    ctx.clearRect(0, 0, cvs.width, cvs.height);//清除画布已有内容
    ctx.lineWidth = vsBarconfig.cvslineWidth
    ctx.beginPath()
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'red'
    ctx.arc(cvs.width / 2, cvs.height / 2, r, -90 * Math.PI / 180, (360 * config.cvsBarPercent - 90) * Math.PI / 180);//绘制一个弧线
    ctx.stroke()
  }

  function createHash (hashLength) {
　　  // 默认长度 24
    return Array.from(Array(Number(hashLength) || 24), () => Math.floor(Math.random() * 36).toString(36)).join('');
  }
}

export {
  vsBar
}