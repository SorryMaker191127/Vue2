<template>
  <div id="app">
    <CountShow />
    <CountControl />
  </div>
</template>

<script>
import CountControl from "./components/CountControl.vue";
import CountShow from "./components/CountShow.vue";
export default {
  name: "App",
  components: {
    CountControl,
    CountShow,
  },
};
</script>

<style></style>
