<template>
    <v-navigation-drawer v-model="show"
    absolute
    temporary
    hide-overlay>
    <div class="content">
      <v-list-item class="profile">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Saad Bazaz</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    </v-navigation-drawer>
</template>


<script>

export default {
  name: "MainAppDrawer",
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
        { title: "Device 1", icon: "mdi-checkbox-blank-circle" },
        { title: "Device 2", icon: "mdi-checkbox-blank-circle" },
        { title: "Device 3", icon: "" },
      ],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin:0;
    padding:0;
}
.round {
  border-radius: 30px;
  overflow-y: hidden;
}

.v-list{
    padding:50px 0px;
}

.v-list-item {
    /* border-radius: 20px; */
    text-align: center;
    margin:35px;
    padding:10px 5px;
}

.v-list-item-title{
  letter-spacing: 2px;
  font-size: 40px;
}

@media screen and (max-width: 480px) {

.v-list{
    padding:30px 0px;
}

}

</style>