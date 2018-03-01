import router from './router'
import store from './store'
import { constanRouterMap, asyncRouterMap } from './router/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外

export function clearCookie () {
    this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
  }

export function getCookie(){

	if (document.cookie.length>0) {
	  var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下

    for(var i=0;i<arr.length;i++){
	    var arr2=arr[i].split('=');//再次切割

      if(arr2[1]!=''||arr2[1]!=null){
        return true
      }

      //判断查找相对应的值
	    // if(arr2[1]==name){
	    //   //return arr2[1];//保存到保存数据的地方
	    // 	return true
	    // }else if(arr2[0]=='userPwd'){
	    //   //alert(arr2[1]);
	    // }else{
	    // 	return false
	    // }
	  }
	}else {
	  return false
	}

}



const whiteList = ['/login']// 不重定向白名单

//添加路由规则
let registerRouteFresh = true
router.beforeEach((to,form,next)=>{
  NProgress.start();
  // console.log(store.getters.getuser);
	if(getCookie()){

		if (to.path == '/login') {
	      	next({ path: '/' })
          NProgress.done();
	    }else{
        if(registerRouteFresh){

          store.dispatch('getroler').then((response)=>{
      		  	const roles = response.data.data[0].role;
              console.log(response.data.data[0])
              console.log('roles='+roles)
      		  	store.dispatch('add_roee', { roles }).then(() => { // 生成可访问的路由表
                    router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                    next({ ...to }) // hack方法 确保addRoutes已完成
      	        })

      		})

          registerRouteFresh=false;
        }else {

        }

        next();
	    }

	}else{

		if(whiteList.indexOf(to.path)!==-1){
			next()
		}else{
			next('/login')
      NProgress.done();
		}
	}

});
router.afterEach(transition => {
  NProgress.done();
});
