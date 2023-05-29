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
    <v-btn>
      <img src="../assets/icons/msg.svg" alt="" />
    </v-btn>
    <v-btn>
      <img src="../assets/icons/user.svg" alt="" />
    </v-btn>
  </v-app-bar>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.bottom-navbar {
  height: 60px;
  img {
    cursor: pointer;
  }
}
.v-toolbar__content {
  justify-content: space-between;
}
</style>
