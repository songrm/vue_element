<template>
  <div>
    <!-- <h1>这里是子组件显示内容</h1> -->
    <div class="borderCom">
      文章标题：{{categoryName._name}}，作者：{{categoryName._author}}
    </div>
  </div>
</template>
<script>
  export default{
    name:"dron",
    props:['categoryName','msgVal'],
    data(){
      return {
        input:'',

        childValue: '我是子组件的数据'
      }
    },
     methods:{
       dji(m){
         this.input=m
         this.$emit('childByValue', this.childValue , this.input)
       }
     },
     mounted(){

     }


  }
</script>
<style >
.borderCom{padding: 10px;border:1px solid #ccc;margin-bottom: 10px;}
</style>
