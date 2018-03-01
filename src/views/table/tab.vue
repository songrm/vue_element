<template>
  <div>
    <el-tag type="success">选中{{tab_card}}</el-tag>
    <el-tabs type="card" style="margin-top:20px;" v-model="tab_card" @tab-click="handleClick">
      <el-tab-pane v-for="gr in grade" :label="gr.title" :name="gr.name" :key="gr">
          <div class="" style="width:100%">
            <el-table :data="gr.content" style="width: 100%" border>
              <el-table-column prop="date" label="日期"> </el-table-column>
              <el-table-column prop="gd" label="等级"> </el-table-column>
            </el-table>
          </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default{
    name:"tab",
    data(){
      return{
        grade:[
          {"title":"等级1","name":"first",content:[{'date':"2017-09-09","gd":"等级1"}]},
          {"title":"等级2","name":"second",content:[{'date':"2017-11-09","gd":"等级2"}]},
          {"title":"等级3","name":"third",content:[{'date':"2017-12-12","gd":"等级3"}]},
        ],
        tab_card:"first"
      }
    },
    methods: {
      handleClick(tab) {
        // console.log(tab);
      }
    }
  }
</script>
