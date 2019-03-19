<template>
  <el-card class="box-card mar20">
    <div class="test">
      <h1>导入excel</h1>
      <p>第二个</p>
      <input
        id="upload"
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        @change="importfxx(this)"
      >

      <el-table
        :data="accountList"
        style="width: 100%">
        <el-table-column
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.name || '无' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="年龄"
          width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.age>20">
              {{ scope.row.age || '无' }}
            </span>
            <span v-else>
              <el-input v-model="scope.row.age" placeholder="请输入内容"/>
            </span>
          </template>
        </el-table-column>
        <el-table-column
          label="性别">
          <template slot-scope="scope">
            <span>{{ scope.row.sex || '无' }}</span>
          </template>
        </el-table-column>
      </el-table>

    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      accountList: []
    }
  },
  methods: {
    importfxx(obj) {
      const _this = this
      const inputDOM = this.$refs.inputer   // 通过DOM取文件数据

      this.file = event.currentTarget.files[0]

      var rABS = false // 是否将文件读取为二进制字符串

      var f = this.file

      var reader = new FileReader()

      // if (!FileReader.prototype.readAsBinaryString) {

      FileReader.prototype.readAsBinaryString = function(f) {
        var binary = ''

        var rABS = false // 是否将文件读取为二进制字符串

        var pt = this

        var wb // 读取完成的数据

        var outdata

        var reader = new FileReader()

        reader.onload = function(e) {
          // https://www.cnblogs.com/zhaomeizi/p/8743106.html

          var bytes = new Uint8Array(reader.result)

          var length = bytes.byteLength

          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }

          var XLSX = require('xlsx')

          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), { // 手动转化

              type: 'base64'

            })
          } else {
            wb = XLSX.read(binary, {

              type: 'binary'

            })
          }

          // outdata就是你想要的东西 excel导入的数据

          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
          console.log('outdata=', outdata)
          // excel 数据再处理

          const arr = []

          outdata.map(v => {
            const obj = {}

            console.log(v)
            // obj.account = v.登录账号
            // obj.department = v.部门
            obj.name = v.姓名
            obj.sex = v.性别
            obj.age = v.年龄
            // obj.id = v.id
            arr.push(obj)
          })

          _this.accountList = [...arr]

          console.log(_this.accountList)

          // _this.reload();
        }

        reader.readAsArrayBuffer(f)
      }

      if (rABS) {
        reader.readAsArrayBuffer(f)
      } else {
        reader.readAsBinaryString(f)
      }
    }

  }
}
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
.test {
}
</style>
