<template>
  <el-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible"
  >
    <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
  </el-popover>
</template>

<script>
export default {
  name: 'popoverBox',
  data() {
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// .popoverBox {
// }
</style>
