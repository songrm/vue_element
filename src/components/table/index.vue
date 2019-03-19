<template>
  <div>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span slot="label">tabledata</span>
      </div>

      <el-table :data="tabledata">
        <el-table-column
          prop="date"
          label="date"
        />
        <el-table-column
          prop="name"
          label="Manager"
        />
        <el-table-column
          prop="address"
          label="Project"
        />
        <el-table-column
          prop="status"
          label="Progress"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status | statusfilter"
              size="mini"
            >{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="prec"
          label="Progress"
        >
          <template slot-scope="scope">
            <el-progress
              :stroke-width="8"
              :percentage="scope.row.prec"
            />
          </template>
        </el-table-column>
      </el-table>

    </el-card>

    <!-- https://segmentfault.com/q/1010000009130479 -->

  </div>
</template>
<script>
const h_tables = [
  { date: '2016-05-03', name: '王小虎', address: 'Facebook', prec: 13, status: 'progress' },
  { date: '2016-05-03', name: '王小虎', address: 'Google', prec: 93, status: 'deleted' },
  { date: '2016-05-02', name: '王小虎', address: 'Twitter', prec: 100, status: 'completed' }
]

export default {
  name: 'Htable',
  filters: {
    statusfilter(status) {
      const statusMap = {
        progress: 'success',
        completed: 'gray',
        deleted: 'danger'
      }

      return statusMap[status]
    }
  },
  data() {
    return {
      tabledata: h_tables
    }
  }

}
</script>
