<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :width="width"
    :before-close="handleClose"
  >
    <div>
      <slot name="content" />
    </div>

    <span class="dialog-footer">
      <slot name="footer" />
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'dialogTck',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClose() {
      this.$emit('hide')

      // this.$emit('update:dialogVisible', false)
    },
    handleSure() {
      this.$emit('handleSure', this.formData)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dialog-footer {
  text-align: right;
  margin-top: 20px;
  display: block;
}
</style>
