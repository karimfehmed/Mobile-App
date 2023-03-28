<template>
  <v-app>
    <v-main class="mx-auto">
      <router-view class="Main-Container"></router-view>
    </v-main>
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
.Main-Container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.Main-Container::-webkit-scrollbar {
  width: 5px;
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
