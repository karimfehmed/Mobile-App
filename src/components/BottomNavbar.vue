<template>
  <v-app-bar
    class="bottom-navbar d-flex justify-space-around pb-8"
    location="bottom"
  >
    <v-btn>
      <router-link to="/newuser">
        <img src="../assets/icons/home.svg" alt="" />
      </router-link>
    </v-btn>
    <v-btn>
      <router-link to="/allappoiments">
        <img src="../assets/icons/clock.svg" alt="" />
      </router-link>
    </v-btn>
    <v-btn>
      <img src="../assets/icons/medic.svg" alt="" />
    </v-btn>
    <v-btn router to="/inbox">
      <img src="../assets/icons/msg.svg" alt="" />
    </v-btn>
    <v-tooltip text="Log Out" location="top">
      <template v-slot:activator="{ props }">
        <v-btn @click="logout" v-bind="props">
          <v-icon class="logout-icon">mdi-logout</v-icon>
        </v-btn>
      </template>
    </v-tooltip>
  </v-app-bar>
</template>
<script setup lang="ts">
import { ref } from "vue";
import store from "../store/store";

const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);

const handleClick = (item: { title: string }) => {
  console.log(`Clicked: ${item.title}`);
};
const logout = () => {
  store.dispatch("LogOut");
};
</script>
<style lang="scss">
.bottom-navbar {
  height: 60px;
  img {
    cursor: pointer;
  }

  .user-list {
    cursor: pointer;
  }

  .v-menu > .v-overlay__content {
    left: 571px !important;
  }

  .v-overlay__content {
    left: 500px !important;
  }
  .v-toolbar__content {
    justify-content: space-between;
  }
  .logout-icon {
    font-size: 25px;
    color: #b1b1b1;
  }
}
</style>
