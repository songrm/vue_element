<template>
  <div class="article">
    <el-row :gutter="20">
      <el-col
        :sm="24"
        :md="18"
      >
        <el-card class="box-card">
          <div class="art_top">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-input
                  class=""
                  size="medium"
                  placeholder="请输入搜索条件"
                />
              </el-col>
              <el-col :span="6">
                <el-input
                  class=""
                  size="medium"
                  placeholder="请输入搜索条件"
                />
              </el-col>
              <el-col :span="8">
                <el-button
                  type="primary"
                  size="medium"
                  @click="spus"
                >搜索</el-button>
              </el-col>
            </el-row>
          </div>
          <el-table
            :data="article_data"
            style="width:100%"
            border
            class="martop20"
          >
            <el-table-column
              prop="_name"
              label="标题"
            />
            <el-table-column
              prop="_type"
              label="类型"
            />
            <el-table-column label="标签">
              <template slot-scope="scope">
                <el-tag :type="scope.row._lable | label_e">{{ scope.row._lable }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="_date"
              label="时间"
            />
            <el-table-column
              fixed="right"
              label="操作"
              width="150"
            >
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  @click="handleClick(scope.row)"
                >查看</el-button>
                <el-button
                  type="text"
                  size="small"
                >编辑</el-button>
                <el-button
                  type="text"
                  size="small"
                  @click="delet_art(scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- <Table :tableData="tableData" :tableLable="columns">
          <el-table-column slot="handle-column">
            <template slot-scope="scope">
              <span @cliack='edit'>编辑</span>
            </template>
          </el-table-column>
        </Table> -->

          <span @click="dianji"> 按钮</span>

          <Table
            :tableData="tableData"
            :tableLable="columns"
            :tableOption="{
              label:'操作',
              option:[{
                label:'编辑',
                methods:'edit'
              }]
            }"
          />

        </el-card>
      </el-col>
      <el-col
        :sm="24"
        :md="6"
      >
        <el-card class="box-card">
          <div
            slot="header"
            class="clearfix"
          >
            <span>标签</span>
          </div>
          <div class="lable_f">
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
          </div>
        </el-card>
        <el-card class="box-card martop20">
          <div
            slot="header"
            class="clearfix"
          >
            <span>排行榜</span>
          </div>
          <div class="ark_list_m">
            <a
              v-for="tit in article_data"
              :key="tit"
              href="javascript:;"
            >{{ tit._name }}</a>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Table from './tcTable'
// const data = [
//   { 'title': 'today home1', 'type': 'java', 'lable': '重要', 'time': '2012-09-08' },
//   { 'title': 'today home2', 'type': 'java', 'lable': '一般', 'time': '2012-09-08' },
//   { 'title': 'today home3', 'type': 'java', 'lable': '删除', 'time': '2012-09-08' }
// ]

export default {
  name: 'Article',
  filters: {
    label_e(a) {
      const lable = {
        重要: 'success',
        一般: 'warning',
        删除: 'danger'
      }

      return lable[a]
    }
  },
  components: { Table },
  data() {
    return {
      article_data: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      columns: [
        {
          isShow: true, // <Boolean> 是否展示
          prop: 'name', // <String>  对应属性名
          label: '姓名' // <String>   表头标签
        },
        {
          isShow: true, // <Boolean> 是否展示
          prop: 'date', // <String>  对应属性名
          label: '日期' // <String>   表头标签
        },
        {
          isShow: true, // <Boolean> 是否展示
          prop: 'org', // <String>  对应属性名
          label: '单位' // <String>   表头标签
        },
        {
          isShow: false, // <Boolean> 是否展示
          prop: 'id', // <String>  对应属性名
          label: '身份证' // <String>   表头标签
        }
      ]

    }
  },
  watch: {
    '$route': 'res_b'
  },
  created() {
    this.res_b()
  },
  methods: {
    handleClick(obj) {
      // 查看事件
      this.$router.push({
        path: '/group/bolg_list',
        name: 'bolg_list',
        params: obj,
        query: {
          id: obj._id
        }
      })
    },
    dianji() {
      const dataw = [
        {
          'id': 2,
          'parentId': -1,
          'name': '看 板',
          'title': '看 板',
          'code': 'firmLookPlate',
          'path': '/firmLookPlate',
          'icon': 'shouye',
          'seq': 1,
          'description': '这儿是描述',
          'type': '菜单',
          'metadata': {
            'path': '/dashboard',
            'name': 'Dashboard'
          },
          'deleted': false,
          'children': [
            {
              'id': 7,
              'parentId': 2,
              'name': '企业看板',
              'title': '看板',
              'code': 'firmLookPlateIndex',
              'path': '/firmLookPlate/index',
              'icon': 'shouye',
              'seq': 1,
              'description': '企业看板',
              'type': '菜单',
              'metadata': null,
              'deleted': false
            }
          ]
        }, {
          'id': 8,
          'parentId': -1,
          'name': '商品管理',
          'title': '商品管理',
          'code': '/saleManagement/index',
          'path': '/saleManagement/index',
          'icon': 'tubiaoshangpin',
          'seq': 2,
          'description': '在售商品管理',
          'type': '菜单',
          'metadata': null,
          'deleted': false
        }
      ]
      const zhi = dataw.filter(item => {
        return item.path === '/firmLookPlate/index'
      })

      console.log(zhi)
    },
    res_b() {
      // 加载列表事件
      const self = this

      this.$axios.get('/articlelist').then(res => {
        self.article_data = res.data.data
      })
      this.$axios.get('/auth/token').then(res => {
        self.article_data = res.data.data
      })
    },
    spus() {
      // 搜索事件
      const params = {
        _id: '001'
      }

      this.$axios.get('/articleedit', { params: params }).then(res => {
        console.log(res.data)
      })
    },
    delet_art(obj) {
      // 删除事件
      console.log('删除===' + obj)
      var params = {
        _id: obj._id
      }

      var self = this

      this.$axios.get('/articledel', { params: params }).then(res => {
        console.log(res.data)
        if (res.data.success === 1) {
          // 删除成功
          self.res_b()
          self.$message({
            message: '删除成功',
            type: 'success'
          })
        } else {
          // 删除失败
          self.$message.error('删除失败，请检查错误信息')
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "article.scss";
</style>
