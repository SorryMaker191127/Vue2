<template>
  <div id="app">
    <CountNumber />
    <NumberControl />
  </div>
</template>

<script>
import CountNumber from "./components/CountNumber.vue"
import NumberControl from "./components/NumberControl.vue";

export default {
  name: "App",
  components: {
    NumberControl,
    CountNumber
  },
};
</script>

<style></style>
