<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">对齐方式</span>
        <el-radio-group size="small" v-model="labelPosition">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对其</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
          style="width:50%;"
        >
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div style="margin: 20px;"></div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">行内表单</span>

        <div style="margin: 20px;"></div>
        <el-form :inline="true" label-width="80px" :model="formLabelAlign">
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div style="margin: 20px;"></div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">自定义验证</span>

        <div style="margin: 20px;"></div>
        <el-form
          :model="formrule"
          status-icon
          :rules="rules2"
          ref="formrule"
          label-width="100px"
        >
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="formrule.pwd" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确定密码" prop="checkpwd">
            <el-input v-model="formrule.checkpwd" type="password"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="formrule.age"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('formrule')"
              >提交</el-button
            >
            <el-button @click="resetForm('formrule')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div style="margin: 20px;"></div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">动态增加表单</span>

        <div style="margin: 20px;"></div>
        <el-form :model="addform" ref="addform" label-width="100px">
          <el-form-item label="列表" prop="list">
            <el-input v-model="addform.list"></el-input>
          </el-form-item>
          <el-form-item
            :label="afe.name"
            v-for="afe in addform.list_w"
            :key="afe"
          >
            <el-input v-model="afe.value"></el-input>
            <el-button @click.prevent="removeDomain(afe)">删除</el-button>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="addform_list()">添加</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "eform",
  data() {
    var validatepass = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatecheckpwd = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("不能为空"));
      } else if (value !== this.formrule.pwd) {
        callback(new Error("两次输入密码不一致"));
      }
    };
    var validateage = (rule, value, callback) => {
      var re = /^100$|^(\d|[1-9]\d)(\.\d+)*$/;

      if (value == "") {
        callback(new Error("不能为空"));
      } else if (!re.test(value)) {
        callback(new Error("请输入数字"));
      }
    };
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: ""
      },
      formrule: {
        pwd: "",
        checkpwd: "",
        age: ""
      },
      addform: {
        list: "",
        list_w: [{ name: "列表1", value: "" }]
      },
      rules2: {
        pwd: [{ validator: validatepass, trigger: "blur" }],
        checkpwd: [{ validator: validatecheckpwd, trigger: "blur" }],
        age: [{ validator: validateage, trigger: "blur" }]
      }
    };
  },
  methods: {
    resetForm(formname) {
      this.$refs[formname].resetFields();
    },
    submitForm(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    addform_list() {
      this.addform.list_w.push({ name: "列表", value: "" });
    },
    removeDomain(item) {
      var index = this.addform.list_w.indexOf(item);
      if (index !== -1) {
        this.addform.list_w.splice(index, 1);
      }
    }
  }
};
</script>
