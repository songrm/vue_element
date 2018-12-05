<template>
  <div>
    <h3>我是子组件</h3>
    <span @click="time(1)">今天</span>
    <span @click="time(2)">明天</span>
    <span @click="time(3)">后天</span>
    <input
      v-model="start"
      type="text"
      @change="waw"
    >
  </div>
</template>
<script>
export default {
  name: 'Ch',
  data() {
    return {
      start: ''
    }
  },
  methods: {
    time(num) {
      if (num === 1) {
        this.start = '2017-09-18 00:00:00'
        // this.$emit('ievent', '2017-09-09 00:00:00', '2017-09-09 00:00:00')
      }
    },
    waw() {
      this.$emit('start', this.start, '2017-09-09 00:00:00')
    }
  }
}
</script>

