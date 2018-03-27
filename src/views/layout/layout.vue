<template>
	<el-container :class="{'hidesider':showe}">
		<sidebar></sidebar>
		<el-container class="is-vertical">
		    <navbar></navbar>
		    <app-main></app-main>
		</el-container>
	</el-container>
</template>


<script type="text/javascript">
	import sidebar from './sidebar'
	import navbar from './navbar'
	import appMain from './appMain'

	export default{
		name:'layout',
		data(){
			return{

			}
		},
		components: { navbar,appMain,sidebar },
	  computed: {
	    showe() {
	      return this.$store.state.sidebar.sbar_width
	    }
	  }
	}
</script>
<style >
	.hidesider .scroll-container,.hidesider .el-menu{width: 64px!important;}
</style>
