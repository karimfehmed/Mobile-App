<template>
  <div class="d-flex justify-center Button">
    <v-btn class="cardButton" :height="height" :width="width">{{
      title
    }}</v-btn>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  width: string;
  height: string;
}>();
</script>

<style scoped lang="scss">
.cardButton {
  text-transform: capitalize;
  background-color: #cc5500;
  border-radius: 12px;
  box-shadow: none;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  color: white;
}
</style>
