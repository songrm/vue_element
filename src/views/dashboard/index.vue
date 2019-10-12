<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-button type="primary" class="pan-btn" @click="aa"
          >components</el-button
        >
      </el-col>
      <el-col :span="4">
        <el-button type="success" class="pan-btn">from</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="info" class="pan-btn">table</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="warning" class="pan-btn">excel</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="danger" class="pan-btn">form</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="info" class="pan-btn">theme</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="14">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span slot="label">information</span>
          </div>
          <div class="source">
            <el-alert
              title="Copy of successful tips"
              type="success"
              description="Text description Text description Text description Text description"
              show-icon
            ></el-alert>
            <el-alert
              title="no close alert"
              type="info"
              description="Text description Text description Text description"
              :closable="false"
            ></el-alert>
            <el-alert
              title="Error prompt"
              type="error"
              description="Error description Error description"
              show-icon
            ></el-alert>
            <el-alert
              title="warning prompt"
              type="warning"
              description="warning description warning description"
              show-icon
            ></el-alert>
          </div>
        </el-card>
      </el-col>

      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span slot="label"> echarts</span>
          </div>
          <div class="echarts">
            <div id="mychart" :style="{ width: '450px', height: '400px' }">
              90
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18">
        <htable></htable>
      </el-col>
      <el-col :span="6">
        <todo-list></todo-list>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/javascript">
// import todoList from "@/components/todoList/Todo.vue";
import htable from "@/components/table/index";

export default {
  name: "dash",
  components: { htable },
  data() {
    return {
      startVal: 0,
      endVal: ""
    };
  },
  mounted() {
    // var echarts = require("echarts/lib/echarts");
    // // 引入柱状图
    // require("echarts/lib/chart/bar");
    // require("echarts/lib/chart/line");
    // // 引入提示框和标题组件
    // require("echarts/lib/component/tooltip");
    // require("echarts/lib/component/title");
    // require("echarts/lib/component/legend");
    // // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById("mychart"));
    // // 绘制图表
    // myChart.setOption({
    //   tooltip: { trigger: "axis" },
    //   legend: {
    //     data: ["销量", "销量2"]
    //   },
    //   xAxis: {
    //     data: [
    //       "衬衫",
    //       "羊毛衫",
    //       "雪纺衫",
    //       "裤子",
    //       "高跟鞋",
    //       "袜子",
    //       "衬衫01",
    //       "羊毛衫01",
    //       "雪纺衫01",
    //       "裤子01",
    //       "高跟鞋01",
    //       "袜子01"
    //     ]
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       lable: "销量",
    //       type: "line",
    //       data: [5, 25, 36, 10, 10, 20, 5, 25, 36, 10, 10, 20]
    //     },
    //     {
    //       lable: "销量2",
    //       type: "line",
    //       data: [5, 25, 36, 10, 10, 20, 5, 25, 36, 10, 10, 20]
    //     }
    //   ]
    // });
  },
  methods: {
    aa() {
      this.endVal = 123;
    }
  },
  created() {}
};
</script>
<style type="text/css">
.pan-btn {
  font-size: 14px;
  color: #fff;
  padding: 14px 36px;
  border-radius: 4px;
  border: none;
  outline: none;
  margin-right: 25px;
  transition: all 0.6s ease;
  position: relative;
  display: inline-block;
  border: 0px;
}
.source {
  height: 400px;
  overflow: auto;
}
.source .el-alert {
  margin-top: 20px;
}
.dashboard .el-row {
  margin-bottom: 20px;
}
</style>
