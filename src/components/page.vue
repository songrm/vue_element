<template>
  <el-row :gutter="20">
    <el-col :span="20">
      <h1>分页</h1>
      总条数={{ allpage }}； 每页显示条数={{ showItem }}
      <ul class="pagination">
        <li>
          <a
            v-show="curr != 1"
            href="javascript:;"
            @click="curr-- && go_page(curr)"
            >上一页</a
          >
        </li>
        <li
          v-for="(page, index) in dataPage"
          :class="{ active: curr === page }"
          :key="index"
          @click="go_page(page)"
        >
          <a>{{ page }}</a>
        </li>
        <li
          v-show="zhy != curr && allpage != 0"
          @click="curr++ && go_page(curr)"
        >
          <a href="javascript:;">下一页</a>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "Page",
  props: ["showItem", "allpage"],
  data() {
    return {
      curr: 1,
      zhy: 0
      // item:5
    };
  },
  computed: {
    dataPage: function() {
      var pages = [];
      // var i=Math.min(this.showItem,this.allpage);
      var i = Math.ceil(this.allpage / this.showItem);

      while (i) {
        pages.unshift(i--);
      }
      this.zhy = pages.length;
      return pages;
    }
  },
  methods: {
    go_page(n) {
      this.curr = n;
      this.$emit("page-num", this.curr);
    }
  }
};
</script>
<style type="text/css">
.pagination {
  position: relative;
  margin: 0px;
  padding: 0px;
}
.pagination li {
  display: inline-block;
  margin: 0 5px;
}
.pagination li a {
  padding: 5px 10px;
  display: inline-block;
  border: 1px solid #d8dce5;
  background: #fff;
  color: #5a5e66;
  font-size: 12px;
}
.pagination li a:hover {
  background: #eee;
}
.pagination li.active a {
  background: #409eff;
  color: #fff;
}
</style>
