<template>
    <div class="toast" :style="a" v-if="isShow">
        <div class="toast-div">{{ text }}</div>
    </div>
</template>

<script>
export default{
  name:'Toast',
    data(){
        return {
            text:'内容',
            isShow:true,
            duration:1500,
            a:{
              color:'#fff',
              backgroundColor:'#000000'
            }
        }
    }
}
</script>
<style>
 .toast{
    position: fixed;

    right: 20px;

    transform: translate(-50%, 0);
    margin-top: 5rem;
    background: #000000;
    line-height: 0.7rem;
    color: #FFFFFF;
    padding: 1rem; top: 20px;width: 10em;

    border-radius: 0.2rem;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

}
</style>
