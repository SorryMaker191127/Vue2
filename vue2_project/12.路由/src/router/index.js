import VueRouter from "vue-router";
import ComponentA from "../pages/ComponentA.vue";
import ComponentB from "../pages/ComponentB.vue";
import ComponentC from "../pages/ComponentC.vue";
const router = new VueRouter({
  // mode: "hash", //使用hash模式 # 哈希值不会被发送到服务器
  // hash模式下，路由跳转不会刷新页面
  mode: "history", //使用history模式
  routes: [
    {
      path: "/componentA",
      component: ComponentA,
      meta: {
        requireAuth: true, //需要权限验证
      },
      // 组件A的子路由
      children: [
        {
          path: "childA_1",
          component: () =>
            import("../pages/ComponentAChildren/ComponentAChild_1.vue"),
        },
        {
          path: "childA_2",
          component: () =>
            import("../pages/ComponentAChildren/ComponentAChild_2.vue"),
        },
      ],
    },
    {
      path: "/componentB",
      component: ComponentB,
      children: [
        {
          path: "childBQuery",
          component: () =>
            import("../pages/ComponentBChildren/ComponentBchildQuery.vue"),
          //路由的props配置
          //使用query传参时,props需要使用函数形式，返回的对象会将query参数映射到组件的props中
          props($route) {
            return {
              id: $route.query.id,
              msg: $route.query.msg,
            };
          },
        },
      ],
      //独享路由守卫
      beforeEnter(to, from, next) {
        console.log("独享路由守卫");
        // console.log(to);
        // console.log(from);
        setTimeout(() => {
          next();
        }, 2000);
      },
    },
    {
      name: "componentC",
      path: "/componentC",
      component: ComponentC,
      children: [
        {
          name: "childCParams",
          path: "childCParams/:id/:msg",
          component: () =>
            import("../pages/ComponentCChildren/ComponentCChildParams.vue"),
          //路由的props配置
          //当配置为true,路由会将params参数映射到组件的props中
          props: true,
        },
      ],
    },
  ],
});
//全局路由守卫
router.beforeEach((to, from, next) => {
  //最好给所有路由添加name属性
  //如果要放行路由，必须调用next()
  //如果不调用next()，路由不会跳转
  //这里可以做一些权限验证
  //可以设定哪些路由需要权限验证，添加到路由meta中
  if (to.meta.requireAuth) {
    console.log("全局路由守卫");

    setTimeout(() => {
      next();
    }, 1000);
  } else {
    next();
  }
});
//全局后置钩子
router.afterEach((to, from) => {
  // console.log("全局后置钩子");
  // console.log(to);
  // console.log(from);
  // console.log("路由跳转完成");
});
export default router;
