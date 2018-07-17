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
    <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>

    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>

{{json}}
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click='toggleSelection()'>取消选择</el-button>
  </div>
  <table>
    <thead>
      <th>
        <td><input type="checkbox"/></td>
        <td>id</td>
        <td>姓名</td>
      </th>
    </thead>
    <tbody>
      <tr v-for="wh in tableData3">
        <td><input type="checkbox" v-model='wh.ist' @change='checkbox($event,1)'/></td>
        <td>{{wh.id}}</td>
        <td>{{wh.name}}</td>
      </tr>
    </tbody>
  </table>
  {{tableData3}}
  <span @click='sure'>确定</span>
  <div class="">

  </div>
  {{newtab}}
  </div>
</template>
<script>
  export default{
    name:"tab",
    data(){
      return{
        dialogTableVisible:'',
        grade:[
          {"title":"等级1","name":"first",content:[{'date':"2017-09-09","gd":"等级1"}]},
          {"title":"等级2","name":"second",content:[{'date':"2017-11-09","gd":"等级2"}]},
          {"title":"等级3","name":"third",content:[{'date':"2017-12-12","gd":"等级3"}]},
        ],
        tab_card:"first",
        json: '',
        s:1,
        xuz: [],
        mmmd: '',
        tableData3: [{
          id:'1',
          ist:false,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'2',ist:false,
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'3',ist:false,
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        newtab: []
      }
    },
    created(){

      this.bli()
      // this.toggleSelection(this.mmmd)
    },
    mounted(){
      // this.abc()
    },
    methods: {
      sure(){
        this.newtab= []
        for (var i = 0; i < this.tableData3.length; i++) {
          if(this.tableData3[i].ist==true){
            this.newtab.push(this.tableData3[i])
          }
        }
      },
      checkbox(ev,id){
        console.log($(ev))
      },
      handleClick(tab) {
        // console.log(tab);
      },
      bli(){
        var mh='3'
        this.tableData3.forEach(e =>{
          if (e.id == mh) {
            this.xuz.push(Number(e.id))
          }
        })
        this.mmmd = '[tableData3['+this.xuz[0]+']]'
        // console.log(this.mmmd)
      },
      toggleSelection(rows) {
        console.log(rows)
        this.json=rows
        var rows =[ { "date": "2016-05-06", "name": "王小虎", "address": "123231",'__ob__': this } ]
        if (rows) {
          rows.forEach(row => {
            console.log(row)
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        //this.multipleSelection = val;
      }
    }
  }
</script>
