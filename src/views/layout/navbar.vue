<template>
  <div class="top_sec">
    <el-row class="gde_w">
      <el-col :span="1">
		  	<div class="grid-content" style="margin-top:-3px;">
          <svg class="icon navb_i" aria-hidden="true" @click='toggle'>
              <use xlink:href="#icon-zhankai1"></use>
          </svg>
		  	</div>
		  </el-col>
      <el-col :span="18">
		  	<div class="grid-content02 sz_hide">
          <el-breadcrumb separator="/">
            <template v-for="a in breadcrumb">
              <el-breadcrumb-item :to="{ path: '/' }">{{a.name}}</el-breadcrumb-item>
            </template>
          </el-breadcrumb>
		  	</div>

		  </el-col>
      <el-col :span="4" ustify="right">
		  	<div class="grid-content" style="margin-top:-12px;">
          <screenfull></screenfull>
          <themecolor></themecolor>
		  		<el-dropdown>
			      <span class="el-dropdown-link">
			        {{roles}}<i class="el-icon-arrow-down el-icon--right"></i>
			      </span>
			      <el-dropdown-menu slot="dropdown">
              <router-link to="/">
                <el-dropdown-item>
                  首页
                </el-dropdown-item>
              </router-link>
			        <el-dropdown-item>
                <span @click="logout">
                  退出
                </span>
              </el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>
		  	</div>
		  </el-col>
    </el-row>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters} from 'vuex'
  import screenfull from '@/components/screenfull/index'
  import themecolor from '@/components/ThemePicker/themecolor'
	export default{
		name:'navbar',
		data(){
			return{
        breadcrumb:null
			}
		},
    components:{screenfull,themecolor},
    created(){
      this.bread();
    },
    watch:{
      $route() {
        this.bread()
      }
    },
    methods:{
      bread(){
          let matched = this.$route.matched.filter(item => item.name)
          const first = matched[0];
          //console.log(first);
          if (first && first.name !== 'dashboard') {
            matched = [{ path: '/dashboard', meta: { title: 'dashboard' }}].concat(matched)
          }
          this.breadcrumb = matched
      },
      logout(){

      },
      toggle(){
        this.$store.dispatch('sibar_width')
      }
    },
    computed:{
      ...mapGetters([
        'getuser',
        'roles'
      ]),
    }
	}
</script>
<style type="text/css">
	.gde_w{height: 20px;line-height: 20px;padding-top: 18px;}
	.grid-content02{}
  .top_sec{background-color:#fff;height: 50px;box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);}
  .navb_i{width: 15px!important;height: 15px!important; margin-left: 20px;}
  .sz_hide .el-breadcrumb .el-breadcrumb__item:nth-child(1){display: none;}
</style>
