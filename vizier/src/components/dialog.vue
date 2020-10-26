<template>
    <v-dialog
      hide-overlay
      v-model="show"
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
  props: {
     value: Boolean
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  },
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

</style>




