<template>
  <div>
    我是404
    <img class="pic-404" :src="img_404" alt="404" />
  </div>
</template>
<script>
import img_404 from "@/assets/404.png";
export default {
  name: "404",
  data() {
    return {
      img_404
    };
  }
};
</script>
<style>
.pic-404 {
  width: 100%;
}
</style>
