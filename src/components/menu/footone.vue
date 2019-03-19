<template>
  <div class="foot_one">
    <span
      v-for="(qd,index) in fore"
      :key="index"
      class="nv_body_s"
    >
      {{ qd._record }}{{ qd._copyright }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'Footone',
  data() {
    return {
      fore: [],
      copy: ''
    }
  },
  created() {
    this.menu_fr()
  },
  methods: {
    menu_fr() {
      var self = this

      this.$axios.get('/footlist').then(function(response) {
        self.fore = response.data.data
        // console.log(response.data.data)
      })
    }
  }
}
</script>
<style lang="scss">
.foot_one {
  padding: 20px;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
  border-top: 1px solid #ccc;
}
</style>
