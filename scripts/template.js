/**
 * 快速生成页面脚本 npm run tep XXX
 */
const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
if (!dirName) {
    console.log('文件夹名称不能为空！')
    console.log('示例：npm run tep ${capPirName}')
    process.exit(0)
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <PageHeader class="${dirName}-wrap">
    {{data.pageName}}
  </PageHeader>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
// import { Getter, Action } from "vuex-class"
import { ${capPirName}Data } from './${dirName}.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class ${dirName} extends Vue {
  // Getter
  // @Getter ${dirName}.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ${capPirName}Data = {
    pageName: '${dirName}'
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
  // @import './${dirName}.scss'
  .${dirName}-wrap {

  }
</style>
`

// interface 模版
const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  pageName: string
}

// VUEX ${dirName}.State 参数类型
export interface ${capPirName}State {
  data?: any
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

`

fs.mkdirSync(`${basePath}/views/${dirName}`) // mkdir

process.chdir(`${basePath}/views/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue

// fs.writeFileSync(`${dirName}.ts`, tsTep) // ts
// fs.writeFileSync(`${dirName}.scss`, scssTep) // scss

// process.chdir(`${basePath}/types/views`); // cd types
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep) // interface

// process.chdir(`${basePath}/store/module`); // cd store
// fs.writeFileSync(`${dirName}.ts`, vuexTep) // vuex

// process.chdir(`${basePath}/api`); // cd api
// fs.writeFileSync(`${dirName}.ts`, apiTep) // api

process.exit(0)
