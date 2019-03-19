<template>
  <div class="home_01">
    <div class="xc_ye">
      <div id="particles"/>
      <!-- <img src="static/bg_star.png" class="xc_ye_img"> -->
      <!-- <div class="zpc"></div> -->
      <div
        class="pro_ser_a"
        style="height:210px;margin-top:-105px;"
      >
        <div
          class="in_fz01"
          contenteditable="true"
        >关于投资我们是认真的</div>
        <div
          class="in_fz02"
          contenteditable="true"
        >关于投资我们是认真的，关于投资我们是认真的，</div>
        <a
          href="javascript:;"
          class="pro_ser_a02"
          contenteditable="true"
        >关于我们</a>
      </div>
    </div>
    <!-- 宣传图结束 -->
    <!-- 模块1 -->
    <div class="xuc01">
      <el-row>
        <el-col
          :span="24"
          class="text-center"
        >
          <h2
            class="in_fz02"
            contenteditable="true"
          >关于我们</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col
          :xs="24"
          :sm="12"
          :md="16"
          :lg="16"
          :span="8"
          class="text-center"
        >
          <div class="h01_ju">
            <h3 contenteditable="true">履行员工发展责任，落实“以人为本”</h3>
            <div contenteditable="true">我们积极构建和谐劳动关系，落实“以人为本”科学发展理念，</div>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          :span="8"
          class="text-center"
        >
          <img
            src="static/bg9.jpg"
            class="xc_ye_img"
          >
        </el-col>
      </el-row>
    </div>
    <!-- 模块2 -->
    <div class="xuc01">
      <el-row>
        <el-col
          :span="24"
          class="text-center"
        >
          <h2
            class="in_fz02"
            contenteditable="true"
          >产品</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          class="text-center"
        >
          <img
            src="static/bg5.jpg"
            class="xc_ye_img"
          >
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          class="text-center"
        >
          <img
            src="static/bg4.jpg"
            class="xc_ye_img"
          >
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          class="text-center"
        >
          <img
            src="static/bg8.jpg"
            class="xc_ye_img"
          >
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          class="text-center"
        >
          <img
            src="static/bg4.jpg"
            class="xc_ye_img"
          >
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          class="text-center"
        >
          <img
            src="static/bg8.jpg"
            class="xc_ye_img"
          >
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          class="text-center"
        >
          <img
            src="static/bg10.jpg"
            class="xc_ye_img"
          >
        </el-col>
      </el-row>
    </div>
    <!-- 模块3 -->
    <!-- 联系我们 -->
    <div class="xuc01 bg_cont">
      <div
        id="particles01"
        class=""
      />
      <el-row>
        <el-col
          :span="24"
          class="text-center"
        >
          <h2
            class="in_fz02"
            contenteditable="true"
            style="color:#fff"
          >联系我们</h2>
        </el-col>
        <el-col
          :span="24"
          class="text-center"
        >
          <div
            class="text-xs-small"
            contenteditable="true"
          >
            Our team is from all over the world and we know how to deliver quality pixels from miles away.
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top:30px;">
        <el-col
          :xs="24"
          :sm="12"
          :md="10"
          :lg="12"
        >
          <div class="bit_center">
            <div class="bit_cle">Visit Us</div>
            <p class="text-xs-small mb5"><strong class="text-switch">Email:</strong> info@particle.com</p>
            <p class="text-xs-small mb5"><strong class="text-switch">Phone:</strong> +1 212-249-2390</p>
            <p class="text-xs-small mb5"><strong class="text-switch">Fax:</strong> +1 112-444-2390</p>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="14"
          :lg="12"
          class=""
        >
          <div class="form-group">
            <input
              class="form-control"
              placeholder="邮箱"
              type="text"
            >
          </div>
          <textarea
            class="form-control"
            placeholder="内容"
          />
          <div class="">
            <a class="sub_tj">提交</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// import particles from 'particles.js'
export default {
  name: 'Swiper',
  data() {
    return {
      menu_data: []
    }
  },
  // mounted() {
  //   particlesJS.load('particles', '/static/s_circle.json')
  //   particlesJS.load('particles01', '/static/s_big_circle.json')
  // },
  methods: {

  }

}
</script>
<style lang="scss">
.home_01 {
  overflow: hidden;
}
.xc_ye {
  position: relative;
  margin-bottom: 60px;
  display: block;
  height: 700px;
  overflow: hidden;
  clear: both;
  background: linear-gradient(
    to right,
    #6819e8 0%,
    #7437d0 35%,
    #615fde 68%,
    #6980f2 100%
  );
  .pro_ser_a {
    position: absolute;
    top: 50%;
    height: 100px;
    margin-top: -50px;
    width: 1000px;
    left: 50%;
    margin-left: -500px;
    color: #fff;
    text-align: center;
  }
  .pro_ser_a01 {
    font-size: 34px;
    color: #fff;
    margin-bottom: 30px;
  }
  .pro_ser_a02 {
    color: #fff;
    border: 1px solid #fff;
    font-size: 17px;
    padding: 10px 16px;
    border-radius: 8px;
  }
  .zpc {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
.xc_ye_img {
  width: 100%;
}
.in_fz01 {
  font-size: 46px;
  margin-bottom: 20px;
}
.in_fz02 {
  font-size: 23px;
  margin-bottom: 62px;
}
#particles,
#particles01 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.xuc01 {
  margin-bottom: 60px;
  h3 {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .h01_ju {
    text-align: left;
    margin: 10px 20% 10px 10%;
  }
}
.text-center {
  text-align: center;
}
.text-xs-small {
  margin-bottom: 5px;
  font-size: 13px;
  color: #e2e2e2;
}
.bit_center {
  width: 90%;
  margin: 0px auto;
  min-height: 150px;
}
.bit_cle {
  color: #fff;
  font-size: 17px;
  margin-bottom: 10px;
}
.bg_cont {
  background: linear-gradient(
    to right,
    #3f2856 0%,
    #17181b 35%,
    #1f1f2d 68%,
    #1c072f 100%
  );
  position: relative;
  padding: 80px 80px 100px 80px;
  overflow: hidden;
}
.form-control {
  padding: 0;
  height: 42px;
  background-color: transparent;
  color: #e2e2e2;
  font-size: 13px;
  font-weight: 400;
  border: none;
  border-bottom: 2px solid #e2e2e2;
  border-radius: 0px;
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  margin-bottom: 20px;
  width: 70%;
  :focus {
    border-color: #2f2f2f;
  }
}
.sub_tj {
  display: inline-block;
  padding: 12px 26px;
  color: #fff;
  border: 1px solid #fff;
  font-size: 10px;
  border-radius: 45px;
  opacity: 0.8;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #fff;
}
</style>
