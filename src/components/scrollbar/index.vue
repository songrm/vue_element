<template>
  <div class='scroll-container' ref="scrollContainer" @mousewheel="handleScroll">
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  const delta=15;

  export default{
    name:'scrollbar',
    data(){
      return{
        top:0,
        show_fe:true
      }
    },
    methods:{
      handleScroll(e){
        // e.preventDefault()
        // const $container=this.$refs.scrollContainer
        // const $containerHeight=$container.offsetHeight
        // const $wrapper=this.$refs.scrollWrapper
        // const $wrapperHeight=$wrapper.offsetHeight
        // console.log('$containerHeight='+$containerHeight)
        // console.log('$wrapperHeight='+$wrapperHeight)
        // var juwe=-($wrapperHeight - $containerHeight)
        // console.log('jisuan='+juwe)
        // if(e.wheelDelta>0){
        //   this.top=Math.min(0,this.top+e.wheelDelta)
        // }else {
        //   if($containerHeight < $wrapperHeight){
        //     if(this.top<=-($wrapperHeight - $containerHeight)){
        //       console.log(1);
        //       this.top=this.top
        //     }else {
        //       console.log(this.top)
        //       this.top=Math.max(this.top + e.wheelDelta, $containerHeight - $wrapperHeight - delta)
        //     }
        //   }else {
        //     this.top=0;
        //   }
        // }

      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-container{position: relative;width: 200px;background-color: #272c32;}
.scroll-wrapper{position: fixed; top: 0px;left: 0px;bottom: 0px;overflow: auto;background-color: #272c32;}
</style>
