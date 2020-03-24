<template>
  <PageHeader>
    <h3>上传图片插件</h3>
    <el-button type="primary" @click="toggleShow">上传图片</el-button>

    <myUpload
      field="img"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :width="300"
      :height="300"
      url="/upload"
      :params="params"
      :headers="headers"
      img-format="png"
    />
    <img :src="imgDataUrl" />

    <h3>定时弹出消息</h3>
    <ul>
      <li
        v-for="dl in dataList"
        :key="dl.id"
        :class="Number(k) === dl.id ? 'a m' : 'b m'"
      >
        {{ dl.name }}
      </li>
    </ul>
  </PageHeader>
</template>

<script>
import myUpload from './image/index'
// import index2 from './image/index2'
export default {
  name: 'design',
  components: {
    myUpload
  },
  data() {
    return {
      show: false,
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      },
      imgDataUrl: '',
      k: 1,
      dataList: [
        { name: 'a1', id: 1 },
        { name: 'a2', id: 2 },
        { name: 'a3', id: 3 },
        { name: 'a4', id: 4 },
        { name: 'a5', id: 5 },
        { name: 'a6', id: 6 }
      ]
    }
  },
  created() {
    // setInterval(this.setTime(), 100)
    this.setTime(1)
  },
  methods: {
    setTime(m) {
      console.log(m, '====')

      this.k = m > this.dataList.length ? 1 : m
      return setTimeout(() => {
        this.setTime(this.k + 1)
      }, 3000)
    },
    toggleShow() {
      this.show = !this.show
    },
    cropSuccess(imgDataUrl, field) {
      console.log('-------- crop success --------')
      this.imgDataUrl = imgDataUrl
    },
    cropUploadSuccess(jsonData, field) {
      console.log('-------- upload success --------')
      console.log(jsonData)
      console.log('field: ' + field)
    },
    cropUploadFail(status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.a {
  color: #fff;
  background-color: rgb(75, 75, 75);
  border-radius: 4px;
  height: 0;
}

.m {
  transition: all 0.3s;
  width: 100px;
  padding: 0 10px;
  line-height: 30px;
  margin-bottom: 0 !important;
  height: 30px;
}

.b {
  height: 0;
  overflow: hidden;
  margin-bottom: -5px;
  // display: none
}
</style>
