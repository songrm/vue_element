<template>
  <section class="AppMain">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
// @Component
// export default class AppMain extends Vue{
//   // 计算属性
//     get key () {
//      return this.$route.path
//     }
// }
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return 'this.$store.state.tagsView.cachedViews'
    },
    key() {
      return this.$route.path
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.AppMain {
  // padding: 20px;
  // background-color: #f7fffd;
}
</style>
