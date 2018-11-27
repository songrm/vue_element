<template>
  <div class="foot_one">
    <span v-for='(qd,index) in fore' class="nv_body_s">
        {{qd._record}}{{qd._copyright}}
    </span>
  </div>
</template>
<script>
export default{
  name: 'footone',
  data () {
    return {
      fore: [],
      copy: ''
    }
  },
  methods: {
    menu_fr () {
      var self = this
      this.$axios.get('/footlist').then(function (response) {
        self.fore = response.data.data
          // console.log(response.data.data)
      })
    }
  },
  created () {
    this.menu_fr()
  }
}
</script>
<style lang="scss">
.foot_one{padding: 20px;text-align: center;font-size: 14px;background-color: #fff;border-top:1px solid #ccc}
</style>
