<template>
  <div>
    <topmz></topmz>
    <swiper></swiper>
    <footOne></footOne>
    <!-- <component :is="item.component"  v-for="item in allComponents"></component> -->
  </div>
</template>
<script>
import topmz from '@/components/menu/topmenu.vue'
import swiper from '@/components/menu/swiper.vue'
import footOne from '@/components/menu/footone.vue'
export default {
  name: 'home',
  data() {
    return {
      menu_data: []
    }
  },
  methods: {},

  components: { topmz, swiper, footOne }
}
</script>
