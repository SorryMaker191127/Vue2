<template>
  <div id="app">
    <HelloWorld v-bind="{appMsg,appNumber}"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      appMsg: "this is app message",
      appNumber:10
    }
  }
};
</script>

<style></style>
