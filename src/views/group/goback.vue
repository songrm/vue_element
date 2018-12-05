<template>
  <div class="">
    <div class="lable martop20">
      返回顶部
    </div>
    <div
      class="martop20"
      style="height:400px;"
    >
      以下为 占位
    </div>
    <div
      class="martop20"
      style="height:400px;"
    >
      以下为 占位
    </div>
    <div
      class="martop20"
      style="height:400px;"
    >
      以下为 占位
    </div>
    <div
      v-if="back_show"
      class="go_back"
      @click="gotoback"
    >
      <el-tooltip
        content="go back"
        placement="top"
      >
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-goback" />
        </svg>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Goback',
  data() {
    return {
      back_show: false

    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    gotoback() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
    scroll() {
      (window.pageYOffset > 200) ? this.back_show = true : this.back_show = false
    }
  }

}
</script>
<style>
.go_back {
  position: fixed;
  bottom: 40px;
  right: 20px;
  width: 40px;
  height: 40px;
  color: #4a4a4a;
}
.go_back:hover {
  color: rgb(218, 89, 89);
}
</style>
