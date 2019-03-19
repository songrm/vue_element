<template>
  <div>
    <el-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange">
      <!--选择-->
      <el-table-column
        v-if="hasSelection"
        type="selection"
        width="55"/>
      <!--序号-->
      <el-table-column
        v-if="hasIndex"
        type="index"
        width="55"/>

      <!--数据源-->
      <el-table-column
        v-for="column in tableLable"
        v-if="column.isShow"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"/>
      <!--操作-->
      <slot name="handle-column"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    // 是否可以选择
    hasSelection: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    // 是否有序列项
    hasIndex: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    // 这是相应的字段展示
    tableLable: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 这是数据源
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    }

  },
  data() {
    return {

    }
  },
  methods: {
    // 将选中的行发送到父组件
    handleSelectionChange(val) {
      const selectionArr = []

      val.forEach(function(el) {
        selectionArr.push(el)
      })
      this.$emit('commitSelection', selectionArr)
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
  .table{

  }
</style>
