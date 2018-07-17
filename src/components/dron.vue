<template>
  <div>
    <h1>下拉框组件 - on</h1>

    <input v-model='input' @click='show' style='border:1px solid #000'/>
    <div class="" v-if='ishow'>
      <ul>
        <li @click="dji('12')">  12  </li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default{
    name:"dron",
    data(){
      return {
        input:'',
        ishow:false,
        childValue: '我是子组件的数据'
      }
    },
     methods:{
       dji(m){
         this.input=m
         this.$emit('childByValue', this.childValue , this.input)
       },
       show(){
         this.ishow=true
       }
     },
     mounted(){

     }


  }
</script>
<style >

  </style>
