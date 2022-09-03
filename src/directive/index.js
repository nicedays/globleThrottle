import copy from './copy'
import longpress from './longpress'
import throttle from './throttle'
import emoji from './emoji'
import lazyload from './lazyload'

// 自定义指令
const directives = {
    copy,
    longpress,
    throttle,
    emoji,
    lazyload
}

export default (Vue)=>{
    Object.keys(directives).forEach((key) => {
        Vue.directive(key, directives[key])
    })
}
