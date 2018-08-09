<template>
	<el-main>
		<transition name="fade" mode="out-in">
			<keep-alive :include="cachedViews">
				<router-view :key></router-view>
			</keep-alive>
		</transition>
	</el-main>
</template>
<script type="text/javascript">
	export default{
		name:'appMain',
		data(){
			return{
				seh:true,
				csd: [],
			}
		},
		computed: {
			cachedViews() {
				this.csd = this.$store.state.tagsView.cachedViews
				console.log(this.csd)
	      return this.$store.state.tagsView.cachedViews
	    },
	    key() {
	      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
	    }
	  }
	}
</script>
