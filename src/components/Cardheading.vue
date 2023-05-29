<template>
  <div class="messages-heading px-4">
    <div class="inner-content d-flex justify-space-between align-center">
      <router-link to="/inbox">
        <img src="../assets/icons/back.png" alt="Logo" class="Backicon" />
      </router-link>
      <p class="mx-auto">Dr.Joseph Steven</p>
    </div>
    <v-divider></v-divider>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.messages-heading {
  img {
    height: 18.75px;
    width: 18.75px;
    cursor: pointer;
  }
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #242424;
  }
  .inner-content {
    height: 100%;
  }
}
</style>
