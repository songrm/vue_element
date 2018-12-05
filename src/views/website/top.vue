<template>
  <div>
    <el-alert
      :closable="false"
      title="菜单导航；移动暂时不可用"
      type="error"
      description="设置头部导航，一级菜单、二级菜单；"
    />

    <el-card class="box-card martop20">
      <div
        slot="header"
        class="clearfix"
      >
        <span>菜单</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="add_menu()"
        >添加菜单</el-button>
        <el-button
          style="float: right; margin:0px 20px;padding: 3px 0"
          type="text"
          @click="look_show('topmz')"
        >预览</el-button>
      </div>
      <div class="mn_table">
        <el-row class="mn_table_th">
          <el-col :span="4">id编码</el-col>
          <el-col :span="6">菜单名称</el-col>
          <el-col :span="6">选择模版</el-col>
          <el-col :span="6">操作</el-col>
        </el-row>
        <el-row
          v-for="(qd,index) in menu_data"
          :gutter="20"
          :key="index"
          class=" mn_table_td"
        >
          <el-col :span="4">
            <el-input
              v-model="qd._id"
              :disabled="true"
              size="small"
              placeholder="请输入id;id不可重复"
            />
          </el-col>
          <el-col :span="6">
            <el-input
              v-model="qd._title"
              size="small"
              placeholder="请输入内容"
            />
          </el-col>
          <el-col :span="6">选择模版</el-col>
          <el-col :span="6">
            <div class="">
              <el-button
                type="text"
                @click="sit_menu(qd._id,qd._title)"
              >保存</el-button>
              <el-button
                type="text"
                @click="delet_menu(qd._id,qd._title)"
              >删除</el-button>
              <el-button type="text">移动</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <div style="padding: 10px; border-left: 5px solid rgb(218, 89, 89); background-color: rgb(251, 251, 251);margin-bottom:20px;">可预览</div>

    <!-- <topmz></topmz> -->
    <component
      v-for="(item, index) in allComponents"
      :is="item.component"
      :key="index"
    />
    <el-card class="box-card martop20">
      <div
        slot="header"
        class="clearfix"
      >
        <span>底部版权</span>
      </div>
      <div class="mn_table">
        <el-input
          v-model="footer_title"
          placeholder="站点描述"
        />
      </div>
      <div class="mn_table">
        <el-input
          v-model="footer_record"
          placeholder="底部版权"
        />
      </div>
      <div class="mn_table">
        <el-input
          v-model="footer_copy"
          placeholder="公安备案"
        />
      </div>
      <el-button
        type="primary"
        @click="save_e()"
      >修改</el-button>
    </el-card>
    <footone />
  </div>
</template>
<script>

import topmz from '@/components/menu/topmenu.vue'
import footone from '@/components/menu/footone.vue'
export default {
  name: 'topmenu',
  components: { topmz, footone },
  data() {
    return {
      allComponents: [],
      footer_bq: '',
      menu_data: [],
      footer_id: '1',
      footer_title: '',
      footer_copy: '',
      footer_record: ''
    }
  },
  created() {
    this.menu_fr()
  },
  methods: {
    menu_fr() {
      var self = this

      this.$axios.get('/menulist').then(function(response) {
        self.menu_data = response.data.data
        // console.log(response.data.data)
      })
    },
    save_f() {
      // 添加底部导航
      var params = {
        _id: this.footer_id,
        _title: this.footer_title,
        _copyright: this.footer_copy,
        _record: this.footer_record
      }

      this.$axios.get('/footadd', { params: params }).then(res => {
        console.log(res.data.data)
      })
    },
    save_e() {
      // 修改底部导航
      var params = {
        _id: this.footer_id,
        _title: this.footer_title,
        _copyright: this.footer_copy,
        _record: this.footer_record
      }

      this.$axios.get('/footdet', { params: params }).then(res => {
        console.log(res.data.data)
      })
    },
    look_show(name) {
      this.allComponents.splice(0, this.allComponents.length)

      this.allComponents.push({
        component: name
      })
    },
    sit_menu(num, txt) {
      var params = {
        _id: num,
        _title: txt
      }

      const self = this

      this.$axios.get('/menudet', { params: params }).then(res => {
        if (res.data.data === 'success') {
          self.$notify({
            type: 'success',
            message: '保存成功',
            duration: 2000
          })
        } else {
          self.$notify({
            type: 'error',
            message: '保存失败！！！',
            duration: 2000
          })
        }
      })
    },
    add_menu() {
      // 添加模块
      var num_xb = (this.menu_data.length + 2)

      this.menu_data.push({
        '_id': num_xb,
        '_title': ''
      })
      var params = {
        _id: num_xb,
        _title: ''
      }
      var self = this

      this.$axios.get('/menuadd', { params: params }).then(res => {
        if (res.data.data === 'success') {
          self.$notify({
            type: 'success',
            message: ' 添加成功；id 不可重复',
            duration: 2000
          })
        } else {
          self.$notify({
            type: 'error',
            message: '保存失败！！！',
            duration: 2000
          })
        }
      })
    },
    delet_menu(num, txt) {
      var self = this

      this.$axios.get('/menudelete', { params: { _id: num }}).then(res => {
        if (res.data.data === 'success') {
          self.$notify({
            type: 'success',
            message: ' 删除成功!!',
            duration: 2000
          })
          self.menu_fr() // 刷新列表
        } else {
          self.$notify({
            type: 'error',
            message: '删除失败！！！',
            duration: 2000
          })
        }
      })
    }
  }

}
</script>
<style lang="scss">
.mn_table {
  overflow: hidden;
  .mn_table_td {
    padding: 10px 0px 7px 1px;
  }
  .mn_table_th {
    background-color: #6f7e95;
    height: 40px;
    line-height: 40px;
    color: #fff;
    padding-left: 15px;
  }
}
</style>
