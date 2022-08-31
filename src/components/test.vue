<template>
	<div class="main">
		<!-- <button v-throttle="2000" @click="myClick">submit</button> -->
        <!-- <div  v-copy >单击复制</div>
        <div v-copy.dblclick >双击复制</div>
        <div v-longpress="longClick2">长按触发</div>
        <div v-longpress="()=>longClick('123')">长按传参</div> -->
        <input type="text" v-emoji v-model="emoji">
        <div>{{emoji}}</div>
	</div>
</template>

<script>
	export default {
	  name: 'test',
	  data(){
		  return{
            emoji:""
		  }
	  },
	  methods:{
		  myClick(){
			  console.log('1231231')
		  },
          longClick(e){
            console.log(e)
          },
          longClick2(){
            console.log('无参数')
          }
	  }
	  
	}
</script>

<style>
	.main{
		margin: auto auto;
		width: 100px;
		height: 10px;
	}
</style>
