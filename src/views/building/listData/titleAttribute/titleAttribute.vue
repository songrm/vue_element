<template>
  <div class="titleAttribute-wrap">
    <!-- textAlign:'center',
    content: '这里是标题' -->
    <h1>{{ data.pageName }}</h1>

    <el-form
      :inline="true"
      label-position="top"
      :model="titleData"
      class="demo-form-inline"
    >
      <el-form-item label="标题">
        <el-input v-model="titleData.content" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="位置">
        <el-select v-model="titleData.textAlign" placeholder="位置">
          <el-option label="居左" value="left"></el-option>
          <el-option label="居中" value="center"></el-option>
          <el-option label="居右" value="right"></el-option>
        </el-select>
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
import { TitleAttributeData } from './titleAttribute.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class titleAttribute extends Vue {
  // Getter
  // @Getter titleAttribute.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: TitleAttributeData = {
    pageName: '标题'
  }

  @Prop() titleData!: {
    content: ''
    textAlign: ''
  }

  created() {
    //
  }
  activated() {
    //
  }

  @Emit('onSubmit')
  onSubmit() {
    console.log(this.titleData, 'titleDatatitleData')
    return this.titleData
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
// @import './titleAttribute.scss'
.titleAttribute {
}
</style>
