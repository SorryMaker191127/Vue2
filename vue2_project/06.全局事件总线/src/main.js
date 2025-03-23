import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
//创建全局事件总线：
//1.获取VC构造函数
let vueComponentCunstructor = Vue.extend({});
//2.创建VC实例
let eventBus = new vueComponentCunstructor();
//3.挂载到Vue原型对象上
Vue.prototype.$bus = eventBus;

new Vue({
  render: (h) => h(App),
  //以上创建公共事件总线的代码，可以放在这里并简写为：
  // beforeCreate() {
  //   Vue.prototype.$bus = this;
  // },
}).$mount("#app");
