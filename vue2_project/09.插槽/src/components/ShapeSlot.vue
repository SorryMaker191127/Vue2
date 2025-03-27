<template>
  <div class="shapeSlot">
    <div class="shapeContent">
      <h3 class="shapeName">{{ shapeName }}</h3>
      <div class="shapePlace">
        <slot></slot>
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

.shapeName {
  width: 100%;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background-color: #f0f0f0;
}

.shapePlace {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
