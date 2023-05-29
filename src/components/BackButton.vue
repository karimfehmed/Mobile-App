<template>
  <div class="back">
    <img
      src="../assets/icons/back.png"
      alt="Logo"
      class="Backicon"
      @click="goBack"
    />
  </div>
</template>
<script setup lang="ts">
const goBack = () => {
  window.history.back();
  console.log("Back");
};
</script>
<style lang="scss" scoped>
.back {
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
