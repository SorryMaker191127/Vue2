<template>
  <div class="countShow">
    <div>Count:{{ count }}</div>
    <div>CountPlus:{{ plusCount }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("countAbout", ["count"]),
    ...mapGetters("countAbout", ["plusCount"]),
  },
};
</script>

<style scoped></style>
