<template>
  <div class="nv_body">
    <span style="font-size:25px;padding: 0px 30px">logo</span>
    <span v-for="(qd, index) in menu_data" :key="index" class="nv_body_s">
      {{ qd._title }}
    </span>
  </div>
</template>
<script>
import { menulist } from '@/api/index'
export default {
  name: 'Topmz',
  data() {
    return {
      menu_data: []
    }
  },
  created() {
    this.menu_fr()
  },
  methods: {
    async menu_fr() {
      const { data } = await menulist()
      this.menu_data = data
      // var self = this;

      // this.$axios.get("/menulist").then(function(response) {
      //   self.menu_data = response.data.data;

      // });
    }
  }
}
</script>
<style lang="scss">
.nv_body {
  height: 100px;
  line-height: 100px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  .nv_body_s {
    display: inline-block;
    padding: 0px 15px;
    vertical-align: top;
  }
  .nv_body_s:hover {
    cursor: pointer;
    background-color: #cc2525;
    color: #fff;
  }
}
</style>
