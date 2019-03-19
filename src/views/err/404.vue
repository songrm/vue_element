<template>
  <div>
    <skeleton-loading>
      <h1>骨架屏</h1>
    </skeleton-loading>
    <h3>这里是404页面</h3>
    <span @click="meClick">点击我</span>
    <div
      v-for="(w,index) in roomTherr"
      :key="index"
    >
      <span @click="wf(w.check,w.leftAll,index)">leftAll={{ w.leftAll }}==={{ w.check }}</span>
    </div>
    <br>
    是否选中
    <div>{{ istrue }}</div>

    <span @click="addName">添加name</span>
    <el-table
      :data="tableData"
      style="width: 100%">

      <el-table-column
        v-for="(d,index) in data"
        :key="index"
        :prop="d.prop"
        :label="d.label"
        width="180"
      />

    </el-table>

  </div>
</template>
<script>
// import img_404 from '@/assets/404.png'
export default {
  name: 'Err',
  data() {
    return {
      // img_404
      rooms: ['1', '2', '3', '4', '5', '6'],
      roomTwo: [],
      roomTherr: [],
      istrue: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      data: [
        {
          prop: 'date',
          label: '日期'
        }
      ]

    }
  },
  methods: {
    addName() {
      this.data = [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '名字'
        }
      ]
    },
    meClick() {
      this.roomTwo = this.againGroup(this.rooms, 4)

      this.roomTherr = this.roomTwo.map((item, i) => {
        // const wewe = item.map(ie => {
        //   const fg = {
        //     'leftAll': false,
        //     check: ie
        //   }

        //   return fg
        // })
        const fg = {
          'leftAll': false,
          check: item
        }

        console.log(fg, '-----')
        return fg
      })
    },
    wf(obj, c, i) {
      if (this.roomTherr[i].leftAll) {
        // 选中
        this.roomTherr[i].leftAll = false
        obj.map(item => {
          this.istrue.map((k, i) => {
            if (k === item) {
              this.istrue.splice(i, 1)
            }
          })
        })
      } else {
        // 未选中
        this.roomTherr[i].leftAll = true
        obj.map(item => {
          this.istrue.push(item)
        })
      }

      // this.istrue.push(obj)
    },
    againGroup(data, num) {
      // 数组分组
      var result = []

      for (var i = 0, len = data.length; i < len; i += num) {
        result.push(data.slice(i, i + num))
      }

      return result
    }
  }
}
</script>
<style>
.pic-404 {
  width: 100%;
}
</style>
