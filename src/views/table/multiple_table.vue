<template>
<div>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-input size="medium"  placeholder="请输入搜索条件(区分大小写)"  v-model="input7"></el-input>
    </el-col>
    <el-col :span="2"><el-button plain size="medium" @click="su_ecw()">搜索</el-button></el-col>
    <el-col :span="2"><el-button type="" plain size="medium" @click="add_d()">添加</el-button></el-col>
    <el-col :span="2"><el-button type="" plain size="medium" :loading="downloadLoading" @click="export_excel()">导出excel</el-button></el-col>
  </el-row>

  <div class="" style="width:100%;margin-top:20px;">
    <el-table :data="au_data" border>
      <el-table-column label="author">
        <template scope="scope">
            {{scope.row.author}}
        </template>
      </el-table-column>
      <el-table-column label="title">
        <template scope="scope">
            {{scope.row.title}}
        </template>
      </el-table-column>
        <el-table-column label="关注度">
          <template scope="scope">
              {{scope.row.imp}}
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template scope="scope">
            <el-tag :type="scope.row.state | state_f">{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="日期">
          <template scope="scope">
              {{scope.row.date}}
          </template>
        </el-table-column>
        <el-table-column  fixed="right"  label="操作"  width="120">
          <template scope="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handlede(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
  </div>


    获取分页：{{page_num}}
  <page showItem='5' allpage="13" v-on:page-num="get_page"></page>


  <el-dialog :title="dialogStatus" :visible.sync="dialogVisible"  width="50%">
    <div class="">

      <el-form :model="form">
         <el-form-item label="作者名称" style="margin-bottom:0px">
           <el-input v-model="form.author" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="title" style="margin-bottom:0px">
           <el-input v-model="form.title" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="关注度" style="margin-bottom:0px">
           <el-input v-model="form.imp" auto-complete="off"></el-input>
         </el-form-item>
       </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button v-if="dialogStatus=='添加'" type="primary" @click="c_few">确 定</el-button>
      <el-button v-else type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>
<script>
const data=[
  {
        "id":1,
        "author": "mary allen",
        "title": "Aromlunbl Pjobmmcf Toprqjv Ukoqpht",
        "state": "draft",
        "imp": "2",
        "date": "2004-06-29",
        "address": "浙江省 台州市 温岭市",
        "boolean": false
      },
      {
        "id":2,
        "author": "Christopher Moore",
        "title": "Xebgbinen Hrfwwjcxv Etosepxdi Lxhryowis Ymgqidsm Kmxni",
        "state": "deleted",
        "imp": "2",
        "date": "2007-10-08",
        "address": "安徽省 巢湖市 含山县",
        "boolean": true
      },
      {
        "id":3,
        "author": "George Gonzalez",
        "title": "Het Ihnuuljfss Gzsgkx Tyomch",
        "state": "published",
        "imp": "2",
        "date": "1977-10-28",
        "address": "四川省 雅安市 雨城区",
        "boolean": true
      },
      {
        "id":4,
        "author": "David Thompson",
        "title": "Llhvrixwc Ror Ncsmrlfj Cimh Xgsr Jmmqa",
        "state": "draft",
        "imp": "1",
        "date": "1974-05-13",
        "address": "湖北省 宜昌市 西陵区",
        "boolean": false
      },
      {
        "id":5,
        "author": "Donald Lee",
        "title": "Gbqcrxx Kzljjcfp Fypj Fuolo Sxchcvo Odwungxjln",
        "state": "draft",
        "imp": "1",
        "date": "1990-05-22",
        "address": "黑龙江省 佳木斯市 富锦市",
        "boolean": false
      }

]
import page from '@/components/page';
export default{
  name:"multiple",
  data(){
    return{
      input7:"",

      au_data:data,
      arr:[],
      downloadLoading:false,
      dialogVisible: false,
      dialogStatus:'',
      page_num:'',
      form: {
          author: '',
          title:"",
          imp:""
        },

    }

  },
  components:{page},
  methods:{
    au_res(){
      // 这里是请求数据
      // var self=this
      // this.$axios.get('/ceshi/multiler').then(function(response){
      //   self.au_data=response.data.data.projects
      //
      // });

    },
    get_page:function(msg){
      this.page_num=msg
    },
    su_ecw(){
      // 搜索
      var json = data;
      for(var i=0,l=json.length;i<l;i++){
        for(var key in json[i]){
          if(json[i][key].toString().indexOf(this.input7)>=0){
            this.arr.push(json[i]);
          }

        }
      }
      this.au_data=this.arr;
      this.arr=[];

    },
    export_excel(){
      //导出
      this.downloadLoading = true
      require.ensure([], () => {
        const { export_json_to_excel } = require('@/vendor/Export2Excel')
        const tHeader = ['id','author','title','date']
        const filterVal = ['id','author','title','date']
        const list = this.au_data
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '导出数据', '压缩文本')
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    add_d(){
      this.dialogVisible = true;
      this.dialogStatus='添加';
    },
    c_few(){
      this.au_data.push(this.form);
      this.dialogVisible = false;
      this.$message({
        message: '添加成功',
        type: 'success'
      });

    },
    onSubmit() {
        // 修改提交
        this.dialogVisible = false;
        this.$message({
          message: '修改成功',
          type: 'success'
        });
    },
    handlede(index, row){
      //删除
      //this.au_data.remove(index)
      this.au_data.splice(index,1)
      console.log(this.au_data);
      this.$message({
        message: '删除成功',
        type: 'error'
      });
    },
    handleEdit(index, row){
      // 修改赋值
      this.dialogVisible = true;
      this.dialogStatus='修改';
      this.form=row
    }

  },
  created(){
    //this.au_res();
  },
  filters:{
    state_f(a){
      const s_map={
        published:"success",
        deleted:"danger"

      }
      return s_map[a]
    }
  }
}
</script>
