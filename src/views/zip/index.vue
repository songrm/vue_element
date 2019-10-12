<template>
  <div class="">
    <div class="zip">
      <el-input
        class="title_zip"
        size="medium"
        v-model="input"
        placeholder="请输入文件名称"
      ></el-input>
      <el-button
        type="primary"
        size="medium"
        @click="zip_down()"
        :loading="downloadLoading"
        >下载</el-button
      >
    </div>

    <el-table border style="width:90%" :data="tableData">
      <el-table-column label="name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="email">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column label="date">
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="address">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "zip",
  data() {
    return {
      input: "",
      downloadLoading: false,
      tableData: null
    };
  },
  methods: {
    request() {
      console.log(this.abc);

      var self = this;
      this.$axios
        .get("/ceshi/table")
        .then(function(response) {
          self.tableData = response.data.data.projects;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    zip_down() {
      this.downloadLoading = true;
      require.ensure([], () => {
        const { export_txt_to_zip } = require("@/vendor/Export2Zip");
        const tHeader = ["姓名", "email", "address"];
        const filterVal = ["name", "email", "address"];
        const list = this.tableData;
        const data = this.formatJson(filterVal, list);
        export_txt_to_zip(tHeader, data, this.input, "压缩文本");
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  },
  mounted() {},
  created() {
    this.request();
  }
};
</script>
<style>
.title_zip {
  width: 180px;
}
.zip {
  margin-bottom: 20px;
}
</style>
