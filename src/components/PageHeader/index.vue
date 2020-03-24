<template>
  <div>
    <Breadcrumb />

    <div class="pageHeader">
      <slot />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../breadcrumb'
export default {
  name: 'pageHeader',
  components: {
    Breadcrumb
  },
  data() {
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pageHeader {
  padding: 20px;
  background-color: #fdfdfd;
}
</style>
