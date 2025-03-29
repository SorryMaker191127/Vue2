<template>
  <div class="componentBchild">
    componentCchild
    <div>params id:{{ $route.params.id }}</div>
    <div>params message:{{ $route.params.msg }}</div>
    <hr />
    <div>props params id:{{ id }}</div>
    <div>props params message:{{ msg }}</div>
  </div>
</template>

<script>
export default {
  props: {
    // 这里的props是接收路由配置props后，params传递的参数
    id: {
      type: String,
      default: "defaultId",
    },
    msg: {
      type: String,
      default: "defaultMsg",
    },
  },
};
</script>

<style scoped></style>
