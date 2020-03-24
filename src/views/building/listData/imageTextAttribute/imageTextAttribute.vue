<template>
  <div class="imageTextListAttribute-wrap">
    {{ data.pageName }}
    <!-- {
    id: `${++id}`,
    name: '图文',
    type: 'imageText', // 图文
    hasMargin: false, // 是否有边距
    isGoodsList:false, // 是否导入商品
    goodsListData:[], // 商品列表
    style:{
      imgPosition: 'top', // top, left
      borderRadius: 0,
      textPosition: 'center'
    },
    styleList:{
      imgPosition: {top,left},
      textPosition: {left, center},
    }
  }, -->

    <el-form
      :inline="true"
      label-position="top"
      :model="imageTextData"
      class="demo-form-inline"
    >
      <el-form-item label="导入商品(默认为true)">
        <el-button type="primary" @click="leading">导入商品</el-button>
        <!-- <el-input v-model="imageTextData.isGoodsList" placeholder="默认值 true/false"></el-input> -->
      </el-form-item>
      <el-form-item label="导入商品">
        true：显示导入商品按钮
        <!-- <el-input v-model="imageTextData.isGoodsList" placeholder="默认值 true/false"></el-input> -->
      </el-form-item>

      <h1>样式设置</h1>
      <el-form-item label="图片位置">
        <!-- <el-input v-model="imageTextData.jumpContent" placeholder="编辑页面跳转"></el-input> -->
        <el-select v-model="imageTextData.style.imgPosition" placeholder="位置">
          <el-option label="居上" value="top"></el-option>
          <el-option label="居左" value="left"></el-option>
          <!-- <el-option label="居右" value="right"></el-option> -->
        </el-select>
      </el-form-item>
      <el-form-item label="圆角">
        <el-input
          v-model="imageTextData.style.borderRadius"
          placeholder="圆角"
        ></el-input>
      </el-form-item>
      <el-form-item label="文字位置">
        <el-select
          v-model="imageTextData.style.textPosition"
          placeholder="位置"
        >
          <el-option label="居左" value="left"></el-option>
          <el-option label="居中" value="center"></el-option>
        </el-select>
        <!-- <el-input v-model="imageTextData.jumpContent" placeholder="编辑页面跳转"></el-input> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
// import { Getter, Action } from "vuex-class"
import { ImageTextListAttributeData } from './imageTextListAttribute.interface'
import demoData from './demo'

@Component({})
export default class imageTextListAttribute extends Vue {
  // data
  data: ImageTextListAttributeData = {
    pageName: '图文'
  }

  @Prop() imageTextData!: {
    goodsListData: any
  }

  @Emit('onSubmit')
  onSubmit() {
    return this.imageTextData
  }

  leading() {
    // 导入商品
    this.imageTextData.goodsListData = demoData
  }

  created() {
    //
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
// @import './imageTextListAttribute.scss'
.imageTextListAttribute {
}
</style>
