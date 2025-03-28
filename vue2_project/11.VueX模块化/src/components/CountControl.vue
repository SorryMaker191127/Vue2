<template>
  <div class="countControl">
    <input type="number" v-model="inputNumber" />
    <br />
    <button @click="commitControl(inputNumber)">操作Count</button>
    <button @click="ADD_COUNT(inputNumber)">加Count</button>
    <button @click="MINUS_COUNT(inputNumber)">减Count</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      inputNumber: 0,
    };
  },
  methods: {
    ...mapActions("countAbout", {
      commitControl: "controlCount",
    }),
    ...mapMutations("countAbout", ["ADD_COUNT", "MINUS_COUNT"]),
  },
};
</script>

<style scoped></style>
