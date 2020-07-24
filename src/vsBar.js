import config from './core/config';
import canvas from './core/canvas';
import action from './core/action';

let init = [ canvas, action ]

export default function VsBar(...arg){
  this.config = {}
  if (arg.length === 1) {
    typeof(arg[0]) === 'string' && (this.config.name = arg[0])
  }else if (arg.length === 2) {
    typeof(arg[1]) === 'object' && (this.config = arg[1])
    typeof(arg[0]) === 'string' && (this.config.name = arg[0])
  }

  if (!config.call(this)) return {}

  init.forEach(v=>{v.call(this)})
}