<template>
    <v-dialog
      hide-overlay
      width="400"
      content-class="round"
    >

        <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
 

          <!-- <v-list-item-content> -->
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          <!-- </v-list-item-content> -->
        </v-list-item>
      </v-list>


    </v-dialog>

</template>


<script>
export default {
  name: "SettingsDialog",
  data() {
    return {
      items: [
        { title: "CHANGE DETAILS", icon: "mdi-checkbox-blank-circle" },
        { title: "PROMPT SIGN IN", icon: "mdi-checkbox-blank-circle" },
        { title: "TURN ON/OFF DEVICE", icon: "" },
        { title: "DELETE DEVICE ENTRY", icon: "" },
      ],
    };
  },
  mounted() {
    console.log ("Mounted");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.round {
  border-radius: 30px;
  overflow-y: hidden;
}

.v-list{
    padding:50px 0px;
}

.v-list-item {
    text-align: center;
    margin:10px;
    padding:25px 10px;
}

.v-list-item-title{
  letter-spacing: 2px;
}

@media screen and (max-width: 480px) {

.v-list{
    padding:30px 0px;
}

}

</style>




