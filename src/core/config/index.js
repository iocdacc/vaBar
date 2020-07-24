import config from './config';

let init = [ config ]

export default function (){
  return init.every(v=>{return v.call(this)})
}