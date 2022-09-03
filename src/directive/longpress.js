export default{
    bind: function (el, binding, vNode) {
        if (typeof binding.value !== 'function' && vNode.context !== undefined) {
            let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be`;
            console.warn(warn);
        }

        let pressTimer = null
        // 开始倒计时执行
        let start = (e) => {

            if (e.type === 'click' && e.button !== 0) {
                return;
            }

            if (pressTimer === null) {
                pressTimer = setTimeout(() => {
                    console.log("start")
                    handler()
                }, 1000)
            }
        }
        // 清除事件
        let cancel = () => {
            if (pressTimer !== null) {
                clearTimeout(pressTimer);
                pressTimer = null;
            }
        };
        // 运行方法
        const handler = (e) => {
            binding.value(e);
        };

        el.addEventListener("mousedown", start);
        el.addEventListener("touchstart", start);
        el.addEventListener("click", cancel);
        el.addEventListener("mouseup", cancel);
        el.addEventListener("mouseout", cancel);
        el.addEventListener("touchend", cancel);
        el.addEventListener("touchcancel", cancel);
    }
}