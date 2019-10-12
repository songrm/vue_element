<template>
  <div id="todoList">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span slot="label">todoList</span>
      </div>

      <div>
        <ul class="todo-list">
          <li v-for="(list, index) in todos" :key="index" class="todo">
            <el-radio v-model="radio" :label="list.id">{{
              list.text
            }}</el-radio>
          </li>
        </ul>
      </div>

      <footer class="footer">
        <span class="todo-count">
          <strong>{{ remaining }}</strong
          >item left
        </span>
      </footer>
    </el-card>
  </div>
</template>
<script type="text/javascript">
const defalutList = [
  { text: "star this rep22ository", done: false, id: 1 },
  { text: "fork this repository", done: false, id: 2 },
  { text: "follow 444author", done: false, id: 3 }
];

// const filters = {
//   all: todos => todo,
//   active: todos => todo.filter(todo => !todo.done),
//   completed: todos => todos.filter(todo => todo.done)
// }
export default {
  name: "TodoList",
  data() {
    return {
      radio: "1",

      todos: defalutList
    };
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
