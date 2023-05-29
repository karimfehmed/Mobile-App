<template>
  <div class="pediatic-card pt-3">
    <h1>Pediatic</h1>
    <div class="pediatic pt-4">
      <DoctorsList
        v-for="(doctor, index) in pediatricList"
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
const pediatricList = computed(() => {
  return store.state.pediatricList;
});

store.dispatch("getPediatric");
</script>
<style lang="scss" scopoed>
.pediatic-card {
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
