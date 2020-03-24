<template>
  <PageHeader>
    <div class="building">
      000
      <el-row :gutter="20">
        <!-- <el-col :span="6">
          <Left :leftData='leftData' @add='add'/>
        </el-col> -->
        <!-- <el-col :span="12">
          <div class="content" >
            <List
              v-for="(eleList, index) in elementData"
              :key='index'
              :listDataProp='eleList'
              @showRight='showRight'>
              <Title v-if="eleList.type==='title'" :list='eleList'/>
              <ImageList v-if="eleList.type==='imageList'" :list='eleList' />
              <ImageText v-if="eleList.type==='imageText'" :list='eleList' />
            </List>
          </div>
        </el-col> -->
        <!-- <el-col :span="6">
          <div class="right">
            <TitleAttribute v-if='isType==="title"' :titleData='titleData' @onSubmit='onSubmit' />
            <ImageListAttribute v-if='isType==="imageList"' :imageListData='titleData' @addImg='onSubmit'  />
            <ImageTextAttribute v-if='isType==="imageText"' :imageTextData='titleData' @onSubmit='onSubmit'  />
          </div>
        </el-col> -->
      </el-row>
    </div>
  </PageHeader>
</template>

<script>
// import Left from './components/left/left'
// import List from './components/list/list'

// import {Title,ImageList,ImageText } from './listData/index'

export default {
  name: 'build',
  components: {
    // Left,
    // List,
    // ImageList,ImageText,Title
  },
  created() {
    // console.log(Title, 'TitleTitleTitle')
  },
  data() {
    return {
      leftData: [
        { type: 'imageList', name: '图片组合', url: '' },
        { type: 'title', name: '文字', url: '' },
        // {type:'navigation',name:'导航',url:''},
        { type: 'imageText', name: '图文', url: '' }
      ],
      elementData: [],
      titleData: {},
      isType: ''
    }
  },
  methods: {
    add(obj) {
      let eleIdMax = 1
      if (this.elementData.length !== 0) {
        eleIdMax = [
          ...new Set(
            this.elementData.map(a => {
              return Number(a.id)
            })
          )
        ].reduce(function(a, b) {
          return b > a ? b : a
        })
        eleIdMax++
      }

      const m = {
        ...obj,
        id: eleIdMax
      }
      console.log(m, '===')
      this.elementData.push(m)
    },

    onSubmit(obj) {
      // 修改属性

      for (const list in this.elementData) {
        if (
          this.elementData[list].id === obj.id &&
          this.elementData[list].type === 'title'
        ) {
          console.log('title')
          this.elementData[list] = obj
          break
        }
        if (
          this.elementData[list].id === obj.id &&
          this.elementData[list].type === 'imageList'
        ) {
          console.log('这里是图片组合')

          const m = {
            sortId: 0, // 排序
            id: 0, // id
            url: '/img/img1.820dd24f.png', // 图片路径
            text: '', // 文字描述
            jumpContent: '' // 跳转链接
          }
          this.elementData[list].list.push(m)
          console.log(this.elementData[list], 'this.elementData[list]')
        }
        if (
          this.elementData[list].id === obj.id &&
          this.elementData[list].type === 'imageText'
        ) {
          // console.log('这里是图文', obj)
          this.elementData[list] = { ...obj }
          console.log('这里是图文', this.elementData)
        }
      }

      this.$forceUpdate()
      // 强制更新
    },
    showRight(obj) {
      console.log(obj, '点击了我')
      this.titleData = { ...obj }
      this.isType = obj.type
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.content {
  width: 375px;
  background-color: #fff;
  height: 100vh;
  overflow: auto;
}

.right {
  width: 200px;
}

.building {
  background-color: #fff;
  border: 1px solid #f1f1f1;
}
</style>
