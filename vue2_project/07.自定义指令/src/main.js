import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
//自定义指令(全局)
Vue.directive("randomColor", {
  bind(el, binding) {
    setInterval(() => {
      el.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8);
    }, binding.value);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
