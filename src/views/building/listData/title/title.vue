<template>
  <div class="title-wrap" :style="{ textAlign: list.textAlign }">
    {{ list.content }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// import { Getter, Action } from "vuex-class"
import { TitleData } from './title.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class title extends Vue {
  // Getter
  // @Getter title.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: TitleData = {
    pageName: 'title'
  }

  @Prop() private list!: {}

  created() {
    //
  }
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
}
</script>

<style scoped lang="scss">
// @import './title.scss'
.title-wrap {
  min-height: 23px;
  line-height: 23px;
  padding: 20px;
}
</style>
