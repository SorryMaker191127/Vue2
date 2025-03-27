<template>
  <div id="app">
    <h2>默认插槽</h2>
    <ShapeSlot shapeName="square">
      <div class="square"></div>
    </ShapeSlot>
    <hr>
    <h2>具名插槽</h2>
    <NameShapeSlot>
      <!-- 具名插槽3种形式 -->
      <template #lastShape>
        <div class="round"></div>
      </template>
      <template v-slot:firstShape>
        <div class="square"></div>
      </template>
      <template slot="secondShape">
        <div class="rectangle"></div>
      </template>
    </NameShapeSlot>
    <hr>
    <h2>作用域插槽</h2>
    <ScopeShapeSlot>
      <!-- scope接收作用域插槽传递的参数 -->
      <template scope="{ shapeName }">
        <div class="shapePlace" v-for="(shape, index) in shapeName" :key="index">
          <div :class="shape"></div>
        </div>
      </template>
    </ScopeShapeSlot>
  </div>
</template>

<script>
import ShapeSlot from "./components/ShapeSlot.vue";
import NameShapeSlot from "./components/NameShapeSlot.vue";
import ScopeShapeSlot from "./components/ScopeShapeSlot.vue";

export default {
  name: "App",
  components: {
    ShapeSlot,
    NameShapeSlot,
    ScopeShapeSlot
  },
};
</script>

<style>
.square {
  width: 150px;
  height: 150px;
  background-color: #4CAF50;
}

.rectangle {
  width: 150px;
  height: 100px;
  background-color: #2196F3;
}

.round {
  width: 150px;
  height: 150px;
  background-color: #FF5733;
  border-radius: 50%;
}
</style>
