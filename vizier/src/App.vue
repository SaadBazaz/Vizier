<template>
  <HelloWorld :msg="info" />
</template>

<script>
import HelloWorld from "./components/main.vue";
import axios from 'axios'


axios.interceptors.response.use(
function(response) { return response;}, 
function(error) {
    // handle error
    console.log ("Error == ", error)
    console.log ("Error.code == ", error.code)
    console.log ("Error.response == ", error.response)
    console.log ("Error.status == ", error.status)
    if (error.code === 'ECONNABORTED') {
    // Timeout error
        alert("The device is not responding. Please check its internet connection or reboot it.");
    }
    else if (error.status === 404){
        alert("This route does not exist on the device. Please edit it and try again.");
    }
    else if (error.status === 500){
        alert("The device is bugging out! Try rebooting it.");
    }
    else if (!error.status) {
        alert("Oops! Seems like you aren't connected to the Internet, or the device is not responding.");
    }
});

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
