<template>
  <div>
    <h3>动态显示表头</h3>
    <div class="">
      <el-checkbox-group v-model="checkList"  class="check_mb20">
        <el-checkbox v-for="list in lists" :label="list" :key="list">{{list}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div style="width:90%">
      <el-table :data="data_3" border style="width:100%">
        <el-table-column prop="name" label="fruitName"></el-table-column>
        <el-table-column v-for='(fruit,index) in formThead' :label="fruit" :key='index'>
          <template scope="scope">
            {{scope.row[fruit]}}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
const defaultFormThead = [] // 默认选中项
  export default{
    name:"dyn_table",
    data(){
      return{
        lists:["moblie","number","address"],//复选框 列表
        checkList: defaultFormThead,//默认 选中
        data_3:[
          {"name":"jeck","moblie":"18213483490","number":"100","address":"address"}
        ],
        formTheadOptions: ['moblie', 'number', 'address'], // 可选择表头
        formThead: defaultFormThead  //显示表头
      }
    },
    methods:{

    },
    created(){

    },
    watch:{
      checkList(value) {
        this.formThead = this.formTheadOptions.filter(i => value.indexOf(i) >= 0)


      }
    }
  }
</script>
<style>
.check_mb20{margin-bottom: 20px;}
</style>
