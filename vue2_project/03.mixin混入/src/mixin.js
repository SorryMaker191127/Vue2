/**
 * mixin.js 用于定义混入代码，混入代码可以被多个组件共享
 */
export const HumanMixin = {
  props: ["name"],
  methods: {
    // 混入代码中的方法,不会覆盖组件中的同名方法
    sayHello() {
      console.log("Hello, I'm a " + this.name);
    },
  },
  mounted() {
    // 混入代码中的生命周期钩子函数，会和组件中的生命周期钩子函数合并
    console.log("this is HunmanMixin");
  },
};

export const globalMixin = {
  mounted() {
    console.log("this is globalMixin");
  }
}
