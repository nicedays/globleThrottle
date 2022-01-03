<template>
	<div class="main">
		<button v-throttle="2000" @click="myClick">submit</button>
	</div>
</template>

<script>
	export default {
	  name: 'test',
	  data(){
		  return{
			  
		  }
	  },
	  methods:{
		  myClick(){
			  console.log('1231231')
		  }
	  }
	  
	}
</script>

<style>
	.main{
		margin: auto auto;
		width: 50px;
		height: 10px;
	}
</style>
