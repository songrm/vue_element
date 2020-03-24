<template>
  <div class="foot_one">
    <span v-for="(qd, index) in fore" :key="index" class="nv_body_s">
      {{ qd._record }}{{ qd._copyright }}
    </span>
    <!-- {{fore}}
    <h1 @click="menu_fr()">点击我====</h1> -->
  </div>
</template>
<script>
import { footList } from '@/api/index'
export default {
  name: 'Footone',
  data() {
    return {
      fore: [],
      copy: ''
    }
  },
  created() {
    this.menu_fr()
  },
  methods: {
    async menu_fr() {
      const { data } = await footList()
      // console.log('1212' + data)
      this.fore = data
    }
  }
}
</script>
<style lang="scss">
.foot_one {
  padding: 20px;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
  border-top: 1px solid #ccc;
}
</style>
