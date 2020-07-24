import reset from './reset';
import start from './start';
import stop from './stop';

let init = [ reset, start, stop ]

export default function (){
  let vsBar = this
  vsBar.action = {}
  return init.forEach(v=>{return v.call(this)})
}