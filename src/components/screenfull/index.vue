<template>
  <svg class="icon navb_i" aria-hidden="true" @click="s_full()">
      <use xlink:href="#icon-quanping"></use>
  </svg>

</template>
<script>

  export default{
    name:"screenfull",
    data(){
      return {

      }
    },
    methods:{
      s_full(){
        var docElm = document.documentElement;
          //W3C
          if (docElm.requestFullscreen) {
              docElm.requestFullscreen();
          }else if (docElm.mozRequestFullScreen) {
              docElm.mozRequestFullScreen();
          }else if (docElm.webkitRequestFullScreen) {
              docElm.webkitRequestFullScreen();
          }
      }
    }
  }
</script>
