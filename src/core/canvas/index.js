import canvas from './canvas';

let init = [ canvas ]

export default function (){
  let vsBar = this
  vsBar.canvas = {}
  init.forEach(v=>{v.call(this)})
}