<template>
  <div>
    <el-alert title="webfont" type="error" description="设置头部导航，一级菜单、二级菜单" :closable="false">
    </el-alert>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-button type="text" @click="add_menu()">添加</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="text">提交</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      
      <el-col :span="12">
        <div class="">
          <el-input v-for='(qd,index) in menu_data' v-model="qd.title" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>

  export default{
    name:"topmenu",
    data(){
      return{
        menu_data:[
          {
            'id':0,
            'title':'首页'
          },
        ]
      }
    },
    methods:{
      add_menu(){
        this.$axios.get('/menulist').then(function(response){
          console.log(response.data)
        })
        this.menu_data.push({
          "id":"2",
          "title":''
        })
      }
    }
  }
</script>
