<template>
  <div class="widgets">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card :body-style="{ padding: '10px' }">
          <el-col :span="6">
            <div class="icon-md bg-danger">
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-hangyeshujubaogao" />
              </svg>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="text-right">
              <p class="top_ef01">8500</p>
              <p class="top_ef02">Unique Visitors</p>
            </div>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '10px' }">
          <el-col :span="6">
            <div class="icon-md bg-success">
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-renminbi" />
              </svg>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="text-right">
              <p class="top_ef01">8500</p>
              <p class="top_ef02">Unique Visitors</p>
            </div>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '10px' }">
          <el-col :span="6">
            <div class="icon-md bg-info">
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-chanpin" />
              </svg>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="text-right">
              <p class="top_ef01">8500</p>
              <p class="top_ef02">Unique Visitors</p>
            </div>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '10px' }">
          <el-col :span="6">
            <div class="icon-md bg-warning">
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-tixing" />
              </svg>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="text-right">
              <p class="top_ef01">8500</p>
              <p class="top_ef02">Unique Visitors</p>
            </div>
          </el-col>
        </el-card>
      </el-col>
    </el-row>

    <el-row
      :gutter="20"
      style="margin-top:20px"
    >
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="static/b01.jpg"
            style="max-width:100%;"
          >
          <div style="padding: 14px;font-size:14px">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button
                type="text"
                class="button"
              >操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div
            slot="header"
            style="font-size:14px;"
          >
            <span>卡片名称</span>
            <el-button
              style="float: right; padding: 3px 0;font-size:14px;"
              type="text"
            >操作按钮</el-button>
          </div>
          <div
            v-for="o in 4"
            :key="o"
            class="ka_pin"
          >
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row
      :gutter="20"
      style="margin-top:20px"
    >
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="static/b02.jpg"
            style="max-width:100%;"
          >
          <div style="padding: 14px;font-size:14px;margin-top:-45px;text-align:right">
            <div class="pers_je">
              <img
                src="static/morentu_2.png"
                style="max-width:100%;"
              >
            </div>
            <div class="pers_desp">
              <p class="pers_desp01">简言</p>
              <p class="pers_desp02">这里是描述</p>
            </div>
            <el-col
              v-for="(m,index) in 3"
              :span="8"
              :key="index"
            >
              <div class="ms_jce">
                <p class="ms_jce01">1000</p>
                <p class="ms_jce02">qq</p>
              </div>
            </el-col>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <div
            class="bg-info"
            style="padding:20px 0px"
          >
            <div class="pers_je02">
              <img
                src="static/morentu_2.png"
                style="max-width:100%;"
              >
            </div>
            <div
              class="pers_desp"
              style="color:#fff;width:100%;text-align:center"
            >
              <p class="pers_desp01">简言</p>
              <p
                class="pers_desp02"
                style="color:#fff;"
              >这里是描述</p>
            </div>
          </div>
          <div style="padding: 14px;font-size:14px;">
            <el-col
              v-for="(m,index) in 3"
              :span="8"
              :key="index"
            >
              <div class="ms_jce">
                <p class="ms_jce01">1000</p>
                <p class="ms_jce02">qq</p>
              </div>
            </el-col>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <div
            class="bg-primary"
            style="padding:20px 0px"
          >
            <div class="pers_je02">
              <img
                src="static/morentu_2.png"
                style="max-width:100%;"
              >
            </div>
            <div
              class="pers_desp"
              style="color:#fff;width:100%;text-align:center"
            >
              <p class="pers_desp01">简言</p>
              <p
                class="pers_desp02"
                style="color:#fff;"
              >这里是描述</p>
            </div>
          </div>
          <div style="padding: 14px;font-size:14px;">
            <el-col
              v-for="(m,index) in 3"
              :span="8"
              :key="index"
            >
              <div class="ms_jce">
                <p class="ms_jce01">1000</p>
                <p class="ms_jce02">qq</p>
              </div>
            </el-col>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <div
            class="bg-white"
            style="padding:20px 0px"
          >
            <div class="pers_je02">
              <img
                src="static/morentu_2.png"
                style="max-width:100%;"
              >
            </div>
            <div
              class="pers_desp"
              style="width:100%;text-align:center"
            >
              <p
                class="pers_desp01"
                style="color:#4a4a4a"
              >简言</p>
              <p class="pers_desp02">这里是描述</p>
            </div>
          </div>
          <div style="padding: 14px;font-size:14px;">
            <el-button
              type="primary"
              icon="el-icon-share"
            />
            <el-button
              type="success"
              icon="el-icon-edit"
            />
            <el-button
              type="warning"
              icon="el-icon-upload"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row
      style="margin-top:20px"
      class="blog_ato"
    >
      <el-col :span="24">
        <div
          class="blog_top"
          style="background-image: url(static/bg_star.png)"
        >
          <el-col :span="3">
            <img
              src="static/morentu_2.png"
              class="logo_img"
            >
          </el-col>
          <el-col :span="18">
            <p class="pers_desp07">简言</p>
            <p class="pers_desp08">一句话简介</p>
          </el-col>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
export default {
  name: 'widgets',
  data() {
    return {

    }
  }
}
</script>
<style lang='scss'>
.icon-md {
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 2em;
  border-radius: 70px;
  text-align: center;
}

.text-right {
  .top_ef01 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .top_ef02 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 25px;
  }
}
.ka_pin {
  font-size: 13px;
  height: 30px;
  line-height: 30px;
}
.pers_je {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50px;
  display: inline-block;
  border: 1px solid #fff;
  img {
    width: 100%;
  }
}
.pers_je02 {
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 70px;
  display: block;
  border: 1px solid #fff;
  margin: 0px auto 20px;
  img {
    width: 100%;
  }
}
.pers_desp {
  display: inline-block;
  text-align: right;
  vertical-align: top;
  width: calc(100% - 60px);
  .pers_desp01 {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }
  .pers_desp02 {
    font-size: 12px;
    color: #999;
  }
}
.ms_jce {
  text-align: center;
  .ms_jce01 {
    font-size: 14px;
    color: #4a4a4a;
    height: 25px;
    line-height: 25px;
  }
  .ms_jce02 {
    font-size: 12px;
    color: #999;
    height: 25px;
    margin-bottom: 10px;
  }
}

.blog_ato {
  .blog_top {
    padding: 20px;
    height: 100px;
    background-repeat: no-repeat;
  }
  .pers_desp07,
  .pers_desp08 {
    color: #fff;
  }
  .pers_desp07 {
    font-size: 14px;
  }
  .pers_desp08 {
    font-size: 12px;
    margin-top: 10px;
  }
  .logo_img {
    width: 95px;
    height: 95px;
    border-radius: 95px;
    overflow: hidden;
  }
}
</style>
