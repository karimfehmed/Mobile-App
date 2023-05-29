<template>
  <div class="nutritions-card pt-3">
    <h1>Nutritions</h1>
    <div class="nutritions pt-4">
      <DoctorsList
        v-for="(doctor, index) in nutririonList"
        :key="index"
        :doctor="doctor"
      />
    </div>
    <bottomnavbar />
  </div>
</template>
<script setup lang="ts">
import DoctorsList from "./DoctorsList.vue";
import bottomnavbar from "./BottomNavbar.vue";
import { computed } from "vue";
import store from "../store/store";
const nutririonList = computed(() => {
  return store.state.nutririonList;
});

store.dispatch("getNutrition");
</script>
<style lang="scss" scopoed>
.nutritions-card {
  h1 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #242424;
    text-align: center;
  }
}
</style>
