import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
//引入store
import store from "./vuex/store.js";

new Vue({
  store, // 注入store
  render: (h) => h(App),
}).$mount("#app");
