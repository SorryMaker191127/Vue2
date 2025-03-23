<template>
  <div class="helloWorld">
    <button @click="triggerEventBus">触发app全局事件总线</button>
  </div>
</template>

<script>
export default {
  methods: {
    triggerEventBus() {
      this.$bus.$emit("appEventBus", "HelloWorld");
    },
  },
};
</script>

<style scoped></style>
