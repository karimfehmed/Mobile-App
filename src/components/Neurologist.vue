<template>
  <div class="neurologist-card pt-3">
    <h1>Neurologist</h1>
    <div class="neurologist pt-4">
      <DoctorsList
        v-for="(doctor, index) in nurologistList"
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
const nurologistList = computed(() => {
  return store.state.nurologistList;
});

store.dispatch("getNurologist");
</script>
<style lang="scss" scopoed>
.neurologist-card {
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
