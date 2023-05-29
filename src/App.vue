<template>
  <v-app>
    <div class="pre-loader mx-auto" v-if="store.state.bodyLoader">
      <img src="./assets/images/loader.26e2ff2.gif" alt="" />
    </div>
    <v-layout class="main-layout" v-else>
      <v-main class="main-container mx-auto bg-white">
        <router-view class="main-view"></router-view>
      </v-main>
      <router-view name="BottomNavbar"></router-view>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import store from "./store/store";

store.dispatch("getCurrentpatientDetails");
</script>
<style scoped lang="scss">
.pre-loader {
  align-items: center;
  display: flex;
  width: 393px;

  justify-content: center;
  height: 100vh;
  background-color: #fff;

  img {
    width: 80px;
  }
}
.main-layout {
  position: fixed;
  width: 393px;
  margin: auto;
}
.main-container {
  width: 393px;
  height: 100vh;
  margin: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
.main-container::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
