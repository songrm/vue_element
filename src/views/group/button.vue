<template>
  <div class="button">
    <h3>基本用法</h3>
    <div class="ms">type 类型 可选值 primary / success / warning / danger / info / text</div>
    <div class="mar20">
      <el-button>button</el-button>
      <el-button type='text'>button</el-button>
      <el-button type='info'>button</el-button>
      <el-button type='danger'>button</el-button>
      <el-button type='warning'>button</el-button>
      <el-button type='success'>button</el-button>
      <el-button type='primary'>button</el-button>
    </div>
    <div class="ms">plain  是否朴素按钮 值：true/false。round  是否圆角按钮 值：true/false。</div>
    <div class="mar20">
      <el-button type='info' plain>button</el-button>
      <el-button type='info' round>button</el-button>
    </div>
    <div class="ms">loading  加载 值：true/false。</div>
    <div class="mar20">
      <el-button type='success' :loading="true">button</el-button>
    </div>
    <div class="ms">Button 组件提供除了默认值以外的三种尺寸 medium small mini</div>
    <div class="mar20">
      <el-button type='success' size="medium">button</el-button>
      <el-button type='success' size="small">button</el-button>
      <el-button type='success' size="mini">button</el-button>
    </div>
    <h3>按钮停留特性</h3>
    <el-row  class="cor_bg">
      <el-col :span="6" v-for="num_x in x_sj" :key='num_x'>
        <div class="bg-purple">
          <p>效果{{num_x}}</p>
          <div v-bind:class="fun(num_x)">按钮 </div>
          <!-- <div class="sim-button button1" >按钮 </div> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>

  // import 'button.scss';
  export default{
    name:'button',
    data(){
      return{
        x_sj:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      }
    },
    methods:{
      fun(index){
        var s='sim-button button'+index
        return s
      }
    }
  }
</script>
<style lang="scss">
@import 'button.scss';
</style>
<style lang="css">
@import 'main.css';
</style>
<!-- <link rel="stylesheet" media="all" href="main.css"> -->
