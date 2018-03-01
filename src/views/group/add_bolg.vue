<template>
  <div class="article">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="18" :lg="18" class="marbottom20">
        <el-card class="box-card marbottom20">
          <div slot="header" class="clearfix">
            <span>添加文章</span>
          </div>
          <p class="art_t_p">标题</p>
          <el-input placeholder="请输入文章标题" v-model="bolg_title" clearable class="marbottom20">
          </el-input>
          <p class="art_t_p">编码（例如：01、02）</p>
          <el-input placeholder="请输入文章编码" v-model="bolg_id" clearable class="marbottom20">
          </el-input>
          <p class="art_t_p">内容</p>
          <tinymce :height="300" v-model="content" class="marbottom20"></tinymce>
          <p class="art_t_p">类型（html、Java、css）</p>
          <el-input placeholder="类型" v-model="bolg_type" clearable class="marbottom20">
          </el-input>
          <p class="art_t_p">标签（一般、重要）</p>
          <el-input placeholder="标签" v-model="bolg_label" clearable class="marbottom20">
          </el-input>
          <p class="art_t_p">日期</p>
          <el-date-picker v-model="bolg_time" type="date" placeholder="选择日期" class="marbottom20"></el-date-picker>
          <p class="art_t_p">作者</p>
          <el-input placeholder="作者" v-model="bolg_author" clearable class="marbottom20">
          </el-input>
          <p class="art_t_p">这里是富文本框填写的内容</p>
          <div class="panel-body" v-html="content"></div>
          <el-button type="primary" size="small" @click='tij'>保存</el-button>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="6" :lg="6" class="marbottom20">
        <el-card class="box-card marbottom20">
          <div slot="header" class="clearfix">
            <span>Article Data</span>
          </div>
          <p class="art_t_p">搜索设置</p>
          <p class="art_t_p">设置标签</p>
          <el-input  placeholder="输入搜索条件"></el-input>
          <p class="art_t_p">设置类型</p>
          <!-- <el-select multiple filterable  allow-create placeholder="请选择" v-model="value" style="width:100%" >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select> -->
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
  export default{
    name:'add_bolg',
    data(){
      return{
        bolg_time:'',
        bolg_title:'',
        bolg_id:'',
        bolg_type:'',
        bolg_label:'',
        bolg_author:'wanwan',
        value:'',
        content:''
      }
    },
    components:{Tinymce},
    methods:{
      tij:function(){
        var params={
                _id:this.bolg_id,
                _name:this.bolg_title,
                _context:this.content,
                _author:this.bolg_author,
                _date:this.bolg_time,
                _type:this.bolg_type,
                _lable:this.bolg_label,
          }
          //console.log(params)
        this.$axios.get('/articleadd',{params: params}).then(function(response){
          console.log(response.data)
        })

        // this.$axios({
        //   method: 'get',
        //   url: '/articleadd',
        //   body: params
        // }).then(function(response){
        //   console.log(response.data)
        //
        // }).catch(function(error) {
        //     alert(error);
        // });
      }
    },
    created(){

    }
  }
</script>
<style lang="scss">
 @import 'article.scss';
</style>
