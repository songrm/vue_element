<template>
  <div class="">
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>调查问卷</span>
        <span
          style="float: right;"
          @click="rad"
        >预览</span>
      </div>
      <div
        v-if="!radio4"
        class="ques_all"
      >
        <template v-for="qd in question_data">
          <div
            v-for="(qc , index) in qd"
            :key="index"
            class="a_n_mk"
          >
            <div class="a_n_mk01">
              <div class="a_n_top">
                <span class="dx">Q{{ index+1 }}</span>
                <div class="a_n_m02 qu">
                  <input
                    v-model="qc.title"
                    type="text"
                    placeholder="请输入标题" >
                </div>
              </div>
              <div class="a_n_m">
                <div
                  v-for="(st,index) in qc.small"
                  :key="index"
                  class="a_n_m01"
                >
                  <span
                    class="a_n_r"
                    style=""
                  >
                    <input
                      class="rd_def"
                      type="radio"
                      value="0"
                    >
                  </span>
                  <div class="a_n_m02 an">
                    <input
                      v-model="st.small_title"
                      type="text"
                      placeholder="请输入选项"
                    >
                  </div>
                  <div class="a_n_m03 sc">
                    <input
                      v-model="st.small_gr"
                      type="text"
                      autocomplete="off"
                    >
                    <span>分</span>
                  </div>
                  <div class="a_n_m04">
                    <span class="ifont_top">
                      <svg
                        class="icon"
                        aria-hidden="true"
                      >
                        <use xlink:href="#icon-shezhi2" />
                      </svg>
                    </span>
                    <span class="ifont_top sore_few">
                      <svg
                        class="icon"
                        aria-hidden="true"
                      >
                        <use xlink:href="#icon-tuodong" />
                      </svg>
                    </span>
                    <span
                      class="ifont_top"
                      @click="del_ans(qc.id,index)"
                    >
                      <svg
                        class="icon"
                        aria-hidden="true"
                      >
                        <use xlink:href="#icon-lajixiang" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="a_n_mk_b">
              <a
                href="javascript:;"
                class="add_ques"
                @click="small(index)"
              >+添加选项{{ index }}</a>
              <div class="frih">
                <span class="ifont_top qu_a_m">
                  <svg
                    class="icon"
                    aria-hidden="true"
                  >
                    <use xlink:href="#icon-tuodong" />
                  </svg>
                </span>
                <span
                  class="ifont_top"
                  @click="all_qu(index)"
                >
                  <svg
                    class="icon"
                    aria-hidden="true"
                  >
                    <use xlink:href="#icon-lajixiang" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </template>
        <div
          class="a_n_wj"
          @click="add_qu()"
        >+添加问题</div>

      </div>
      <div
        v-if="radio4"
        class=""
      >
        <template v-for="qd in question_data">
          <div
            v-for="(qc , index) in qd"
            :key="index"
            class="yl_qu"
          >
            <p class="yl_ti">{{ index+1 }}. {{ qc.title }}</p>
            <div class="yl_txt">
              <div
                v-for="tix in qc.small"
                :key="tix"
                class="yl_txt_l"
              >
                {{ tix.small_title }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </el-card>
  </div>
</template>
<script>

import Sortable from 'sortablejs'

export default {
  name: 'Question',
  data() {
    return {
      radio4: false,
      sortable: null,
      question_data: {
        question_class: [
          {
            'id': 0,
            'title': '1贵单位的性质：',
            small: [
              { 'small_title': '1.题目01', 'small_gr': '1' },
              { 'small_title': '2.题目02', 'small_gr': '2' }
            ]
          },
          {
            'id': 1,
            'title': '2贵单位的性质：',
            small: [
              { 'small_title': '1.题目01', 'small_gr': '1' },
              { 'small_title': '2.题目02', 'small_gr': '2' }
            ]
          }
        ]
      }
    }
  },
  created() {
    // this.sore_table()
  },
  mounted() {
    // 页面加载完之后执行
    this.sore_table()
  },
  methods: {
    small(num) {
      // console.log(num)
      this.question_data.question_class[num].small.push({ 'small_title': '', 'small_gr': '' })
    },
    add_qu() {
      this.question_data.question_class.push({
        'title': '',
        small: [
          { 'small_title': '', 'small_gr': '' }
        ]
      })
    },
    rad() {
      this.radio4 = !this.radio4
    },
    sore_table() {
      var el = $('.ques_all .a_n_mk .a_n_mk01 .a_n_m')[0]

      for (var i = 0; i < $('.ques_all .a_n_mk .a_n_mk01 .a_n_m').length; i++) {
        this.sortable = Sortable.create($('.ques_all .a_n_mk .a_n_mk01 .a_n_m')[i])
      }

      // this.sortable = Sortable.create(el)
    },
    del_ans(num_p, num) {
      this.question_data.question_class[num_p].small.splice(num, 1)
    },
    all_qu(num) {
      console.log(num)
      console.log(this.question_data.question_class.splice(num, 1))
      // this.question_data.question_class[num].splice(num,1)
    }

  }
}
</script>
<style rel="stylesheet/css" lang="css" scoped>
.a_n_mk {
  background-color: #fff;
  border: 1px solid #e8e8e8;
  color: #4a4a4a;
  margin-bottom: 15px;
}
.a_n_mk01 {
  padding: 20px;
  font-size: 12px;
}
.a_n_mk_b {
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  color: #4a4a4a;
  font-size: 12px;
  padding-left: 55px;
  padding-right: 147px;
  border-top: 1px solid #e8e8e8;
}
.a_n_mk_b a,
.a_n_top {
  color: #4a4a4a;
}
.a_n_top {
  margin-bottom: 25px;
  height: 30px;
  line-height: 30px;
  color: #4a4a4a;
}
.a_n_m02,
.a_n_m03 {
  display: inline-block;
  background-color: #f3f4f4;
  height: 30px;
  line-height: 30px;
  padding: 0px 10px;
  color: #4a4a4a;
  border: 1px solid rgba(0, 0, 0, 0);
}
.a_n_top .a_n_m02 {
  background-color: rgba(0, 0, 0, 0);
  width: calc(100% - 426px);
}
.a_n_m02 input,
.a_n_m03 input {
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  width: calc(100% - 20px);
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.a_n_m02 input:focus,
.a_n_m03 input:focus {
  border: 0px;
  outline: 0px;
}
.a_n_m02 {
  width: calc(100% - 400px);
  margin-right: 6px;
}
.a_n_m03 {
  width: 60px;
}
.a_n_r {
  margin-right: 5px;
}
.a_n_m04 {
  display: inline-block;
  color: #4a4a4a;
  vertical-align: middle;
}
.a_n_m04 span {
  cursor: pointer;
  margin-left: 20px;
  font-size: 17px;
}
.a_n_mk_b span {
  cursor: pointer;
  font-size: 17px;
  margin-left: 20px;
}
.a_n_m04 span svg,
.a_n_mk_b span svg {
  height: 20px;
  width: 20px;
}
.frih {
  float: right;
}
.add_ques {
  font-size: 12px;
}
.a_n_m01 {
  margin-bottom: 10px;
}
.a_n_wj {
  display: block;
  text-align: center;
  color: #4a4a4a;
  font-size: 12px;
  height: 50px;
  line-height: 50px;
  background-color: #f3f4f8;
  border: 1px solid #e8e8e8;
}
.f_ye01,
.a_n_m02:hover,
.a_n_m03:hover,
.a_n_top .a_n_m02:hover {
  background-color: #fdfaee;
  border: 1px solid #f1e8c8;
}
.yl_qu {
  padding: 20px 20px 0px 20px;
}
.yl_ti {
  font-size: 16px;
  font-weight: bold;
}
.yl_txt_l {
  padding-top: 20px;
}
.yl_txt {
  padding-left: 20px;
  font-size: 14px;
}
</style>
