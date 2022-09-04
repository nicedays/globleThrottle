import copy from './copy'
import longpress from './longpress'
import throttle from './throttle'
import emoji from './emoji'
import lazyload from './lazyload'
import watermark from './watermark'

// 自定义指令
const directives = {
    copy,
    longpress,
    throttle,
    emoji,
    lazyload,
    watermark
}

export default (Vue)=>{
    Object.keys(directives).forEach((key) => {
        Vue.directive(key, directives[key])
    })
}
