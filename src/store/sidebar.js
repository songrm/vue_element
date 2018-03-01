import { constanRouterMap, asyncRouterMap } from '../router/index'
import axios from 'axios'

//axios.defaults.baseURL = 'https://www.easy-mock.com/mock/59fffc51ab1a494a37b36d3f/';
axios.defaults.baseURL = 'http://localhost:8087/api';
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const sidebar={
	state:{
		routers: constanRouterMap,
		addRouters: [],
		roles:[],
    sbar_width:false
	},
	mutations: {
	    SET_ROUTERS: (state, routers) => {
	      state.addRouters = routers
	      state.routers = constanRouterMap.concat(routers)

	    },
      SET_TOLES(state,roles){
        	console.log('roles== ', roles);
        	state.roles = roles
      },
      SET_SBWIDTH(state){
        state.sbar_width =! state.sbar_width;
      }

	},
	actions:{
		    add_roee({commit},data) {
	        return new Promise(resolve => {
		        const { roles } = data
		        let accessedRouters
		        if (roles.indexOf('admin') >= 0) {
		          accessedRouters = asyncRouterMap
		        } else {
		          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
		        }
		        commit('SET_ROUTERS', accessedRouters)
		        resolve()
	      	})

        },

        getroler({commit,state}){

        	return new Promise((resolve, reject)=>{
        		//axios.get('https://www.easy-mock.com/mock/59fffc51ab1a494a37b36d3f/ceshi/login')
            axios.get('/userlist')
    				.then(function (response) {
              //console.log(response.data)
    					const dataww = response.data.data
              //console.log(dataww[0].role)
    					commit("SET_TOLES",dataww[0].role);
    					resolve(response)
    				})
    				.catch(function (error) {
    					console.log(error);
    				});
        	})
        	// commit("SET_TOLES",role);
        },
        sibar_width({ commit }){
          commit('SET_SBWIDTH')
        }

	}
}
export default sidebar
