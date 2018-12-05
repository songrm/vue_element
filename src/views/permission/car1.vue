<template>
  <div>

    <div id="app">
      <ul id="shop">
        <li
          v-for="(item,index) in list"
          id="li"
          :key="index"
        >
          <p class="p">{{ item.title }}</p>
          <p class="p1">&yen;{{ item.sprice }}</p>
          <p class="p3">
            <span v-if="nums[item.id]">
              <button @click="reduce(item)">-</button>
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
              <button @click="reduce(item)">-</button>
              {{ nums[item.id] }}
              <button @click="add(item)">+</button>
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

export default {
  name: 'perm',
  data() {
    return {
      list: [
        { 'id': '1', 'title': '商品1', 'sprice': '3', 'store': '5' },
        { 'id': '2999', 'title': '商品2', 'sprice': '5', 'store': '5' }
      ],
      car: [], // 购物车
      nums: {}, // 记录已添加的 商品的id
      buyed: [], // 已买商品
      itotal: ''
    }
  },
  computed: {
    itotal: function() {
      var total = 0

      for (var i = 0; i < this.car.length; i++) {
        total += this.car[i].sprice * this.nums[this.car[i].id]
      }
      return total
    }
  },
  methods: {
    add(item) {
      // 先判断商品是否已添加，不存在则添加到 car、nums中
      if (this.buyed.includes(item.id)) {
        for (let index = 0; index < this.car.length; index++) {
          // 判断购物车中是否已存在id
          if (this.car[index].id === item.id) {
            // 判断库存
            if (this.nums[item.id] > item.store) {
              return
            }
            this.nums[item.id] += 1

            this.$set(this.car, index, this.car[index])

            return
          }
        }
        return
      }

      this.$set(this.nums, item.id, 1)

      this.buyed.push(item.id)
      this.car.push(item)
      console.log(this.nums)
    },
    reduce(item) {
      for (let k = 0; k < this.car.length; k++) {
        if (this.car[k].id === item.id) {
          // 购物车 是否存在该商品
          if (this.nums[item.id] === 1) {
            // 数量为1的话， 则删掉这条数据
            this.car.splice(k, 1)
            this.buyed.splice(k, 1)
            delete this.nums[item.id]
            return
          }
          this.car[k].num -= 1
          this.nums[item.id] -= 1
          this.$set(this.car, k, this.car[k])
          return
        }
      }
    },

    empty() {
      // 清空购物车
      this.car = []
      this.nums = []
      this.buyed = []
    }

  }

}
</script>
