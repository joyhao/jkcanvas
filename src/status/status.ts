export interface  iColorHash{
    [key:string]:string
}
export interface  iCallback{
    [key:string]:Object,
    click:{
        [key:string]:(fn?:any)=>void
    },
    dbClick:{
        [key:string]:(fn?:any)=>void
    },
    mousemove:{
        [key:string]:(fn?:any)=>void
    }
}
export let jkCount = 1
export  let ctx:any = {}
export let  colorsHash:iColorHash = {

}
export  const  callback:iCallback = {
    click:{},
    dbClick:{},
    mousemove:{},
}
export function setJKCount(val:number){
    jkCount = val
}
export  function getJKCount(){
    return jkCount
}

export  function  setCtx(os:any){
    Object.keys(os).forEach(k=>{
        ctx[k] = os[k]
    })
}

export  function  getCtx(){
  return  ctx
}

