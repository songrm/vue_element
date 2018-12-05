<template>
  <div>
    <topmz />
    <swiper />
    <footone />
    <!-- <component :is="item.component"  v-for="item in allComponents"></component> -->
  </div>
</template>
<script>
import topmz from '@/components/menu/topmenu.vue'
import swiper from '@/components/menu/swiper.vue'
import footone from '@/components/menu/footone.vue'
export default {
  name: 'Home',
  components: { topmz, swiper, footone },
  data() {
    return {
      menu_data: []
    }
  },
  methods: {

  }

}
</script>
