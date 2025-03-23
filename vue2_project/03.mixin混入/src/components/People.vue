<template>
  <div class="people">
    <h1>{{ name }}</h1>
    <button @click="sayHello">sayHello</button>
    <hr />
  </div>
</template>

<script>
//局部混合
import { HumanMixin } from "@/mixin.js";
export default {
  mixins: [HumanMixin],
};
</script>

<style scoped></style>
