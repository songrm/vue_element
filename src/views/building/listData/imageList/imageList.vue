<template>
  <div class="imgAll">
    <div class="imageList-wrap">
      <img
        alt="Computerman"
        v-for="(eleImg, index) in list.list"
        :src="eleImg.url"
        :key="index"
        class="img"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ImageListData } from './imageList.interface'
import img1 from './img/img1.png'

@Component({})
export default class imageList extends Vue {
  // data
  data: ImageListData = {
    pageName: '图片组合'
  }

  @Prop() list!: {
    list: [
      {
        sortId: number
        id: any // id
        url: string // 图片路径
        text: string // 文字描述
        jumpContent: string // 跳转链接
      }
    ]
  }
  created() {
    //
    this.list.list.map(d => {
      d.url = d.url === '' ? img1 : d.url
      return d
    })

    // console.log(this.list, 'lllll')
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
// @import './imageList.scss'
.imgAll {
  width: 375px;
  overflow: hidden;
}
.imageList-wrap {
  overflow: scroll;
  width: 1000px;
  display: flex;
  .img {
  }
}
</style>
