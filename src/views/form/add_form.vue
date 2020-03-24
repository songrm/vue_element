<template>
  <PageHeader>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="作者名称">
        <el-input v-model="form.name" style="width: 380px;"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="form.thpe" style="width: 380px;">
          <el-option label="文学" value="culture"></el-option>
          <el-option label="历史" value="history"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
          v-model="form.data_t"
          type="date"
          placeholder="选择日期"
          style="width: 380px;"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="状态">
        <el-radio-group v-model="form.resource">
          <el-radio label="draft"></el-radio>
          <el-radio label="deleted"></el-radio>
          <el-radio label="published"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="简介" style="width: 460px;">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>

      <el-form-item label="上传图片">
        <el-upload
          class="upload-demo"
          action="https://127.0.0.1/"
          :file-list="form.fileList"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="是否创建并发布">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </PageHeader>
</template>
<script>
export default {
  name: 'aform',
  data() {
    return {
      form: {
        name: '',
        thpe: '',
        data_t: '',
        fileList: [
          { name: 'food.jpeg', url: '../assets/b02.jpg' },
          { name: 'food2.jpeg', url: '' }
        ],
        delivery: false,
        resource: ''
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    onSubmit() {}
  }
}
</script>
