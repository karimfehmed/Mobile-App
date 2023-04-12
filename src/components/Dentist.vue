<template>
  <div>
    <div class="dentists pt-4">
      <DoctorsList
        patients="5000+"
        rating="5.0"
        experience="10+"
        totalreviews="4,942"
        reviews="5.0 / 177 Reviews"
        doctorname="Dr Naheed"
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
        doctorname="Dr Shahid Iqbal"
        specialtization="Dentist"
        aboutdoctor="Dr. Shahid Iqbal is the top most Immunologist specialist in christ Hospital at London. She achived several awards for her wonderful contribution in medical field. She is available for private consultation."
        worktime="Monday - Friday , 08:00 AM - 20:00 PM"
      />
    </div>
    <div class="pt-4">
      <DoctorsList
        patients="5000+"
        rating="4.8"
        experience="10+"
        totalreviews="4,942"
        reviews="5.0 / 177 Reviews"
        doctorname="Dr Fahim Hussain"
        specialtization="Dentist"
        aboutdoctor="Dr. Shahid Iqbal is the top most Immunologist specialist in christ Hospital at London. She achived several awards for her wonderful contribution in medical field. She is available for private consultation."
        worktime="Monday - Friday , 08:00 AM - 20:00 PM"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import DoctorsList from "./DoctorsList.vue";
</script>
<style lang="scss" scoped></style>
