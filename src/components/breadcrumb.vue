<template>
  <div class="breadcrumb">
    <!-- {{breadcrumb}} -->
    <el-breadcrumb separator="/">
      <template v-for="a in breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }" :key="a.name">
          {{ a.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import menu from '../utils/menu'
export default {
  name: 'breadcrumb',
  data() {
    return {
      breadcrumb: null,
      title: ''
    }
  },
  computed: {
    ...mapGetters(['permission_routers', 'addRouters', 'sbar_width'])
  },
  created() {
    this.bread()
  },
  watch: {
    $route(to, from) {
      // console.log(to.path)
      this.bread()
    }
  },
  methods: {
    bread() {
      console.log(location.pathname)
      const a = [{ path: '/', name: '首页' }]
      const b = {
        path: location.pathname,
        name: menu[location.pathname]
      }
      this.title = menu[location.pathname]
      a.push(b)
      this.breadcrumb = a
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 20px;
  border: 1px solid #f1f1f1;

  .title {
    margin: 15px 0 0 0;
    padding: 0;
    color: #454545;
    font-size: 14px;
  }
}
</style>
