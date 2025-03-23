//每个插件都是一个对象，包含install方法
export const pluginDefault = {
  install(Vue, options) {
    // 可自定义插件内容，如全局方法、指令、混合、过滤器等
    console.log("pluginDefault install");
  },
};
