<template>
  <el-container>
    <el-row class="se_wd">
      <el-col :span="24">

        <el-form
          ref="ruleForm2"
          :model="ruleForm2"
          :rules="rules2"
          status-icon
          class="demo-ruleForm"
        >
          <h3 class="title">系统登录</h3>
          <el-form-item
            label="用户名"
            prop="usexm"
          >
            <el-input
              v-model="ruleForm2.usexm"
              type="text"
              auto-complete="off"
            />
          </el-form-item>

          <el-form-item
            label="密码"
            prop="pass"
          >
            <el-input
              v-model="ruleForm2.pass"
              type="text"
              auto-complete="off"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="l_load"
              type="primary"
              @click="handleLogin(&quot;ruleForm2&quot;)"
            >提交</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>
  </el-container>
</template>
<script type='text/javascript'>
// import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    // let data_n = ''
    var validatename = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('不能为空123'))
      } else {
        callback()
      }
    }
    var validatepwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('不能为空'))
      } else {
        callback()
      }
    }

    return {
      exdate: 1,
      ruleForm2: {
        usexm: '',
        pass: ''
      },
      rules2: {
        usexm: [{ validator: validatename, trigger: 'blur' }],
        pass: [{ validator: validatepwd, trigger: 'blur' }]
      },
      l_load: false
    }
  },

  methods: {
    handleLogin(loginform) {
      this.$refs[loginform].validate(valid => {
        if (valid) {
          this.l_load = true
          // var self = this
          // this.$axios.get('ceshi/login').then(function (response) {
          // 	const dataww = response.data.data.name;
          //
          // 	if(dataww==self.ruleForm2.usexm&&response.data.data.pwd==self.ruleForm2.pass){
          //
          // 		//self.$store.dispatch('get_user',self.ruleForm2)
          // 		self.setCookie(self.ruleForm2.usexm,'8585');
          // 		self.$router.push({path:'/'})
          // 	}else {
          // 		alert('请输入正确的名称／密码');
          // 	}
          // 	// this.$store.dispatch('get_user',this.ruleForm2)
          //
          // })
          this.$store.dispatch('get_user', this.ruleForm2)
          // this.setCookie(this.ruleForm2.usexm, '8585');
          this.$router.push({ path: '/' })
        } else {
          this.l_load = false
          console.log('error submit!!')
          return false
        }
      })
    },
    setCookie(c_name, c_pwd) {
      var exdate = new Date() // 获取时间

      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000) // 保存的天数
      // 字符串拼接cookie
      window.document.cookie = 'userName' + '=' + c_name + ';path=/'
      window.document.cookie = 'token' + '=' + c_pwd + ';path=/'
    }
  }
}
</script>
<style type="text/css">
.se_wd {
  width: 30%;
  margin: 100px auto;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12);
  padding: 20px;
  border-radius: 4px;
}
</style>
