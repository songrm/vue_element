<template>
  <el-container :class="{'hidesider':showe}">
    <sidebar />
    <el-container class="is-vertical">
      <navbar />
      <app-main />
    </el-container>
  </el-container>
</template>
<script type='text/javascript'>
import sidebar from './sidebar'
import navbar from './navbar'
import appMain from './appMain'

export default {
  name: 'Layout',
  components: { navbar, appMain, sidebar },
  data() {
    return {}
  },

  computed: {
    showe() {
      return this.$store.state.sidebar.sbar_width
    }
  }
}
</script>
<style >
.hidesider .scroll-container,
.hidesider .el-menu {
  width: 64px !important;
}
</style>
