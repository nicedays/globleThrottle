import Vue from 'vue'
Vue.directive('emoji', {
    bind: function (el, binding, vnode) {
        // 自定义正则表达式
        var regRule = /[^a-zA-Z0-9]/g
        el.$handle = function () {
            let val = el.value
            el.value = val.replaceAll(regRule, '')
            
            trigger(el, 'input')
        }
        el.addEventListener('keyup', el.$handle)
    },
    unbind: function (el) {
        el.removeEventListener('keyup', el.$handle)
    },
});
const trigger = (el, type) => {
    let ev = document.createEvent('HTMLEvents');//创建HTML事件
	ev.initEvent(type,true,true);//初始化事件，type为事件类型，如input
	el.dispatchEvent(ev);//派发事件
}
let findEle = (parent, type) => {
    return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}