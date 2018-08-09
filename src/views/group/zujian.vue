<template>
  <div>
    <h1>组件</h1>
    <span @click="res_b">组件可点击</span>
    <!-- {{article_data}} -->
    <!-- <span v-for="a in article_data">{{a._name}}</span> -->
    <dron v-for="a in article_data"
      :categoryName="a" :msgVal="msg">
    </dron>
  </div>
</template>
<script>
import dron from '@/components/dron'
  export default{
    name:"zuj",
    data(){
      return {
        val: '',
        article_data: [{'name':'123'}],
        msg: [1,2,3]
      }
    },
    components:{dron},
    computed:{


 		 },
    created(){
      this.res_b()
    },
     methods:{
       childByValue: function (childValue ,a) {
        // childValue就是子组件传过来的值
        this.val = childValue
      },
      res_b(){
        //加载列表事件

        var self=this
        this.$axios.get('/articlelist').then(function(response){

          self.article_data=response.data.data

        })
        console.log(this.article_data)
      }
     },
     mounted(){

     }
  }
</script>
<style >

  </style>
