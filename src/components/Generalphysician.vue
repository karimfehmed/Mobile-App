<template>
  <div class="generalphysician-card pt-3">
    <h1>General Physician</h1>
    <div class="generalphysician pt-4">
      <DoctorsList
        patients="5000+"
        rating="5.0"
        experience="10+"
        totalreviews="4,942"
        reviews="5.0 / 177 Reviews"
        doctorname="Dr Suraj"
        specialtization="Dentist"
        aboutdoctor="Dr. Aman Bumrow is the top most Immunologist specialist in christ Hospital at London. She achived several awards for her wonderful contribution in medical field. She is available for private consultation."
        worktime="Monday - Friday , 08:00 AM - 20:00 PM"
      />
    </div>
    <div class="pt-4">
      <DoctorsList
        patients="5000+"
        rating="4.7"
        experience="10+"
        totalreviews="4,942"
        reviews="5.0 / 177 Reviews"
        doctorname="Dr Rozmeen"
        specialtization="Dentist"
        aboutdoctor="Dr. Shahid Iqbal is the top most Immunologist specialist in christ Hospital at London. She achived several awards for her wonderful contribution in medical field. She is available for private consultation."
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
