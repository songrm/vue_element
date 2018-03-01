<template>
  <div class="article">
    <el-row :gutter="20">
      <el-col :sm="24" :md="18">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>
              {{article_name}}{{art_id}}
              <!-- article -->
            </span>
          </div>
          <div class="bolg_txt" v-html="article_context">
            <!-- {{article_context}} -->
            <!-- 是啊！脱贫，作为文字从业人员，简直是当务之急。从2010年以来，国家的薪水制度，的文艺工 -->
          </div>

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
          <!-- <div class='ark_list_m'>
            <a href="javascript:;" v-for='tit in article_data'>{{tit.title}}</a>
          </div> -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    name:'bolg_list',
    data(){
      return{
        article_context:'',
        article_name:'',
        art_id:''
      }
    },
    methods: {
     getParams () {
       // 取到路由带过来的参数
       // if(routerParams='{}'){
       //   this.article_context='请跳转路由从列表页点击，查看详情'
       // }
       let routerParams = this.$route.query.id
       this.art_id=this.$route.query.id
       //console.log('id='+this.art_id)
       var params={
               _id:this.art_id
         }
      var self=this
       this.$axios.get('/articleedit',{params: params}).then(function(response){
         console.log(response.data.data)
         self.article_name=response.data.data._name
         self.article_context=response.data.data._context

       })

     }
   },
   created(){
     this.getParams()
   },
   watch: {
      '$route': function () {
        this.art_id = this.$route.params.orderId
        this.getParams()
      }
    }

  }
</script>
