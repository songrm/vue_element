<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="personi" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <span style="font-size:12px;color:#999">Digital Marketing Director</span>

            </div>
          </div>
        </el-card>
        <div class="padd_des">
            <el-collapse v-model="activeNames" >
              <el-collapse-item title="描述1" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="描述2" name="2">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
        </div>
      </el-col>
      <el-col :span="16">
        <el-tabs type="border-card">
           <el-tab-pane label="steps">
             <div class="profile-timeline timeline-right">
               <div class="timeline-item timeline-main">
                <div class="timeline-date bg-primary">Now</div>
              </div>
               <div class="timeline-item timeline-item-right" v-for="step_d in steps">
                 <div class="timeline-item-icon bg-info" >
                   <svg class="icon" aria-hidden="true">
                        <use :xlink:href="step_d.img"></use>
                    </svg>
                 </div>
                 <div class="timeline-item-content">
                   <div class="timeline-heading" style="padding-bottom: 10px;" v-html="step_d.context">
                     <!-- {{step_d.context}} -->
                     <!-- <a href="javascript:void(0)"> Smith Johnson </a> added to friends
                     <img src="static/b01.jpg"> -->
                   </div>
                 </div>
               </div> <!-- end -->

             </div>
           </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import personi from '@/assets/bg7.jpg'
  export default{
    name:'steps',
    data(){
      return{
        personi,
        activeNames: [],
        steps:[
          {'img':"#icon-wancheng",'context':"<a href='javascript:void(0)'> Smith Johnson </a> added to friends<img src='static/b01.jpg'>"},
          {'img':"#icon-star-opp",'context':" <div>Smith Johnson</div>这里是文本描述；这里是文本描述；这里是文本描述；"},
          {'img':"#icon-jushoucanggift",'context':" <div>Smith Johnson</div>这里是文本描述；<br>这里是文本描述；<br>这里是文本描述；"},
          {'img':"#icon-wancheng1",'context':" <div>Smith Johnson</div>这里是文本描述；<br>这里是文本描述；<br>这里是文本描述；"}
        ]
      }
    },
    methods:{
      gl(con){
        return con
      }
    }
  }
</script>
<style lang="css">
@import 'steps.css';
</style>
