<template>
  <div class="componentBchild">
    componentBchild
    <div>query id:{{ $route.query.id }}</div>
    <div>query message:{{ $route.query.msg }}</div>
    <hr />
    <div>props query id:{{ id }}</div>
    <div>props query message:{{ msg }}</div>
  </div>
</template>

<script>
export default {
  props: {
    // 这里的props是接收路由配置props后，query传递的参数
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
