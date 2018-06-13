<template>
  <div>

    <div class="hello">
      <button @click="showToast">自定义组件提示框调用</button>
    </div>
      <div class="" @click='dinaw()'>
        点击我0
      </div>
    <el-card :body-style="{ padding: '10px 20px' }">
      <el-tabs v-model="activeName">
        <el-tab-pane label="权限控制" name="first">
            <h1 class='marbottom20'>权限控制</h1>
            <div class='marbottom20'></div>
            <img src='static/morentu_2.png' class='marbottom20'>
            <h2 class='marbottom20'>您的权限是：{{roles}}</h2>
            <div class='marbottom20' style="height:50px"></div>
        </el-tab-pane>
        <el-tab-pane label="成员管理" name="second">
          <el-row :gutter='20'>
            <el-col :span='6' v-for='pers_s in data_ert' class='marbottom20' :key='pers_s'>
              <div class="per_all" v-bind:class='pers_s.department | class_f'>
                <div class="pes_img">
                  <img src='static/morentu_2.png'>
                </div>
                <div class="pes_text">
                  <p>{{pers_s.name}}</p>
                  <p>{{pers_s.power}}</p>
                  <p>{{pers_s.email}}</p>
                </div>
                <div class="per_zpe">
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-xiugai"></use>
                  </svg>
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-del"></use>
                  </svg>
                </div>
              </div>
            </el-col>
          </el-row>

        </el-tab-pane>
        <el-tab-pane label="权限分配" name="third">
          <el-row>
            <el-col :span='18' v-for="o in 6" :key='o'>
              <div class="jq_all">
                <p class="jq_name">角色名称</p>
                <el-input placeholder="请输入内容" style="width:60%" size="medium" value='产品部'></el-input>
                <span class='jq_xiaw'>
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-xiugai1"></use>
                  </svg>
                </span>
                <span class='jq_xiaw'>
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-lajixiang"></use>
                  </svg>
                </span>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="邮件邀请" name="fourth">
          <el-row>
            <el-col :span='20' v-for='z in per_z' :key='z'>
              <div class="jq_all">
                <p class="jq_name">成员邀请</p>
                <el-input placeholder="请输入邮件" style="width:20%" size="medium"></el-input>
                <el-input placeholder="请输入成员名称" style="width:20%" size="medium"></el-input>
                <el-select v-model="value4" clearable placeholder="请选择部门" size="medium" style="width:20%">
                  <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
                <el-select v-model="value5" clearable placeholder="请选择角色" size="medium"style="width:20%">
                  <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>

              </div>
            </el-col>
            <el-col :span='20' class='marbottom20'>
              <el-button  size="medium" @click='add_cy'> + 添加</el-button>
            </el-col>
            <el-col :span='20'>
              <el-button type="primary" size="medium">发送</el-button>
            </el-col>

          </el-row>
        </el-tab-pane>
        <el-tab-pane label="权限分配02" name="five">
          <el-row>
            <el-col :span='20'>
              <div class="jq_all" style="border-bottom:0px">
                <p class="jq_name">角色名称</p>
                <el-input placeholder="请输入内容" size="medium" value='产品部'></el-input>
              </div>
            </el-col>
            <el-col :span='20'>
              <div class="jq_all" style="border-bottom:0px">
                <p class="jq_name">权限设置</p>
                <div class="dd_chan_all">
                  <ul class='dd_chan_ul'>
                    <li class='dd_chan_li' v-for='k in 3' :key='k'>
                      <div class="dd_chan_div">
                        <span class='dd_pd'>-</span>
                        <span class='dd_txt'>页面 {{k}}</span>
                        <el-switch style='float:right;margin-top:8px;margin-right:10px;'
                          v-model="value3"
                         active-color="#ea6f5a" inactive-color="#999">
                        </el-switch>
                      </div>
                      <ul class='dd_chan_ul'>
                        <li class='dd_chan_li'>
                          <div class="dd_chan_div">
                            <span class='dd_pd'>-</span>
                            <span class='dd_txt'>页面{{k}}-1</span>
                          </div>
                        </li>
                        <li class='dd_chan_li'>
                          <div class="dd_chan_div">
                            <span class='dd_pd'>-</span>
                            <span class='dd_txt'>页面{{k}}-2</span>
                          </div>
                        </li>
                        <li class='dd_chan_li'>
                          <div class="dd_chan_div">
                            <span class='dd_pd'>-</span>
                            <span class='dd_txt'>页面{{k}}-3</span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>

          </el-row>
        </el-tab-pane>
        <el-tab-pane label="成员修改设置" name="six">
          <el-row>
            <el-col :span='20'>
              <div class="jq_all" >
                <p class="jq_name">成员修改</p>
                <el-input placeholder="请输入内容" size="medium" value='王二'></el-input>
              </div>
            </el-col>
            <el-col :span='20'>
              <div class="jq_all" style="border-bottom:0px;min-height:300px">
                <p class="jq_name">角色名称</p>
                <el-radio v-model="radio" label="1" class='jub'>交易部</el-radio>
                <el-radio v-model="radio" label="2" class='jub'>管理员</el-radio>

              </div>
            </el-col>
            <el-col :span='20'>
              <el-button type="primary" size="medium">提交</el-button>
            </el-col>


          </el-row>
        </el-tab-pane>

      </el-tabs>
    </el-card>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { mapGetters} from 'vuex'
  import toast from '@/components/js/to.js';
  Vue.prototype.$toast = toast;
  // import list from '@/servers/controllers/user.js'
  export default{
    name:'perm',
    data(){
      return{
        activeName:'first',
        data_ert:[],
        value4:'',
        value5:'',
        per_z:1,
        radio:1,
        value3:true,
        options:[{value:'产品部',lable:'1'},{value:'交易部',lable:'2'},{value:'清算部',lable:'3'}],
        options2:[{value:'产品部',lable:'1'},{value:'管理员',lable:'2'},{value:'只读权限',lable:'3'}]
      }
    },
    computed:{
      ...mapGetters([
        'getuser',
        'roles'
      ]),
    },
    methods:{
      resq(){

        var _self=this;
        // this.$axios.get('/ceshi/pers').then(function(response){
        //   _self.data_ert=response.data.data.projects;
        //
        // }).catch(function (error) {
        //   console.log(error);
        // });
        this.$axios.get('/permissionlist').then(function(response){
          console.log(response.data.data)
          _self.data_ert=response.data.data;

        }).catch(function (error) {
          console.log(error);
        });
      },
      add_cy(){
        this.per_z=this.per_z+1
      },
      dinaw(){
        // this.$http.get('http://127.0.0.1:8087/api/books').then((data) => {
        //           // 由于请求成功返回的是Promise对象，我们要从data.body.data拿到books数组userlist
        //             console.log(data)
        //       })
        this.$axios.get('/permissionlist').then(function(response){
          console.log(response)

        }).catch(function (error) {
          console.log(error);
        });
      },
      showToast(){
        this.$toast('新内容',2000,{color:'#F38181',backgroundColor:'#FEFAEC'})
        //this.$toast();
      }
    },
    created(){
      this.resq();
    },
    filters:{
      class_f(a){
        const class_tr={
          department1:'depart1',
          department2:'depart2',
          department3:'depart3'
        }
        return class_tr[a]
      }
    }

  }
