<template>
  <el-main>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view :key></router-view>
      </keep-alive>
    </transition>
  </el-main>
</template>
<script type="text/javascript">
export default {
  name: "appMain",
  data() {
    return {
      seh: true
    };
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  }
};
</script>
