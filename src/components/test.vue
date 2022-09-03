<template>
    <div class="main">
        <!-- <button v-throttle="2000" @click="myClick">submit</button> -->
        <!-- <div  v-copy >单击复制</div>
        <div v-copy.dblclick >双击复制</div> -->
        <!-- <div v-longpress="longClick2">长按触发</div>
        <div v-longpress="()=>longClick('123')">长按传参</div> -->
        <!-- <input type="text" v-emoji v-model="emoji">
        <div>{{emoji}}</div> -->
        <div class="parent">
            <div class="child">
                <img class="lazyimg" v-lazyload='url' />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {
            emoji: "",
            url: 'http://www.santaihu.com/e/data/tmp/titlepic/f25f87010664b5393de14d15ef0d60b9.jpg'
        }
    },
    methods: {
        myClick() {
            console.log('1231231')
        },
        longClick(e) {
            console.log(e)
        },
        longClick2() {
            console.log('无参数')
        }
    }

}
</script>

<style>
.main {
    margin: auto auto;
    height: 10px;
}
.parent {
}
.lazyimg {
    height: 100px;
    position: absolute;
    bottom: 0;
}
.child {
    width: 100%;
    height: 2000px;
    position: relative;
}
</style>
