<template>
  <div>
    <h1>vuex</h1>
    文字显示{{getuser}}
    <el-button @click="click_me">点击</el-button>
  </div>
</template>
<script>
 import { mapGetters ,mapActions} from 'vuex'

  export default{
    name:"vuex",
    data(){
      return {

      }
    },
    computed:{
 	    	// getuser(){
        //   return this.$store.state.getuser;
        // },

        ...mapGetters([
          'getuser'
		    ]),

 		 },
     methods:{
       click_me(){
         this.$store.dispatch('get_user',"admin")
       },

     }
  }
</script>
