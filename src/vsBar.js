import config from './core/config';
import canvas from './core/canvas';
import action from './core/action';

let init = [ canvas, action ]

export default function VsBar(...arg){
  this.config = {}
  if (arg.length === 1) {
    this.config.name = arg[0]
  }else if (arg.length === 2) {
    this.config = arg[1]
    this.config.name = arg[0]
  }

  if (!config.call(this)) return {}

  init.forEach(v=>{v.call(this)})
}