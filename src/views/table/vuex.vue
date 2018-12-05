<template>
  <div>
    <h1>vuex</h1>
    文字显示{{ getuser }}
    <el-button @click="click_me">点击</el-button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Vuex',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'getuser'
    ])
  },
  methods: {
    click_me() {
      this.$store.dispatch('get_user', 'admin')
    }

  }
}
</script>
