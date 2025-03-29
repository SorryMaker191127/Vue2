<template>
  <div class="componentA">
    componentA
    <div class="chidNav">
      <router-link to="/componentA/childA_1" active-class="green"
        >childA_1</router-link
      >
      <router-link to="/componentA/childA_2" active-class="green"
        >childA_2</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.chidNav {
  width: 100%;
  height: 30px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.green {
  color: green;
}
</style>
