import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
//使用插件
import { pluginDefault } from "./plugins.js";
Vue.use(pluginDefault);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
