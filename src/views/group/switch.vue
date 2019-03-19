<template>
  <div class="">
    <el-alert
      title="switch开关 表示两种相互对立的状态间的切换，多用于触发「开/关」。"
      type="success"
      class="martop20"
    />
    <el-row class="martop20">
      <el-col :span="8">
        <div class="anniu">
          <el-switch
            v-model="value1"
            active-color="#13ce66"
            inactive-color="#999"
          />
        </div>
        <div class="anniu">
          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费"
          />
        </div>
        <div class="anniu">
          <p style="color:#999;font-size:13px;margin-bottom:10px;">禁用状态</p>
          <el-switch
            v-model="value3"
            active-color="#13ce66"
            inactive-color="#ff4949"
            disabled
          />
        </div>
      </el-col>
    </el-row>
    <el-alert
      title="Radio 单选框 在一组备选项中进行单选"
      type="success"
      class="martop20"
    />
    <el-row
      :gutter="20"
      class="martop20"
    >
      <el-col :span="8">
        <div class="">
          <p style="color:#999;font-size:13px;margin-bottom:10px;">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器</p>
          <el-radio
            v-model="radio"
            label="1"
          >备选项</el-radio>
          <el-radio
            v-model="radio"
            label="2"
          >备选项</el-radio>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="">
          <p style="color:#999;font-size:13px;margin-bottom:10px;">禁用状态</p>
          <el-radio
            v-model="radio1"
            disabled
            label="1"
          >备选项</el-radio>
          <el-radio
            v-model="radio1"
            disabled
            label="选中且禁用"
          >备选项</el-radio>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="">
          <p style="color:#999;font-size:13px;margin-bottom:10px;">单选组</p>
          <el-radio-group v-model="radio2">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        </div>
      </el-col>
    </el-row>
    <el-alert
      title="Checkbox 一组备选项中进行多选"
      type="success"
      class="martop20"
      style="margin-top:20px;"
    />
    <el-row
      :gutter="20"
      class="martop20"
    >
      <el-col :span="8">
        <div class="">
          <el-checkbox v-model="checked">备选项</el-checkbox>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="">
          <p style="color:#999;font-size:13px;margin-bottom:10px;">禁用状态</p>
          <el-checkbox
            v-model="checked1"
            disabled
          >备选项1</el-checkbox>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="">
          <p style="color:#999;font-size:13px;margin-bottom:10px;">按钮组</p>
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"/>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox
              v-for="city in cities"
              :label="city"
              :key="city"
            >{{ city }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
    </el-row>
    <el-alert
      title="Pagination 分页"
      type="success"
      class="martop20"
      style="margin-top:20px;"
    />
    <el-row
      :gutter="20"
      class="martop20"
    >
      <el-col :span="12">
        <div class="">
          <div class="block">
            <div style="color:#999;font-size:13px;margin:20px auto;"> 当前页 {{ pagenum }}，分页个数{{ pageshow }}</div>
            <el-pagination
              :total="50"
              layout="prev, pager, next"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />

          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="">
          <div class="block">
            <div style="color:#999;font-size:13px;margin:20px auto;">大于7条显示</div>
            <el-pagination
              :total="100"
              background
              layout="prev, pager, next"
            />
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div style="color:#999;font-size:13px;margin:20px auto;">完整功能</div>
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          :total="400"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />

      </el-col>

    </el-row>

  </div>
</template>
<script>
export default {
  name: 'Switch',
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      radio: '1',
      radio2: '3',
      radio1: '选中且禁用',
      checked: true,
      checked1: true,
      checkAll: false,
      isIndeterminate: true,
      cities: ['上海', '北京', '深圳'],
      checkedCities: ['上海'],
      pagenum: '',
      pageshow: '',
      currentPage4: 1
    }
  },
  methods: {
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length

      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleCheckAllChange(val) {
      this.checkedCities = val
      this.isIndeterminate = false
    },
    handleSizeChange(val) {
      this.pageshow = val
      console.log(`每页 ${val} 条`)
      // console.log(val);
    },
    handleCurrentChange(val) {
      this.pagenum = val
      console.log(`当前页: ${val}`)
      // console.log(val);
    }

  }
}
</script>
<style lang="scss">
.anniu {
  margin: 20px auto;
}
</style>
