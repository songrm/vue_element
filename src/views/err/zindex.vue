<template>
  <el-card class='box-card mar20'>
    <!-- <div>
      <Table>
        <h1 slot='handleColumn' name='handleColumn'>默认header</h1>
      </Table>
    </div> -->

    <div class="zindex">
      <Table
      class="tab_box"
      :isLoading="listLoading"
      :tableData="hotelList"
      hasIndex='true'
      :pageSize="listQuery.pageSize"
      :pageNumber="listQuery.pageNumber"
      :tableLable="[
        {label: '名称', prop: 'name'},
        {label: '签约时间', prop: 'time'},
        ]">

      <el-table-column slot='handle-column' name='handle-column' label="操作">
        <template slot-scope="scope">

          <el-button  type="text"  size="small">操作按钮</el-button>
        </template>
      </el-table-column>
    </Table>
    </div>
  </el-card>
</template>

<script>
import Table from 'zindexme'
export default {
  name: 'zindex',
  components: {
   Table
  },
  data() {
    return {
      hotelList:[
        {name:'名称----',time:'2019-09-09'}
      ],
      listLoading: false,
      listQuery:{
        pageSize:1,
        pageNumber:20
      },
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
  .zindex{

  }
</style>
