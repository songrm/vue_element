<template>
  <div class="">
    <div class="lable martop20">
      返回顶部
    </div>

    <!-- <div class="scroll-container" ref="scrollContainer" @mousewheel="handleScroll">
      <div  class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}">
        <slot>343434</slot>
      </div>
    </div> -->

    <div class="martop20" style="height:400px;">
      以下为 占位
    </div>
    <div class="martop20" style="height:400px;">
      以下为 占位
    </div>
    <div class="martop20" style="height:400px;">
      以下为 占位
    </div>
    <div class="go_back" @click='gotoback' v-if="back_show">
      <el-tooltip content="go back" placement="top">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-goback"></use>
          </svg>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
  export default{
    name:'goback',
    data(){
      return{
        back_show:false

      }
    },
    methods:{
      gotoback(){
        document.body.scrollTop=document.documentElement.scrollTop=0;
      },
      scroll(){
        //var height_w=$(window).height()/3;
        (window.pageYOffset>200)?this.back_show=true : this.back_show=false

        //console.log(height_w);
      },



    },
    mounted(){
      window.addEventListener('scroll', this.scroll)
    }
  }
</script>
<style>
.go_back{position: fixed;bottom: 40px;right: 20px;width: 40px;height: 40px;color: #4a4a4a;};
.go_back:hover{color: rgb(218, 89, 89);}

</style>
