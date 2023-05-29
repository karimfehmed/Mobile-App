<template>
  <v-app>
    <v-layout class="main-layout">
      <v-main class="main-container mx-auto bg-white">
        <router-view class="main-view"></router-view>
      </v-main>
      <router-view name="BottomNavbar"></router-view>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  components: {},

  data() {
    return {
      //
    };
  },
});
</script>
<style scoped lang="scss">
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
  width: 0;
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
