<template>
  <body>
    <head>
      <!-- Index Stylesheet -->
      <link rel="stylesheet" href="index.css" />

      <!-- Material Icons -->
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </head>

    <div class="app-header">
      <i class="material-icons" @click.stop="drawer = !drawer">menu</i>
      <div class="title">DEVICE 1</div>
      <i class="material-icons">settings</i>
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

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </body>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      drawer: null,
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: #f2f2f2;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.app-header {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.app-header .material-icons {
  font-size: 50px;
  padding: 40px;
  opacity: 0.45;
  cursor: pointer;
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
</style>
