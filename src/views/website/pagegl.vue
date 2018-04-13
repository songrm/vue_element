<template>
  <div>
    <el-row>
      <el-col :span="8">
        <span>页面路径</span>
        <p>首页</p>
        <p>关于我们</p>      
      </el-col>
      <el-col :span="16">
        <span>页面</span>
        <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="发布状态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="页面名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="文章时间">
        </el-table-column>
      </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default{
    name:"pagegl",
    data(){
      return{
        tableData: [{
         date: '开启',
         name: '新闻',
         address: '2017-09-09'
       }, {
         date: '关闭',
         name: '娱乐',
         address: '2017-08-08'
       }]
      }
    },
    methods:{

    },
}
</script>
