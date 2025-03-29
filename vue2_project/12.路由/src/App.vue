<template>
  <div id="app">
    <div class="nav">
      <router-link to="/componentA" active-class="redFont"
        >componentA</router-link
      >
      <router-link replace to="/componentB" active-class="redFont"
        >componentB</router-link
      >
      <!-- 使用name命名路由 -->

      <router-link :to="{ name: 'componentC' }" active-class="redFont"
        >componentC</router-link
      >
    </div>
    <!-- 使用keep-alive缓存组件，include中是组件名 -->
    <keep-alive :include="['ComponentC']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: aqua;
}
.redFont {
  color: red;
}
</style>
