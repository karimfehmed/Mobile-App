<template>
  <div class="opthal-card pt-3">
    <h1>Opthal</h1>
    <div class="opthal pt-4">
      <DoctorsList
        v-for="(doctor, index) in opthalList"
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
const opthalList = computed(() => {
  return store.state.opthalList;
});

store.dispatch("getOpthal");
</script>
<style lang="scss" scopoed>
.opthal-card {
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
