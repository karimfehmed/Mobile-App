<template>
  <div class="carousel-box">
    <v-carousel
      class="carousel"
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-square"
    >
      <v-carousel-item
        v-for="(appoiment, index) in todaysAppoiments"
        :key="index"
      >
        <TodaysAppoiments :appoiments="appoiment" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import TodaysAppoiments from "./TodayAppoiments.vue";
import store from "../store/store";

const todaysAppoiments = computed(() => {
  return store.state.todaysAppoiments;
});
</script>
<style lang="scss">
.carousel {
  height: 200px !important;
  .v-carousel__controls {
    height: 80px;
    color: #36454f;
  }
}
</style>
