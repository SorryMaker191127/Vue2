<template>
  <div class="componentC">
    componentB
    <input type="text" v-model="inputText" placeholder="请输入字符串" />
    <div class="chidNav">
      <!-- 模版字符串写法 -->
      <router-link
        :to="`/componentC/childCParams/${paramsStrId}/${paramsStrMessage}`"
        >childC params模版字符串传参</router-link
      >
      <!-- 对象写法 -->
      <router-link
        :to="{
          // params传参，必须使用name命名路由
          name: 'childCParams',
          params: {
            id: paramsObjId,
            msg: paramsObjMessage,
          },
        }"
        >childC params对象传参</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ComponentC",
  data() {
    return {
      inputText: "",
      paramsStrId: "Str",
      paramsStrMessage: "hello",
      paramsObjId: "Obj",
      paramsObjMessage: "world",
    };
  },
  // 被缓存的组件不会再重新挂载和销毁，会有两个新增的生命周期钩子函数
  // activated: 组件被激活时调用
  activated() {
    console.log("ComponentC activated");
  },
  // deactivated: 组件被停用时调用
  deactivated() {
    console.log("ComponentC deactivated");
  },
  //组件内路由首位
  // 通过路由规则进入时的路由守卫
  beforeRouteEnter(to, from, next) {
    console.log("ComponentC beforeRouteEnter");
  },
  //通过路由规则离开时的路由守卫
  beforeRouteLeave(to, from, next) {
    console.log("ComponentC beforeRouteLeave");
    // next(false); // 取消路由跳转
    next(); // 继续路由跳转
  },
};
</script>

<style scoped>
.chidNav {
  width: 100%;
  height: 30px;
  background-color: #5f5f5f;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
