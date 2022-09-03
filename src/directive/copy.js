
import Vue from 'vue'
const copy={
    bind(el,clickType){
        if(clickType.modifiers.dblclick){
            el.addEventListener('dblclick', ()=>handleClick(el.innerText))
        }else{
            el.addEventListener('click',()=>handleClick(el.innerText))
        }
    }
}

async function handleClick(text){
    try{
        await navigator.clipboard.writeText(text);
        console.log('复制成功');
    }catch(err){
        console.warn('复制失败',err)
    }
}
export default copy