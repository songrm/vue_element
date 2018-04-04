<template>
  <div>
    <topmz></topmz>
    <swiper></swiper>
    <!-- <component :is="item.component"  v-for="item in allComponents"></component> -->
  </div>
</template>
<script>
import topmz from '@/components/menu/topmenu.vue';
import swiper from '@/components/menu/swiper.vue';
export default{
    name:"home",
    data(){
      return{
        menu_data:[]
      }
    },
    methods:{

    },
    components:{topmz,swiper},

}
</script>
