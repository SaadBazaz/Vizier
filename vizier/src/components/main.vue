<head>
  <!-- Index Stylesheet -->
  <link rel="stylesheet" href="index.css" />

  <!-- Material Icons -->
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
</head>


<template>
<v-app :style="{background: $vuetify.theme.themes.light.background}">

    <v-layout column wrap>
    <div class="app-header">
      <v-btn icon @click.stop="drawer = !drawer">
        <i class="material-icons">menu</i>
      </v-btn>

      <div class="title">{{msg}}</div>

      <v-btn icon @click.stop = "dialog = true">
        <i class="material-icons">settings</i>
      </v-btn>
    </div>

    <div class="app-body">
      <div class="device-pins">
        <div class="pin-column">
          <div class="pin-circle active on"></div>
          <div class="pin-circle inactive"></div>
          <div class="pin-circle inactive"></div>
        </div>

        <div class="pin-column">
          <div class="pin-circle active"></div>
          <div class="pin-circle active"></div>
          <div class="pin-circle active"></div>
        </div>
      </div>
    </div>

    <SettingsDialog v-model="dialog" />
    <MainAppDrawer v-model="drawer" />

    </v-layout>
  </v-app>
</template>

<script>

import SettingsDialog from "./SettingsDialog.vue"
import MainAppDrawer from "./MainAppDrawer.vue"

export default {
  name: "HelloWorld",
  data() {
    return {
      dialog: false,
      drawer: false,
      items: [
        { title: "Device 1", icon: "mdi-checkbox-blank-circle" },
        { title: "Device 2", icon: "mdi-checkbox-blank-circle" },
        { title: "Device 3", icon: "" },
      ],
    };
  },
  components: {
    SettingsDialog,
    MainAppDrawer
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

html { overflow-y: auto }

body {
  background-color: #f2f2f2;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}



.v-application {
   /* font-family: $body-font-family, "Segoe UI", sans-serif !important; */

 }


.app-header {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 55px;
}

.app-header .material-icons {
  font-size: 50px;
  margin: 10px;
  opacity: 0.45;
  cursor: pointer;
}

.app-header .v-btn {
  height:60px;
}

.app-header .material-icons:active {
  opacity: 0.2;
}

.app-header .title {
  font-size: 25px;
  padding: 40px;
  letter-spacing: 10;
  font-weight: bold;
  color: #707070;
}

.app-body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.device-pins {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin: 10px 600px; */
}

.pin-column {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}

.pin-circle {
  background-color: #515151;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin: 60px;
  cursor: pointer;
  transition: 0.8s ease-out;
}

.active:hover {
  transform: scale(0.75, 0.75);
  transition: 0.2s ease-out;
}

.pin-circle:active {
  opacity: 0.5;
  transition: 0.1s ease-out;
}

.active {
  opacity: 1;
}

.on {
  opacity: 1;
  background-color: #08cf30;
}

.inactive {
  opacity: 0.25;
}


@media screen and (max-width: 480px) {
  .app-header .material-icons {
    font-size: 35px;
/*    padding: 30px;*/
    transition: 0.2s;
  }



  .app-header .title {
    font-size: 20px;
    padding: 25px;
    transition: 0.2s;
  }
}
</style>
