<template>
  <div class="article">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="18" :lg="18" class="marbottom20">
        <el-card class="box-card">
          <div class="bolg" v-for="des in bolg" :key="des">
            <p class="b_title">{{ des.title }}</p>
            <div class="c_title" v-html="des._context">
              <!-- {{des._context}} -->
            </div>
            <div>
              <a class="b_tag">{{ des._type }}</a>
              <a class="b_tag">{{ des._lable }}</a>
              <span class="b_time">{{ des._author }}·{{ des._date }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6">
        <el-card class="box-card marbottom20">
          <div slot="header" class="clearfix">
            <span>搜索</span>
          </div>
          <el-input placeholder="输入搜索条件"> </el-input>
        </el-card>
        <el-card class="box-card marbottom20">
          <div slot="header" class="clearfix">
            <span>标签</span>
          </div>
          <div class="lable_f">
            <el-tag
              v-for="tag in bolg"
              :type="tag._lable | label_e"
              :key="tag"
              >{{ tag._lable }}</el-tag
            >
          </div>
        </el-card>
        <el-card class="box-card marbottom20">
          <div slot="header" class="clearfix">
            <span>最热文章</span>
          </div>
          <div class="ark_list_m">
            <a href="javascript:;" v-for="tag in bolg" :key="tag">{{
              tag._name
            }}</a>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "bolg",
  data() {
    return {
      bolg: ""
    };
  },
  methods: {
    res_b() {
      var self = this;
      this.$axios.get("/articlelist").then(function(response) {
        self.bolg = response.data.data;
      });
    }
  },
  created() {
    this.res_b();
  },
  filters: {
    label_e(a) {
      const bol = {
        重要: "success",
        一般: "info",
        删除: "danger"
      };
      return bol[a];
    }
  }
};
</script>
<style lang="scss">
@import "article.scss";
</style>
