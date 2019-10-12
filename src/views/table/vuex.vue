<template>
  <div>
    <h1>vuex</h1>
    文字显示{{ getuser }}
    <el-button @click="click_me">点击</el-button>
    <el-form :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input
          v-model="formInline.user"
          placeholder="审批人"
          @keyup.enter.native="search_Filter"
        ></el-input>
      </el-form-item>
    </el-form>
    <input @change="search_Filter($event)" placeholder="请输入类目" />
    <ul id="items">
      <li v-for="a in arr" style="height:45px;line-height:45px">
        <span>{{ a.name }}</span
        >; age=<span>{{ a.age }}</span>
      </li>
    </ul>
    <el-button @click="abc">点击</el-button>
    <el-button @click="abc01">点击排序</el-button>
    <ul>
      <li v-for="a in newarr" style="height:45px;line-height:45px">
        <span>{{ a.name }}</span
        >; age=<span>{{ a.age }}</span>
      </li>
    </ul>
    <el-table
      :data="tableData6"
      :row-class-name="tableRowClassName"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        type="selection"
        width="55"
        class="selection"
        :selectable="checkboxInit"
        @selection-change="changeFun"
      ></el-table-column>
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Sortable from "sortablejs";
export default {
  name: "vuex",
  data() {
    return {
      arr: [
        { name: "zopp000", age: 0 },
        { name: "gpp111", age: 1 },
        { name: "yjj222", age: 2 }
      ],

      newarr: [],
      formInline: { user: "" },
      qx: [],
      rep_tb6: ["12987122", "12987124"],
      tableData6: [
        {
          id: "12987122",
          name: "王小虎01"
        },
        {
          id: "12987123",
          name: "王小虎2"
        },
        {
          id: "12987123",
          name: "王小虎2"
        },
        {
          id: "12987123",
          name: "王小虎2"
        },
        {
          id: "12987124",
          name: "王小虎2"
        },
        {
          id: "12987124",
          name: "王小虎2"
        }
      ],
      tableData6_c: [],
      hoverOrderArr: [],
      rowIndex: "-1",
      pos: ""
    };
  },
  computed: {
    ...mapGetters(["getuser"])
  },
  methods: {
    click_me() {
      this.$store.dispatch("get_user", "admin");
    },
    sort() {
      var el = document.getElementById("items");
      var that = this;
      var sortable = Sortable.create(el, {
        onEnd: function(evt) {
          var itemEl = evt.item;
          var num = evt.newIndex - evt.oldIndex;
          var obj = new Object();
          obj.age = num;
          obj.name = $(itemEl)
            .find("span")
            .eq(1)
            .text();
          // that.abc($(itemEl).find('span').eq(0).text(),$(itemEl).find('span').eq(1).text(),num)
          // this.newarr.push(obj)
          // var a = JSON.stringify(this.newarr)
          // console.log(a)

          // if(this.newarr.length == 0){
          //   this.newarr.push(obj)
          // }else {
          //   for (var i = 0; i < this.newarr.length; i++) {
          //     if(this.newarr[i].name==obj.name){
          //       this.newarr[i].age==num
          //     }else {
          //
          //     }
          //   }
          // }
          // console.log(jQuery.inArray("John", arr))
        }
      });
    },
    contains(arr, obj) {
      var i = arr.length;
      while (i--) {
        if (arr[i].name === obj) {
          return true; //存在
        }
      }
      return false; //不存在
    },
    abc01() {
      var obj = new Object();
      obj.age = "";
      obj.name = "";
      console.log(
        $("#items li")
          .eq(0)
          .find("span")
          .eq(0)
          .text()
      );
      this.newarr = [];
      for (var i = 0; i < 3; i++) {
        console.log(i);
        // obj.name=$('#items li').eq(i).find('span').eq(0).text()
        // obj.age=$('#items li').eq(i).find('span').eq(1).text()
        // console.log($('#items li').eq(i).find('span').eq(0).text())
        this.newarr.push({
          name: $("#items li")
            .eq(i)
            .find("span")
            .eq(0)
            .text(),
          age: $("#items li")
            .eq(i)
            .find("span")
            .eq(1)
            .text()
        });
      }
      for (var i = 0; i < this.newarr.length; i++) {
        if (this.newarr[i].name == this.arr[i].name) {
        } else {
          this.qx.push({
            name: this.newarr[i].name,
            age: this.newarr[i].name,
            sort: i
          });
        }
      }
      console.log(this.qx);
      // for (var i = 0; i < this.arr.length; i++) {
      //
      // }
    },
    abc(name, age, sort) {
      var newage = parseInt(age) + parseInt(sort);
      var obj = new Object();
      obj.age = newage;
      obj.name = name;
      // this.newarr.push(obj)
      // var a = JSON.stringify(this.newarr)
      // console.log(a)
      if (this.newarr.length == 0) {
        this.newarr.push(obj);
      } else {
        console.log(this.contains(this.newarr, name));
        if (this.contains(this.newarr, name)) {
          for (var i = 0; i < this.newarr.length; i++) {
            console.log(this.newarr[i].name + "===" + obj.name);
            if (this.newarr[i].name == obj.name) {
              console.log(newage);
              this.newarr[i].age = this.newarr[i].age + parseInt(sort);
              // break
            }
          }
        } else {
          this.newarr.push(obj);
        }
      }
      console.log(this.newarr);
    },
    getSpanArr() {
      for (var i = 0; i < this.tableData6.length; i++) {
        if (i === 0) {
          this.tableData6_c.push(1);
          this.pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (this.tableData6[i].id === this.tableData6[i - 1].id) {
            this.tableData6_c[this.pos] += 1;
            this.tableData6_c.push(0);
          } else {
            this.tableData6_c.push(1);
            this.pos = i;
          }
        }
      }
      // alert(123)
      console.log(this.tableData6_c);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // console.log(row)
      if (columnIndex === 0) {
        const _row = this.tableData6_c[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    checkboxInit(row, index) {
      var found = this.rep_tb6.find(function(element) {
        if (element == row.id) {
          return true;
        } else {
          return false;
        }
      });
      if (found) {
        console.log(0);
        return 0; //不可勾选
      } else {
        return 1; //可勾选
      }
    },
    changeFun(val) {
      console.log(val);
    },
    search_Filter(event) {
      console.log(123);
      if (event.keyCode == "13") {
        console.log(12);
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.sort();
    }, 2000);
    this.getSpanArr();
  }
};
</script>
<style>
.el-table .success-row {
  background: red !important;
}

.el-table__row:hover,
.el-table__row:hover td {
  background-color: rgba(0, 0, 0, 0) !important;
}
.el-table__header tr > th {
  background: #f8f8f8 !important;
}

.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #dcdfe6;
  border-color: #dcdfe6;
}

.el-checkbox__input.is-focus .el-checkbox__inner {
  background-color: #dcdfe6;
  border-color: #dcdfe6;
}
</style>
