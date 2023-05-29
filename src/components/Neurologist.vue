<template>
  <div class="neurologist-card pt-3">
    <h1>Neurologist</h1>
    <div class="neurologist pt-4">
      <DoctorsList
        patients="5000+"
        rating="5.0"
        experience="10+"
        totalreviews="4,942"
        reviews="5.0 / 177 Reviews"
        doctorname="Dr Sanjeed Islam"
        specialtization="Neurologist"
        aboutdoctor="Dr. Sanjeed is the top most Immunologist specialist in christ Hospital at London. She achived several awards for her wonderful contribution in medical field. She is available for private consultation."
        worktime="Monday - Friday , 08:00 AM - 20:00 PM"
      />
    </div>
    <bottomnavbar />
  </div>
</template>
<script setup lang="ts">
import DoctorsList from "./DoctorsList.vue";
import bottomnavbar from "./BottomNavbar.vue";
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
