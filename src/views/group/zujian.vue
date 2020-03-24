<template>
  <div>
    <h1>下拉框组件</h1>
    接受值 =={{ val }}
    <dron @childByValue="childByValue"></dron>
  </div>
</template>
<script>
import dron from '@/components/dron'
export default {
  name: 'zuj',
  data() {
    return {
      val: ''
    }
  },
  components: { dron },
  computed: {},
  methods: {
    childByValue: function(childValue, a) {
      // childValue就是子组件传过来的值
      this.val = childValue
    }
  },
  mounted() {}
}
</script>
