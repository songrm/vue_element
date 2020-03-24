<template>
  <el-table
    ref="multipleTable"
    id="el_table"
    border
    element-loading-text="给我一点时间"
    :data="tableData"
    @selection-change="handleSelectionChange"
    @select-all="handleSelectionAll"
    fit
    @sort-change="sortChange"
    v-loading="isloading"
    highlight-current-row
    :row-key="handlerowKey"
    :height="tableHeight"
    style="width: 100%;"
  >
    <!-- 拖拽 -->
    <slot name="drag" />
    <!-- 前面tab -->
    <slot name="front-table" />
    <!--选择-->
    <el-table-column
      v-if="hasSelection"
      type="selection"
      width="55"
      :reserve-selection="reserveSelection"
    />
    <slot name="selection"></slot>
    <!--序号-->
    <el-table-column
      align="center"
      v-if="hasIndex"
      label="序号"
      type="index"
      :index="increment"
      width="55"
    />
    <!--数据源-->
    <template v-for="(column, index) in columns">
      <slot
        v-if="column.slotIndex !== undefined"
        :name="`column${column.slotIndex}`"
      />
      <el-table-column
        v-else
        :prop="column.prop"
        :sortable="column.sortable"
        align="center"
        :key="index"
        :label="column.label"
        :width="column.width"
      >
        <template slot-scope="scope">
          <template v-if="column.formatter">
            <span v-html="column.formatter(scope.row, column, filters)"></span>
          </template>
          <template v-else-if="column.time">
            {{ scope.row[column.prop] | parseTime(column.parseTime, '-') }}
          </template>
          <template v-else-if="column.parseTime">
            {{
              scope.row[column.prop]
                | parseTime(
                  typeof column.parseTime === 'string'
                    ? column.parseTime
                    : '{y}-{m}-{d} {h}:{i}:{s}',
                  '-'
                )
            }}
          </template>
          <template v-else-if="column.location">
            <!-- 地区 -->
            <div id="app" class="cascaderClass">
              <Location :val="scope.row[column.prop]" :is-disabled="true" />
            </div>
          </template>
          <template v-else-if="column.img">
            <img class="img_box" :src="scope.row[column.prop]" />
          </template>
          <template v-else-if="column.switch">
            <el-switch
              class="tab_switch"
              v-model="scope.row[column.prop]"
              @change="switchStatus(scope.row)"
              :disabled="
                !column.switchDisabled
                  ? false
                  : column.switchDisabled(scope.row, column)
              "
              :active-text="scope.row[column.prop] ? '开' : '关'"
              active-color="#13ce66"
            />
          </template>
          <template v-else>
            {{ scope.row[column.prop] | statusFilter }}
          </template>
        </template>
      </el-table-column>
    </template>
    <!--操作-->
    <slot name="handle-column"></slot>
    <slot />
  </el-table>
</template>

<script>
import Location from '@/components/Location'
import { deepClone } from '@/utils'
import * as filters from '@/filters'
export default {
  name: 'Table',
  components: {
    Location
  },
  props: {
    // 是否可以选择
    hasSelection: {
      type: Boolean,
      default: false
    },
    // 是否选中
    isSelection: {
      type: Object,
      default: () => ({
        isShow: false,
        data: []
      })
    },
    tableHeight: {
      // type: Number | String,
      default: window.innerHeight - 300
    },
    // 是否有序列项
    hasIndex: {
      type: Boolean,
      default: false
    },
    // 这是相应的字段展示
    tableLable: {
      type: Array,
      default: () => []
    },
    // 这是数据源
    tableData: {
      type: Array,
      default: () => []
    },
    // 自定义slot位置
    slots: {
      type: Array,
      default: () => []
    },
    // 加载中
    isloading: {
      type: Boolean
    },
    pageNumber: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    reserveSelection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      filters
    }
  },
  computed: {
    columns() {
      if (this.slots.length === 0) {
        return this.tableLable
      }
      const columns = deepClone(this.tableLable)
      this.slots.forEach(slotIndex => {
        columns.splice(slotIndex, 0, {
          slotIndex
        })
      })
      return columns
    }
  },
  filters: {
    statusFilter(status) {
      if (status === '' || status === null || status === undefined) {
        return '-'
      } else {
        return status
      }
    }
  },
  created() {
    if (this.isSelection.isShow) {
      // 默认选中
      this.select()
    }
  },
  methods: {
    getRowKeys(row) {
      return row.id
    },
    // 将选中的行发送到父组件
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange', val)
    },
    // 默认选中
    select() {
      var that = this
      that.$nextTick(() => {
        this.isSelection.data.map(data => {
          this.$refs.multipleTable.toggleRowSelection(data)
        })
      })
    },
    // 选中行
    setCurrentRow(row) {
      this.$refs.multipleTable.setCurrentRow(row)
    },
    switchStatus(val) {
      this.$emit('switchStatus', val)
    },
    handlerowKey(val) {
      return val.id
    },
    handleSelectionAll(val) {
      this.$emit('handleSelectionAll', val)
    },
    sortChange(val) {
      this.$emit('sortChange', val)
    },
    increment(index) {
      return index + 1 + (this.pageNumber - 1) * this.pageSize
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
#el_table {
  .badgeStatus {
    width: 6px;
    height: 6px;
    display: inline-block;
  }

  .statusHaving {
    background-color: #52c41a;
  }

  .statusComplete {
    background-color: #999;
  }

  .img_box {
    width: 80%;
    max-width: 60px;
    max-height: 60px;
  }

  .tab_switch {
    position: relative;
    text-align: left;

    .el-switch__label--right {
      position: absolute;
      z-index: 1;
      right: 5px;
      color: #fff;
      font-size: 12px;
      margin: 0;
    }

    &.is-checked {
      .el-switch__label--right {
        left: 6px;
      }
    }
  }

  .cascaderClass {
    .el-cascader .el-input .el-input__inner {
      text-overflow: clip;
    }
  }
}
</style>
