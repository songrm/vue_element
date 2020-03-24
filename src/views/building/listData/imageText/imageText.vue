<template>
  <div class="imageText-wrap">
    <div class="list">
      <div
        :class="
          list.style.imgPosition === 'top' ? 'imageText' : 'imageTextleft'
        "
        :style="{ borderRadius: list.style.borderRadius }"
      >
        <div class="image">
          <img src="https://img.tebiemiao.cn/1575256142702.jpg" />
        </div>
        <div class="text">
          <h1 class="textTitle">标题</h1>
          <p class="textDec">这里是描述</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// import { Getter, Action } from "vuex-class"
import { ImageTextData } from './imageText.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class imageText extends Vue {
  // Getter
  // @Getter imageText.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ImageTextData = {
    pageName: '图文'
  }

  @Prop() list!: {}

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
// @import './imageText.scss'
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.imageText {
  overflow: hidden;

  .image {
    width: 170px;
    height: 170px;
    background-color: #f1f1f1;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
  .text {
    padding: 10px;
    .textTitle {
      font-size: 15px;
      margin: 0px;
      padding: 0px;
    }
    .textDec {
      font-size: 13px;
      margin: 0px;
      padding: 0px;
    }
  }
}
.imageTextleft {
  overflow: hidden;
  display: flex;
  width: 100%;
  margin: 20px;
  border-bottom: #f1f1f1 1px dotted;

  .image {
    width: 160px;
    height: 160px;
    background-color: #f1f1f1;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
  .text {
    padding: 10px;
    .textTitle {
      font-size: 15px;
      margin: 0px;
      padding: 0px;
    }
    .textDec {
      font-size: 13px;
      margin: 0px;
      padding: 0px;
    }
  }
}
</style>
