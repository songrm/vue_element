import Vue from "vue";
import Toast from "@/components/Toast"; // 引入组件
const ToastConstructor = Vue.extend(Toast); // 返回一个“扩展实例构造器”

const myToast = (text, duration, style) => {
  const toastDom = new ToastConstructor({
    el: document.createElement("div") // 将toast组件挂载到新创建的div上
  });

  document.body.appendChild(toastDom.$el); // 把toast组件的dom添加到body里

  toastDom.text = text;
  toastDom.duration = duration;
  toastDom.a = style;

  // 在指定 duration 之后让 toast消失
  setTimeout(() => {
    toastDom.isShow = false;
  }, toastDom.duration);
};

export default myToast;
