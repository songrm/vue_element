import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";
import "../../servers/mongodb";

const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL:
    "https://www.easy-mock.com/mock/5b4eaf7956c59c6f562661db/component/01",
  timeout: 5000 // 请求超时时间
});
// https://www.easy-mock.com/mock/59fffc51ab1a494a37b36d3f/ceshi
// https://www.easy-mock.com/mock/5b4eaf7956c59c6f562661db/component/01

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      console.log(config, "configconfigconfigconfigconfig====");
      config.headers["X-Token"] = getToken();
      config.headers["wewew"] = "getToken()";
    }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  // response => response,

  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data;
    // console.log(res.code)
    if (res.code !== 200 && res.code !== "200") {
      Message({
        message: res.message,
        type: "error",
        duration: 5 * 1000
      });
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      console.log("response code: " + res.code);
      // if (res.code === 50012 || res.code === 50014 || res.code === 50008) {
      //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload()// 为了重新实例化vue-router对象 避免bug
      //     })
      //   })
      // }
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  error => {
    // 401:非法的token或token过期了
    // console.log('err: ' + error)// for debug
    // console.log(error.response)
    console.log(error.response.data);
    console.log(error.response.status);
    // console.log(error.response.headers)

    if (error.response) {
      const res = error.response;
      if (res.status === 401) {
        console.log(error.response.data.message);
        // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('FedLogOut').then(() => {
        //     location.reload()// 为了重新实例化vue-router对象 避免bug
        //   })
        // })
      } else if (res.status === 403) {
        Message({
          message: "没有操作权限",
          type: "error",
          duration: 5 * 1000
        });
        return Promise.reject(null);
      } else {
        // console.log('response error: ' + res.data.message)
        Message({
          message: res.data.message,
          type: "error",
          duration: 5 * 1000
        });
      }
    } else if (error.request) {
      // console.log('error.request: ' + error.request)
      Message({
        message: error.message,
        type: "error",
        duration: 5 * 1000
      });
    } else {
      // console.log('else Error: ', error.message)
      Message({
        message: error.message,
        type: "error",
        duration: 5 * 1000
      });
    }
    return Promise.reject(error);
  }
);

export default service;
