<template>
<div class="article">
  <el-row :gutter="20">
    <el-col :sm="24" :md="18">
      <el-card class="box-card">
          <div class="art_top">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-input class="" size="medium" placeholder="请输入搜索条件"></el-input>
              </el-col>
              <el-col :span="6">
                <el-input class="" size="medium" placeholder="请输入搜索条件"></el-input>
              </el-col>
              <el-col :span="8">
                <el-button type="primary" size="medium" @click='spus'>搜索</el-button>
              </el-col>
            </el-row>
          </div>
          <el-table :data='article_data' style="width:100%" border class="martop20">
            <el-table-column prop="_name" label="标题"></el-table-column>
            <el-table-column prop="_type" label="类型"></el-table-column>
            <el-table-column  label="标签">
              <template scope='scope'>
                  <el-tag :type="scope.row._lable | label_e">{{scope.row._lable}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="_date" label="时间"></el-table-column>
            <el-table-column  fixed="right"  label="操作"  width="150">
              <template scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small" @click='delet_art(scope.row)'>删除</el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-card>
    </el-col>
    <el-col :sm="24" :md="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>标签</span>
        </div>
        <div class='lable_f'>
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </div>
      </el-card>
      <el-card class="box-card martop20">
        <div slot="header" class="clearfix">
          <span>排行榜</span>
        </div>
        <div class='ark_list_m'>
          <a href="javascript:;" v-for='tit in article_data'>{{tit._name}}</a>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>
<script>
const data=[
  {'title':'today home1',"type":'java',"lable":'重要',"time":'2012-09-08'},
  {'title':'today home2',"type":'java',"lable":'一般',"time":'2012-09-08'},
  {'title':'today home3',"type":'java',"lable":'删除',"time":'2012-09-08'}
]
  export default{
    name:'article',
    data(){
      return{
        article_data:[]
      }
    },
    methods:{
        handleClick(obj){
          //查看事件
          this.$router.push({
              path: '/group/bolg_list',name:'bolg_list',
                params: obj,
                query: {
                  id:obj._id
                }
            })

        },
        res_b(){
          //加载列表事件
          var self=this
          this.$axios.get('/articlelist').then(function(response){
            self.article_data=response.data.data
          })
        },
        spus(){
          //搜索事件
          var params={
                  _id:'001'
            }
          this.$axios.get('/articleedit',{params: params}).then(function(response){
            console.log(response.data)

          })
        },
        delet_art(obj){
          //删除事件
          console.log('删除==='+obj)
          var params={
                  _id:obj._id
            }
          var self=this
          this.$axios.get('/articledel',{params: params}).then(function(response){
            console.log(response.data)
            if (response.data.success==1) {
              //删除成功
              self.res_b();
              self.$message({
                  message: '删除成功',
                  type: 'success'
                });
            }
            else {
              //删除失败
              self.$message.error('删除失败，请检查错误信息');
            }
          })
        }
    },
    created(){
      this.res_b()
    },
    filters:{
      label_e(a){
        const lable={
          重要:'success',
          一般:'warning',
          删除:'danger'
        }
        return lable[a]
      }
    },
    watch:{
      '$route': 'res_b'
    }
  }
</script>
<style lang="scss">
 @import 'article.scss';
</style>
