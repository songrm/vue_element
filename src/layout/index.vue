<template>
  <el-container>
    <el-aside width="201px" style="background-color: rgb(238, 241, 246)">
      <Sidebar />
    </el-aside>
    <el-container style="display:block">
      <Navbar />
      <AppMain />
    </el-container>
  </el-container>
</template>

<script>
import AppMain from './components/appMain'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'

export default {
  name: 'layout',
  components: {
    AppMain,
    Sidebar,
    Navbar
  },
  data() {
    return {}
  }
}
</script>
