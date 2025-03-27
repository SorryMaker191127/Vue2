<template>
  <div class="nameShapeSlot">
    <div class="shapeContent">
      <div class="shapePlace">
        <slot name="firstShape"></slot>
      </div>
      <div class="shapePlace">
        <slot name="secondShape"></slot>
      </div>
      <div class="shapePlace">
        <slot name="lastShape"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shapeName"],
};
</script>

<style scoped>
.shapeContent {
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
}

.shapePlace {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
