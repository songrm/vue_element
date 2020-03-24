<template>
  <div class="imageListAttribute-wrap">
    <h1>{{ data.pageName }}</h1>

    {{ imageListData }}
    <el-form
      :inline="true"
      v-for="(eleImg, index) in imageListData.list"
      label-position="top"
      :model="eleImg"
      class="demo-form-inline"
      :key="index"
    >
      <el-form-item label="上传图片">
        <el-input
          v-model="eleImg.url"
          placeholder="标题"
          :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item label="页面跳转">
        <el-input
          v-model="eleImg.jumpContent"
          placeholder="编辑页面跳转"
        ></el-input>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="addImg">添加</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
// import { Getter, Action } from "vuex-class"
import { ImageListAttributeData } from './imageListAttribute.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class imageListAttribute extends Vue {
  // Getter
  // @Getter imageListAttribute.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ImageListAttributeData = {
    pageName: 'imageListAttribute'
  }

  @Prop() imageListData!: {}
  created() {
    //
  }

  @Emit('addImg')
  addImg() {
    // 添加图片

    return this.imageListData
  }
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
}
</script>

<style scoped lang="scss">
// @import './imageListAttribute.scss'
.imageListAttribute-wrap {
  .demo-form-inline {
    padding: 20px;
    border: 1px solid #f0f0f0;
    margin-bottom: 20px;
  }
}
</style>
