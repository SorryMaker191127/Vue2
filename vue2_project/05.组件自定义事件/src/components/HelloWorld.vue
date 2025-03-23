<template>
  <div class="helloWorld">
    <button @click="triggerEvent">触发自定义事件</button>
    <br />
    <button @click="unbindEvent">解绑自定义事件</button>
    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    triggerEvent() {
      // 触发自定义事件
      this.$emit("custom-event", "Hello World");
    },
    unbindEvent() {
      // 解绑单个事件
      this.$off("custom-event");
      // 解绑多个事件
      // this.$off(["custom-event1", "custom-event2"]);
      // 解绑所有事件
      // this.$off();
    },
  },
};
</script>

<style scoped></style>
