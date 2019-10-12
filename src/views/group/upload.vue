<template>
  <div class="">
    <div class="lable martop20">
      Upload 上传，通过点击或者拖拽上传文件。这里使用 element ui 官方封装组件
    </div>
    <h3 class="martop20">头像上传</h3>
    <el-upload
      action="https://"
      class="avatar-uploader"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="lable martop20">
      在这里我们使用 vue-image-crop-upload 插件。安装 npm install
      vue-image-crop-upload<br />https://www.npmjs.com/package/vue-image-crop-upload
    </div>
    <div class="martop20">
      <el-button type="primary" @click="toggleshow">设置图片</el-button>
    </div>
    <my-upload
      field="img"
      v-model="show"
      :width="300"
      :height="300"
      url="/upload"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
    ></my-upload>
    <img :src="cropsrc" v-if="show" />
  </div>
</template>
<script>
import myupload from "vue-image-crop-upload";
export default {
  name: "upload",
  data() {
    return {
      imageUrl: "",
      show: false,
      cropsrc: ""
    };
  },
  components: { "my-upload": myupload },
  methods: {
    handleAvatarSuccess(res, file) {
      //文件上传成功
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      ///上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    toggleshow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
    },
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    }
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
