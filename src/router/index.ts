import Vue from "vue";
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Layout from '../layout/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: Layout,
    icon:'#icon-shouye2',
		num_w:"1",
    hidden: true,
    children:[
      {
        path: "/home/a",
        name: "首页1",
        component: () =>
        import("../views/dashboard/index.vue")
      },
      {
        path: "/home/b",
        name: "首页2",
        component: () =>
        import("../views/dashboard/index02.vue")
      }
    ]

  },
  {
    path: "/form",
    name: "表单",
    hidden: true,
    component: Layout,
    num_w:"2",
    icon:'#icon-iconfontyouhuiquan',
    children:[
      {
        path: "/form/add",
        name:'添加表单',
        component: () =>
        import("../views/form/add_form.vue")
      },
      {
        path: "/form/edit",
        name:'编辑表单',
        component: () =>
        import("../views/form/edit_form.vue")
      }
    ]
  },{
    path: "/permission",
    name: "权限",
    hidden: true,
    component: Layout,
    num_w:"0",
    icon:'#icon-quanxian',
    children:[
      {
        path: "/permission",
        name:'权限',
        component: () =>
        import("../views/permission/index.vue")
      }
    ]
  },
  {
    path: "/building/index",
    name: "页面管理",
    hidden: true,
    component: Layout,
    num_w:"2",
    icon:'#icon-iconfontyouhuiquan',
    children:[
      {
        path: "/building/index",
        name:'页面管理',
        component: () =>
        import("../views/building/index.vue")
      }
    ]
  },
  {
    path: "/design/index",
    name: "组件页面",
    hidden: true,
    component: Layout,
    num_w:"3",
    icon:'#icon-iconfontyouhuiquan',
    children:[
      {
        path: "/design/index",
        name:'组件',
        component: () =>
        import("../views/design/index.vue")
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    hidden: true,
    component: Layout,
    num_w:"4",
    icon:'#icon-iconfontyouhuiquan',
    children:[
      {
        path: "/404",
        name:'404',
        component: () =>
        import("../views/404/404.vue")
      },

    ]
  },
  {
    path: "/website",
    name: "建站",
    hidden: true,
    component: Layout,
    num_w:"4",
    icon:'#icon-iconfontyouhuiquan',
    children:[
      {
        path: "/website",
        name:'website',
        component: () =>
        import("../views/website/home.vue")
      },

    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export const constanRouterMap=routes
export const asyncRouterMap=[]

export default router;
