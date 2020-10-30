<template>
  <HelloWorld :msg="info" />
</template>

<script>
import HelloWorld from "./components/main.vue";
import axios from 'axios'

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://baadal.ddns.net:8088/getBaseURL')
      .then(response => (this.info = response.data))
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
