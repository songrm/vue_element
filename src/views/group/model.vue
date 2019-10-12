<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="12" class="marbottom20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Message 消息提示</span>
          </div>
          <div class="">
            <div class="lable marbottom20">主要用于操作后的 消息反馈。</div>
            <el-button :plain="true" @click="open2">成功</el-button>
            <el-button :plain="true" @click="open3">警告</el-button>
            <el-button :plain="true" @click="open">消息</el-button>
            <el-button :plain="true" @click="open4">错误</el-button>
            <el-button :plain="true" @click="open5">Message-Box</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" class="marbottom20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Notification 通知</span>
          </div>
          <div class="">
            <div class="lable marbottom20">
              悬浮出现在页面角落，显示全局的通知提醒消息
            </div>
            <el-button :plain="true" @click="open6">成功</el-button>
            <el-button :plain="true" @click="open7">警告</el-button>
            <el-button :plain="true" @click="open8">错误</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" class="marbottom20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Dialog 对话框</span>
          </div>
          <div class="">
            <div class="lable marbottom20">
              在保留当前页面状态的情况下，告知用户并承载相关操作
            </div>
            <el-button type="text" @click="dialogVisible = true"
              >点击打开 Dialog</el-button
            >
            <el-button type="text" @click="dialogVisible01 = true"
              >打开嵌套表格的 Dialog</el-button
            >
            <el-button type="text" @click="dialogVisible03 = true"
              >打开嵌套表单的 Dialog</el-button
            >
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" class="marbottom20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Tooltip 文字提示</span>
          </div>
          <div class="">
            <div class="lable marbottom20">
              常用于展示鼠标 hover 时的提示信息
            </div>
            <el-tooltip
              class="item"
              effect="dark"
              content="Top Left 提示文字"
              placement="top"
            >
              <el-button>上左</el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="Top Left 提示文字"
              placement="left"
            >
              <el-button>上左</el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="Top Left 提示文字"
              placement="right"
            >
              <el-button>上左</el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="Top Left 提示文字"
              placement="bottom"
            >
              <el-button>上左</el-button>
            </el-tooltip>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" class="marbottom20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Popover 弹出框</span>
          </div>
          <div class="">
            <div class="lable marbottom20">鼠标滑过/点击效果</div>
            <el-popover
              ref="popover1"
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
            </el-popover>
            <el-popover
              ref="popover2"
              placement="bottom"
              title="标题"
              width="200"
              trigger="click"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
            </el-popover>
            <el-popover
              ref="popover3"
              placement="top"
              width="160"
              v-model="visible2"
            >
              <p>这是一段内容这是一段内容确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible2 = false"
                  >取消</el-button
                >
                <el-button type="primary" size="mini" @click="visible2 = false"
                  >确定</el-button
                >
              </div>
            </el-popover>
            <el-button v-popover:popover1>hover 激活</el-button>
            <el-button v-popover:popover2>click 激活</el-button>
            <el-button v-popover:popover3>删除</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="表单" :visible.sync="dialogVisible03">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible03 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible03 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="个人信息" :visible.sync="dialogVisible01">
      <table style="width:100%">
        <tbody>
          <tr>
            <td>姓名</td>
            <td>电话</td>
            <td>年龄</td>
          </tr>
          <tr>
            <td>姓名</td>
            <td>电话</td>
            <td>年龄</td>
          </tr>
        </tbody>
      </table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible01 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible01 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "model",
  data() {
    return {
      dialogVisible: false,
      dialogVisible01: false,
      dialogVisible03: false,
      visible2: false,
      form: {
        name: "",
        region: ""
      },
      formLabelWidth: "100px"
    };
  },
  methods: {
    open2() {
      this.$message.success("这是一条消息提示");
    },
    open3() {
      this.$message.warning("这是一条消息提示");
    },
    open() {
      this.$message("这是一条消息提示");
    },
    open4() {
      this.$message.error("这是一条消息提示");
    },
    open5() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    },
    open6() {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success"
      });
    },
    open7() {
      this.$notify({
        title: "警告",
        message: "这是一条成功的提示消息",
        type: "warning"
      });
    },
    open8() {
      this.$notify({
        title: "错误",
        message: "这是一条成功的提示消息",
        type: "error"
      });
    }
  }
};
</script>
