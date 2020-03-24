<template>
  <div class="left-wrap">
    <h2>{{ data.pageName }}</h2>

    <div class="left">
      <el-tooltip
        class="item"
        effect="dark"
        v-for="list in leftData"
        :content="list.name"
        :key="list.type"
        placement="right"
      >
        <div class="img">
          <img :src="list.url" @click="add(list.type)" />
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { LeftData } from './left.interface'
import eleData from './elementLeft'

import title from './img/title.png'
import imageList from './img/imageList.png'
import imageText from './img/imageText.png'

@Component({})
export default class left extends Vue {
  data: LeftData = {
    pageName: '组件',
    ele: { ...eleData }
  }

  @Prop() private leftData!: any[]

  created() {
    this.leftData.map(list => {
      if (list.type === 'title') {
        list.url = title
      }
      if (list.type === 'imageList') {
        list.url = imageList
      }
      if (list.type === 'imageText') {
        list.url = imageText
      }
    })
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
  @Emit('add')
  add(obj: string) {
    this.$forceUpdate()
    delete this.data.ele[obj].id
    // console.log(eleData, 'eleDataeleDataeleData')

    const data = {
      title: {
        id: 0,
        name: '标题',
        type: 'title', // 标题
        hasMargin: false, // 是否有边距
        textAlign: 'center',
        content: '这里是标题'
      },
      imageList: {
        id: 1,
        name: '图片组合',
        type: 'imageList', // 标题
        margin: 0, // 边距 默认为0
        list: [
          {
            sortId: 0, // 排序
            id: 0, // id
            url: '', // 图片路径
            text: '', // 文字描述
            jumpContent: '' // 跳转链接
          }
        ]
      },
      imageText: {
        id: 5,
        name: '图文',
        type: 'imageText', // 图文
        hasMargin: false, // 是否有边距
        isGoodsList: true, // 是否导入商品
        goodsListData: [], // 商品列表
        style: {
          imgPosition: 'top', // top, left
          borderRadius: '0',
          textPosition: 'center'
        },
        styleList: {
          imgPosition: ['top', 'left'],
          textPosition: ['left', 'center']
        }
      }
    }
    // return { ...this.data.ele[obj]}
    return { ...data[obj] }
  }
}
</script>

<style scoped lang="scss">
.left-wrap {
  text-align: center;
  background-color: #fbfcff;
  min-height: 150vh;
  border-right: 1px solid #f1f1f1;

  h2 {
    margin: 0px;
    padding: 20px;
  }

  .left {
    display: flex;
  }

  span {
    display: block;
  }
  .img {
    display: block;
    width: 80px;
    height: 80px;
    margin: 5px auto;
    border: 4px dashed rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    img {
      max-height: 100%;
    }

    &:hover {
      border: 4px dashed #dad8d8;
    }
  }
}
</style>
