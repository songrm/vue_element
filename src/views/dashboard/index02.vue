<template>
  <div class="v2">
    <el-row
      :gutter="20"
      class="marbottom20"
    >
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
        <el-card
          :body-style="{ padding:'10px'}"
        >
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
            <div class="icon-md bg-purple">
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
      class="marbottom20"
    >
      <el-col :span="17">
        <div class="">
          <!-- 对话框 -->
          <el-card
            :body-style="{ padding: '0px' }"
            class="box-card"
          >
            <div
              slot="header"
              class="clearfix"
            >
              <span>Dialog box</span>
            </div>
            <div class="datelis_dui">
              <div
                v-for="(o, index) in 8"
                :key="index"
                class="direct-chat-messages"
              >
                <div class="direct-chat-msg">
                  <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-left">J·K</span>
                    <span class="direct-chat-timestamp pull-right">10月10号 12：30</span>
                  </div>
                  <img
                    class="direct-chat-img"
                    src="static/morentu_2.png"
                    alt="message user image" >
                  <div class="direct-chat-text">
                    Here is the content
                    <a
                      href="javascript:;"
                      class="direct-chat-mess-hu"
                    >Reply</a>
                  </div>

                </div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="7">
        <el-card
          :body-style="{ padding: '0px' }"
          class="box-card"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <span>Memorandum</span>
          </div>

          <div class="person_jies_all">
            <div
              v-for="(o, index) in 8"
              :key="index"
              class="person_jies"
            >
              <span class="person_jiesle01 colorydu04" />
              <div class="person_jies_txt01">
                <p class="memorandum_txt">A very important memorandum</p>
                <div>
                  <span>17-11-29</span>
                </div>
              </div>
              <a
                href="javascript:;"
                class="eidt_mem"
                @click="memor('A very important memorandum','17-11-29')"
              >look</a>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row
      :gutter="20"
      class="marbottom20"
    >
      <el-col
        :span="24"
        class="prm_zer"
      >
        <el-card
          :body-style="{ padding: '0px' }"
          class="box-card"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <span>Project progress</span>
          </div>
          <el-table
            :data="tableData6"
            :span-method="objectSpanMethod"
            height="350"
            style="width: 99%;"
          >
            <el-table-column
              prop="id"
              label="模块分类"
              width="180"
            />

            <el-table-column
              prop="name"
              label="自模块"
            >
              <template slot-scope="scope">
                <div class="">
                  {{ scope.row.name }} <el-tag size="mini">完成</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="amount1"
              label="功能描述"
            />

          </el-table>

        </el-card>

      </el-col>
    </el-row>
    <el-dialog
      :visible.sync="dialogVisible"
      title="提示"
      width="38%"
    >
      <div class="">
        <el-date-picker
          v-model="tck_time"
          type="date"
          placeholder="选择日期"
          style="width:100%"
          class="marbottom20"
        />
        <el-input
          v-model="tck_txt"
          type="textarea"
        />
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          size="medium"
          @click="dialogVisible = false"
        >取 消</el-button>
        <el-button
          type="primary"
          size="medium"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- <todo-list></todo-list> -->
  </div>
</template>
<script type="text/javascript">
import todoList from '@/components/TodoList/Todo'
const table_da = [{
  id: '工作日程安排',
  name: '个人日程',
  amount1: '记录个人事务的信息，相当于个人事务备忘录，分为个人日事务安排）、 个人周事务安排、个人月事务安排，指个人在一天的安排、一周的安排、一月的安排。到时会自动提醒'

}, {
  id: '工作日程安排',
  name: '工作日程',
  amount1: '记录部门的日程安排信息，一般是各部门负责人才有此功能权限.主管安排后到时系统会自动对部门人员进行任务提醒'

}, {
  id: '内部邮件收发',
  name: '接收邮件',
  amount1: '接受内部邮件，对未读邮件进行查看，回复等各项操作'
},
{
  id: '内部邮件收发',
  name: '发送邮件',
  amount1: '写邮件、发送内部邮件'
},
{
  id: '内部邮件收发',
  name: '收件箱',
  amount1: '存放接收到的所有内部邮件，对收到的邮件进行管理'
}
]

export default {
  name: 'Dase',
  components: { todoList },
  data() {
    return {
      tableData6: table_da,
      dialogVisible: false,
      tck_txt: '',
      tck_time: ''
    }
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    memor(a, b) {
      this.dialogVisible = true
      this.tck_txt = a
      this.tck_time = b
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.v2 {
  .icon-md {
    width: 60px;
    height: 60px;
    line-height: 65px;
    font-size: 2em;
    border-radius: 70px;
    text-align: center;
  }
  .top_ef02 {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .person_jies {
    display: block;
    height: 60px;
    position: relative;
  }
  .person_jies:hover {
    background-color: #f7f8fa;
  }
  .person_jiesle01 {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    display: inline-block;
    margin: 0px 20px;
  }
  .colorydu01 {
    background-color: #f47239;
  }
  .colorydu04 {
    background-color: #fa5a5a;
  }
  .person_jies_txt01 {
    width: 80%;
    display: inline-block;
    color: #8b98a8;
    vertical-align: middle;
    margin-top: 10px;
    font-size: 13px;
  }
  .memorandum_txt {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }
  .person_jies_all {
    height: 426px;
    overflow-y: auto;
  }
  .eidt_mem,
  .eidt_mem:hover {
    position: absolute;
    right: 10px;
    font-size: 13px;
    height: 15px;
    top: 23px;
    display: none;
    color: #ea6f5a;
    font-weight: 600;
  }
  .person_jies:hover .eidt_mem {
    display: block;
  }
  .datelis_dui {
    background-color: #fff;
    height: 385px;
    padding: 20px;
    overflow-y: auto;
  }
  .direct-chat-msg {
    margin-bottom: 10px;
  }
  .direct-chat-msg:before,
  .direct-chat-msg:after {
    content: "";
    display: table;
  }
  .direct-chat-info {
    display: block;
    margin-bottom: 2px;
    font-size: 12px;
    color: #4a4a4a;
  }
  .direct-chat-img {
    border-radius: 50%;
    float: left;
    width: 36px;
    height: 36px;
  }
  .direct-chat-text {
    border-radius: 5px;
    position: relative;
    padding: 15px 66px 15px 20px;
    background: #f7f8fa;
    border: 1px solid #f7f8fa;
    margin: 5px 0 0 50px;
    color: #8b98a8;
    font-size: 14px;
    word-wrap: break-word;
  }
  .direct-chat-text:before {
    position: absolute;
    right: 100%;
    top: -2px;
    content: " ";
    pointer-events: none;
    background: url(/assets/detail03.png) no-repeat;
    width: 13px;
    height: 11px;
  }
  .direct-chat-timestamp {
    color: #4a4a4a;
    float: right;
  }
  .direct-chat-name {
    margin-left: 55px;
    color: #4a4a4a;
  }
  .direct-chat-mess-hu,
  .direct-chat-mess-hu:hover {
    position: absolute;
    right: 0px;
    width: 60px;
    text-align: center;
    display: none;
    color: #ea6f5a;
    font-size: 13px;
    height: 15px;
    line-height: 15px;
    top: 50%;
    margin-top: -7.5px;
    text-decoration: none;
  }
  .direct-chat-text:hover .direct-chat-mess-hu {
    display: block;
  }
}
</style>
