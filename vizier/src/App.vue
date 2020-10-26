<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/main.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}
#app {
  margin-top: -0px !important;
}
</style>
