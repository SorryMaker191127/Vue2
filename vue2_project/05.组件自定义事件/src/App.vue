<template>
  <div id="app">
    <!-- 在子组件标签中绑定自定义事件 -->
    <HelloWorld @custom-event="customEventFunction" />
    <!-- 自定义事件也能添加事件修饰符 -->
    <HelloWorld @custom-event.once="customEventFunction" />
    <!-- 通过ref绑定自定义事件 -->
    <HelloWorld ref="helloWorld" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    // 自定义事件的处理函数
    customEventFunction(props) {
      console.log("自定义事件被触发了! " + props);
    },
  },
  mounted() {
    // 通过ref绑定自定义事件
    this.$refs.helloWorld.$on("custom-event", this.customEventFunction);
    // 或者绑定带修饰符事件
    //this.$refs.helloWorld.$once("custom-event", this.customEventFunction);
  },
};
</script>

<style></style>
