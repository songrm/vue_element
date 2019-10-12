<template>
  <div>
    <el-alert
      title="webfont"
      type="error"
      description="建议使用 阿里webfont字体；在此我只列了一些自己常用的图标。(ps:www.iconfont.cn/)"
      :closable="false"
    >
    </el-alert>
    <el-row :gutter="20">
      <el-col :span="4" v-for="icon in icon_show" :key="icon">
        <div class="icon_ew">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="icon.icon_name"></use>
          </svg>
          <h5>{{ icon.icon_name }}</h5>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const icon_data = [
  { icon_name: "#icon-shouye" },
  { icon_name: "#icon-tuodong" },
  { icon_name: "#icon-tixing" },
  { icon_name: "#icon-tuodong" },
  { icon_name: "#icon-quanxian" },
  { icon_name: "#icon-jushoucanggift" },
  { icon_name: "#icon-chanpin" },
  { icon_name: "#icon-xiugai1" },
  { icon_name: "#icon-wodehongbao" },
  { icon_name: "#icon-tishi" },
  { icon_name: "#icon-sousuo" },
  { icon_name: "#icon-shengyin" },
  { icon_name: "#icon-zip" },
  { icon_name: "#icon-naozhong" },
  { icon_name: "#icon-lianjie" },
  { icon_name: "#icon-lajixiang" },
  { icon_name: "#icon-goback" },
  { icon_name: "#icon-duihua1" },
  { icon_name: "#icon-chanpin3" },
  { icon_name: "#icon-ren2" },
  { icon_name: "#icon-h2" },
  { icon_name: "#icon-Excel" },
  { icon_name: "#icon-pifu" },
  { icon_name: "#icon-huanhuobz" },
  { icon_name: "#icon-shouye1" },
  { icon_name: "#icon-404" },
  { icon_name: "#icon-form" },
  { icon_name: "#icon-bug" },
  { icon_name: "#icon-shezhi2" }
];
export default {
  name: "icon",
  data() {
    return {
      icon_show: icon_data
    };
  }
};
</script>
<style>
.icon_ew {
  text-align: center;
  padding-top: 25px;
  margin-bottom: 25px;
}
.icon_ew h5 {
  font-weight: 400;
  font-size: 15px;
}
.icon_ew .icon {
  font-size: 18px;
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
}
.icon_ew:hover .icon {
  color: #409eff;
  font-size: 18px;
}
</style>
