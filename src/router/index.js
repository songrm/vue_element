import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Layout from '../views/layout/Layout'

// import login from '../views/login/login'

//constanRouterMap 不需要权限的公用页面
export const constanRouterMap=[
	{
		path: '/',
		name: '首页',
		component: Layout,
		icon:'#icon-shouye2',
		num_w:"1",
		redirect: '/dashboard/index',
		hidden: true,
		children:
		[
			{ path: '/dashboard/index',name:'dashboard', num_w:"1-1",component: resolve=> {require(['../views/dashboard/index'], resolve)} },
			{ path: '/dashboard/02',name:'dashboard v2', num_w:"1-2",component: resolve=> {require(['../views/dashboard/index02'], resolve)} },
		]
	},
	{
		path: '/login',
		icon:'#icon-zhankai1',
		num_w:"2",
		name: '登录',
		hidden: false,
		component: resolve=> {require(['../views/login/login'], resolve)}
	}
]

//实例化vue 时，只挂载constanRouter
export default new Router(
	{
		routes: constanRouterMap

	}
);

//异步挂载路由。 判断权限加载路由表

export const asyncRouterMap=[
	{
		path: '/icon',
		name: 'icon',
		num_w:"4",
		redirect: '/icon/index',
		icon:'#icon-chanpin2',
		hidden: true,
		component: Layout,
		children:
		[
			{ path: '/icon/index',name:'icon', num_w:"4-1",component: resolve=> {require(['../views/icon/index.vue'], resolve)} },

		],

		meta:{role: ['admin','super_editor']},
	},
	{
		path: '/permission',
		name: '权限',
		num_w:"11",
		redirect: '/permission/index',
		icon:'#icon-quanxian',
		hidden: true,
		component: Layout,
		children:
		[
			{ path: '/permission/index',name:'icon', num_w:"11-1",component: resolve=> {require(['../views/permission/index.vue'], resolve)} },
		],

		meta:{role: ['admin','super_editor']},
	},
	{
		path: '/group',
		name: '组件',
		num_w:"9",
		redirect: '/group/button',
		icon:'#icon-h2',
		hidden: true,
		component: Layout,
		children:
		[
			{ path: '/group/button',name:'button', num_w:"9-1",component: resolve=> {require(['../views/group/button'], resolve)} },
			{ path: '/group/steps',name:'steps', num_w:"9-2",component: resolve=> {require(['../views/group/steps'], resolve)} },
			{ path: '/group/widgets',name:'widgets', num_w:"9-3",component: resolve=> {require(['../views/group/widgets'], resolve)} },
			{ path: '/group/switch',name:'switch', num_w:"9-4",component: resolve=> {require(['../views/group/switch'], resolve)} },
			{ path: '/group/fullcalendar',name:'fullcalendar', num_w:"9-5",component: resolve=> {require(['../views/group/fullcalendar'], resolve)} },
			{ path: '/group/upload',name:'upload', num_w:"9-6",component: resolve=> {require(['../views/group/upload'], resolve)} },
			{ path: '/group/goback',name:'返回顶部', num_w:"9-7",component: resolve=> {require(['../views/group/goback'], resolve)} },
			{ path: '/group/model',name:'模态框', num_w:"9-8",component: resolve=> {require(['../views/group/model'], resolve)} },

		],

		meta:{role: ['admin','super_editor']},
	},
	{
		path: '/chart',
		name: 'chart',
		num_w:"12",
		redirect: '/chart/k_chart',
		icon:'#icon-hangyeshujubaogao',
		hidden: true,
		component: Layout,
		children:
		[
			{ path: '/chart/k_chart',name:'graph', num_w:"12-1",component: resolve=> {require(['../views/chart/k_chart'], resolve)} },
			{ path: '/chart/m_chart',name:'cross', num_w:"12-2",component: resolve=> {require(['../views/chart/m_chart'], resolve)} },
		],

		meta:{role: ['admin','super_editor']},
	},
	{
		path: '/article',
		name: 'article',
		num_w:"10",
		redirect: '/group/article',
		icon:'#icon-chanpin',
		hidden: true,
		component: Layout,
		children:
		[
			{ path: '/group/article',name:'article_list', num_w:"10-1",component: resolve=> {require(['../views/group/article'], resolve)} },
			{ path: '/group/bolg',name:'bolg', num_w:"10-2",component: resolve=> {require(['../views/group/bolg'], resolve)} },
			{ path: '/group/add_bolg',name:'add_bolg', num_w:"10-3",component: resolve=> {require(['../views/group/add_bolg'], resolve)} },
			{ path: '/group/bolg_list',name:'bolg_list', num_w:"10-4",component: resolve=> {require(['../views/group/bolg_list'], resolve)} },
			{ path: '/group/question',name:'question', num_w:"10-5",component: resolve=> {require(['../views/group/question'], resolve)} },
		],

		meta:{role: ['admin','super_editor']},
	},
	{
		path: '/table',
		name: 'table',
		num_w:"7",
		redirect: '/table/dyn_table',
		icon:'#icon-table_format',
		hidden: true,
		component: Layout,
		children:
		[
			{ path: '/table/dyn_table',name:'动态table', num_w:"7-1",component: resolve=> {require(['../views/table/dyn_table.vue'], resolve)} },
			{ path: '/table/tab',name:'tab', num_w:"7-2",component: resolve=> {require(['../views/table/tab.vue'], resolve)} },
			{ path: '/table/multiple_table',name:'综合table', num_w:"7-3",component: resolve=> {require(['../views/table/multiple_table.vue'], resolve)} },
			{ path: '/table/vuex',name:'vuex', num_w:"7-4",component: resolve=> {require(['../views/table/vuex.vue'], resolve)} },
		],

		meta:{role: ['admin','super_editor']},
	},
	{
		path:'/form',
		name:'form',
		num_w:'8',
		redirect:'/form/add_form',
		icon:'#icon-form',
		hidden:'true',
		component:Layout,
		children:[
			{ path: '/form/add_form',name:'创建form', num_w:"8-1",component: resolve=> {require(['../views/form/add_form'], resolve)} },
			{ path: '/form/edit_form',name:'常用form组件', num_w:"8-2",component: resolve=> {require(['../views/form/edit_form'], resolve)} },
			{ path: '/form/login',name:'常用页面组件', num_w:"8-3",component: resolve=> {require(['../views/form/login'], resolve)} },
		]
	},
	{
		path: '/zip',
		name: 'download',
		num_w:"5",
		redirect: '/zip/index',
		icon:'#icon-zip',
		hidden: true,
		component: Layout,
		children:
		[
			{ path: '/zip/index',name:'zip', num_w:"5-1",component: resolve=> {require(['../views/zip/index.vue'], resolve)} },
			{ path: '/zip/pdf',name:'pdf', num_w:"5-2",component: resolve=> {require(['../views/zip/pdf.vue'], resolve)} },
		],
		meta:{role: ['admin','super_editor']},
	},
	{
		path: '/404',
		name: '404',
		num_w:"6",
		redirect: '/404/404.vue',
		icon:'#icon-404',
		hidden: true,
		component: Layout,
		children:
		[
			{ path: '/404',name:'404', num_w:"6-1",component: resolve=> {require(['../views/404/404.vue'], resolve)} },
		],

		meta:{role: ['admin','super_editor']},
	}
]
