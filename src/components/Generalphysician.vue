<template>
  <div class="generalphysician-card pt-3">
    <h1>General Physician</h1>
    <div class="generalphysician pt-4">
      <DoctorsList
        v-for="(doctor, index) in generalList"
        :key="index"
        :doctor="doctor"
      />
    </div>
    <div class="pt-4">
      <bottomnavbar />
    </div>
  </div>
</template>
<script setup lang="ts">
import DoctorsList from "./DoctorsList.vue";
import bottomnavbar from "./BottomNavbar.vue";
import { computed } from "vue";
import store from "../store/store";
const generalList = computed(() => {
  return store.state.generalList;
});

store.dispatch("getGeneral");
</script>
<style lang="scss" scoped>
.generalphysician-card {
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
