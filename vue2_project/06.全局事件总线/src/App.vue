<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    this.$bus.$on("appEventBus", (data) => {
      console.log("appEventBus", data);
    });
  },
};
</script>

<style></style>
