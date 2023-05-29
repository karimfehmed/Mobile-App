<template>
  <div class="dentist-card pt-3">
    <h1>Dentist</h1>
    <div class="dentists py-4">
      <DoctorsList
        v-for="(doctor, index) in dentistList"
        :key="index"
        :doctor="doctor"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import DoctorsList from "./DoctorsList.vue";
import bottomnavbar from "./BottomNavbar.vue";
import store from "../store/store";
import { computed } from "vue";
store.dispatch("getSpecialist");
const getDoctorslist = () => {
  store.dispatch("getDoctorslist");
};

const dentistList = computed(() => {
  return store.state.dentistList;
});

store.dispatch("getDentists");
</script>
<style lang="scss" scoped>
.dentist-card {
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
