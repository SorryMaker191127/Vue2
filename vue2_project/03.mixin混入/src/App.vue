<template>
  <div id="app">
    <People name="People"/>
    <Person name="Person"/>
  </div>
</template>

<script>
import People from './components/People.vue';
import Person from './components/Person.vue';



export default {
  name: "App",
  components: {
    People,
    Person
  },
};
</script>

<style></style>
