<template>
  <div class="list-wrap">
    <!-- <div class="zfz" @click="showRight">
      删除
    </div> -->
    <el-popover placement="left" trigger="manual" v-model="data.visible">
      title="标题" width="200" trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      <el-button slot="reference" @click="data.visible = !data.visible"
        >手动激活</el-button
      >
    </el-popover>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

import { ListData } from './list.interface'

@Component({})
export default class list extends Vue {
  data: ListData = {
    pageName: 'list',
    visible: true
  }
  @Prop() private listDataProp!: {}

  // @Emit('showRight')
  showRight() {
    return this.listDataProp
  }

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
// @import './list.scss'
.list-wrap {
  // position: relative;
}
.zfz {
  // position: absolute;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // top: 0;

  // &:hover{
  //   background-color: rgba(0,0,0,.3);
  //   border: 4px solid #f8c555;
  // }
}
</style>
