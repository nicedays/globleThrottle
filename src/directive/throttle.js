const Doms = []
export default{
    inserted(el, delay) {
        Doms.push(el) // 使用el这个dom对象
        el.addEventListener('click', () => {
            // 禁用这个指令的DOM结构点击事件
            Doms.forEach(item => {
                item.style.pointerEvents = 'none';
            });
            setTimeout(() => {
                // 启动这个指令的DOM结构点击事件
				Doms.forEach(item => {
                item.style.pointerEvents = 'auto';
            });
            }, delay.value || 1000); // 默认1秒
        });
    }
}