</script>
<style rel="stylesheet/css" lang="css" scoped>
  .pes_img{width: 40px;height: 40px;overflow: hidden;border-radius: 36px;display: inline-block;vertical-align: middle;}
  .pes_img img{width: 100%}
  .pes_text{ font-size: 14px; color: #4a4a4a;display: inline-block;width: calc(100% - 70px);padding-left: 20px;vertical-align: middle;}
  .per_all{padding: 45px 25px;border: 1px solid #f3f3f3;box-shadow: 0 0px 20px rgba(0,0,0,0.1);position: relative;}
  .per_all p{margin-bottom: 5px;min-height: 18px;}
  .depart1{border-top: 3px solid #ea6f5a;}
  .depart2{border-top: 3px solid #5cb16a;}
  .depart3{border-top: 3px solid #FFC70A;}
  .per_zpe{position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;background-color: rgba(0,0,0,0.6);opacity: 0;transition: all 0.3s;text-align: center;}
  .per_zpe svg{color: #fff;margin: 0px 10px;transition: all 0.3s;}
  .per_all:hover .per_zpe{opacity: 1;}
  .per_all:hover .per_zpe svg{margin: 20% 10px;}
  .jq_all{margin-bottom: 10px;padding-bottom: 20px;border-bottom: 1px solid #f3f3f3;}
  .jq_name{font-size: 12px;height: 30px; line-height: 30px;color: #4a4a4a;}
  .jq_xiaw{ padding: 0px 10px;display: inline-block;}
  .jq_xiaw svg{color: #8f8f90;width: 18px;height: 18px}
  .dd_chan_ul{padding: 0px;list-style: none;}
  .dd_chan_li{}
  .dd_chan_div{background-color: #f1f1f1;height: 36px;line-height: 36px;font-size: 12px;margin-bottom: 10px;}
  .dd_pd{height: 36px;width: 36px;color: #fff;font-size: 20px;display: inline-block;background-color: #ea6f5a;text-align: center;vertical-align: top;margin-right: 10px;}
  .dd_txt{font-size: 12px;}
  .dd_chan_li .dd_chan_ul{margin-left: 36px;}
  .jub{display: block;margin-left: 0px;margin: 15px 0px;}
</style>
