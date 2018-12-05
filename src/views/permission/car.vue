<template>
  <div>
    <div @click="clickMe">点击我</div>
    <div id="app">
      <ul id="shop">
        <li
          v-for="(item,index) in plist"
          id="li"
          :key="index"
        >
          <p class="p">{{ item.title }}</p>
          <p class="p1">&yen;{{ item.sprice }}</p>
          <p class="p2"><del>&yen;{{ item.price }}</del></p>
          <p class="p3">
            <span v-if="nums[item.id]">
              <button @click="sub(item)">-</button>
              {{ nums[item.id] }}
            </span>
            <button @click="add(item)">+</button>
          </p>
        </li>
      </ul>
      <template v-if="car.length">
        <table border="1px">
          <tr
            v-for="(item,index) in car"
            :key="index"
          >
            <td>{{ item.title }}</td>
            <td>
              &yen;{{ item.sprice }}
              <del>&yen;{{ item.price }}</del>
            </td>
            <td>
              <button @click="carsub(index,item.id)">-</button>
              {{ nums[item.id] }}
              <button @click="caradd(index,item.id,item.store)">+</button>
            </td>
          </tr>
        </table>
        <button
          id="btn"
          @click="empty"
        >清空购物车</button>
        总计:<b>&yen;{{ itotal }}</b>
      </template>
    </div>
  </div>
</template>
<script>
import { fetchList } from '@/api/demo'
export default {
  name: 'Perm',
  data() {
    return {
      plist: [
        { 'id': '100', 'title': '商品1', 'sprice': '3', 'store': '5' },
        { 'id': '892', 'title': '商品2', 'sprice': '5', 'store': '5' }
      ],
      car: [],
      nums: {},
      buyed: []
    }
  },
  computed: {
    itotal() {
      var total = 0

      for (var i = 0; i < this.car.length; i++) {
        total += this.car[i].sprice * this.nums[this.car[i].id]
      }
      return total
    }
  },
  methods: {
    clickMe() {
      console.log(1231)
      fetchList().then(res => {
        console.log(res)
      })
    },
    // 在购物车中增加数量
    caradd(index, id, store) {
      // 判断数量是否超过库存
      if (this.nums[id] > store) {
        return
      }
      // this.car[index].num+=1;//数量加1
      this.nums[id] += 1
      this.$set(this.car, index, this.car[index])
    },
    // 在购物车中减少数量
    carsub(index, id) {
      // 数量少于1时,删除商品
      if (this.nums[id] <= 1) {
        this.car.splice(index, 1)
        this.buyed.splice(index, 1)
        delete this.nums[id]
        return
      }
      // this.car[index].num-=1;//商品-1
      this.nums[id] -= 1
      this.$set(this.car, index, this.car[index])
    },
    add(item) {
      if (this.buyed.indexOf(item.id) >= 0) { // 判断商品是否已经添加了
        for (var i = 0; i < this.car.length; i++) {
          if (this.car[i].id === item.id) {
            if (this.nums[item.id] > item.store) {
              return
            }
            // this.car[i].num+=1;
            this.nums[item.id] += 1
            this.$set(this.car, i, this.car[i])
            return
          }
        }
        return// 结束当前函数别的运行
      }
      // item.num = 1;
      this.$set(this.nums, item.id, 1)
      this.buyed.push(item.id)
      this.car.push(item)
    },
    sub(item) {
      for (var i = 0; i < this.car.length; i++) {
        if (this.car[i].id === item.id) {
          if (this.nums[item.id] === 1) {
            this.car.splice(i, 1)
            this.buyed.splice(i, 1)
            delete this.nums[item.id]
            return
          }
          this.car[i].num -= 1
          this.nums[item.id] -= 1
          this.$set(this.car, i, this.car[i])
          return
        }
      }
    },
    empty() {
      this.car = []
      this.buyed = []
      this.nums = {}
    }

  }
}
</script>
<style rel="stylesheet/css" lang="css" scoped>
table {
  border-collapse: collapse;
  float: left;
  border: 1px solid #999;
}
#btn {
  background: #999;
  color: #fff;
}
#shop {
  list-style: none;
}
#shop li {
  width: 400px;
  height: 150px;
  border: 1px solid #999;
}
#shop .p {
  width: 200px;
  height: 30px;
  background: gray;
  color: #fff;
  text-align: center;
  line-height: 30px;
}
#shop .p1 {
  color: orange;
  float: left;
}
#shop .p2 {
  color: #999;
  float: left;
  margin-left: 10px;
}
#shop .p3 {
  clear: both;
}
</style>
