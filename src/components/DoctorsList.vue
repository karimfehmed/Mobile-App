<template>
  <v-card class="doctors-list mx-auto mb-3">
    <div class="d-flex px-3 py-3">
      <img src="../assets/images/dr amman.png" alt="" />
      <div
        class="dosctors-list-content mx-3 d-flex flex-column justify-space-between"
      >
        <div class="d-flex justify-space-between">
          <h4>{{ doctor.name }}</h4>
          <!-- <img src="../assets/icons/Like.svg" alt="" /> -->
        </div>

        <h2>{{ doctor.specialization }}</h2>
        <div>
          <p><img src="../assets/icons/star.svg" alt="" /> {{ reviews }}</p>
        </div>
      </div>
    </div>
    <v-btn
      @click="show = !show"
      class="profile-details-button text-primary-color"
      flat
    >
      View Profile Details</v-btn
    >

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <div class="profile-detail-icons d-flex justify-space-around pb-2">
          <p class="d-flex flex-column align-center">
            <img src="../assets/icons/patient.svg" alt="" />
            <span>{{ patients }}</span>
            <br />
            Patients
          </p>
          <p class="d-flex flex-column align-center">
            <img src="../assets/icons/experience.svg" alt="" />
            <span>{{ experience }}</span>
            <br />
            Experience
          </p>
          <p class="d-flex flex-column align-center">
            <img src="../assets/icons/rating stra.svg" alt="" />
            <span>{{ rating }}</span>
            <br />
            Rating
          </p>
          <p class="d-flex flex-column align-center">
            <img src="../assets/icons/reviews.svg" alt="" />
            <span>{{ totalreviews }}</span>
            <br />
            Reviews
          </p>
        </div>
        <v-divider></v-divider>
        <div class="dentist py-3">
          <v-card-text class="doctor-details">
            <h4 class="pl-0 pb-2">About me</h4>
            {{ doctor.descrpition }}
          </v-card-text>
          <div class="px-3 py-3">
            <h4>Work Time</h4>
            <div class="work-time d-flex align-center justify-center mt-2">
              <p>{{ worktime }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="clinical-informatnion px-3 py-3">
            <h4>Clinic Information</h4>
            <div class="d-flex justify-space-between pt-2 align-center">
              <span>Clinic Name</span>
              <p>Aziza Clinic</p>
            </div>
            <div class="d-flex justify-space-between pt-2 align-center">
              <span>Clinic Address</span>
              <p>Syedeny, Australia</p>
            </div>
            <div class="d-flex justify-space-between pt-2 align-center">
              <span>Clinic Email</span>
              <p>Clinic@gmail.com</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="education px-3 py-3">
            <h4>Education</h4>
            <div class="d-flex justify-space-between pt-2 align-center">
              <span>Degree</span>
              <p>
                MBBS,Sydney college <br />
                and university
              </p>
            </div>
          </div>
          <div class="serviceandspecialization px-3 py-3">
            <h4>Service and Specialization</h4>

            <v-divider></v-divider>
            <div class="d-flex justify-space-between pt-2 align-center">
              <span>Service</span>
              <p>Medicare</p>
            </div>
            <div class="d-flex justify-space-between pt-2 align-center">
              <span>Specialization</span>
              <p>Childern care</p>
            </div>
          </div>
        </div>
        <div class="pt-8 pb-8">
          <BaseButton
            title="Book an Appoinment"
            height="45"
            width="340"
            @click="bookAppoiment"
          />
        </div>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import BaseButton from "./Basebutton.vue";
import type { DoctorsList } from "../types";
import store from "../store/store";

let show = ref(false);

const props = defineProps<{
  doctor: DoctorsList;
}>();

const bookAppoiment = () => {
  store.dispatch("bookAppoiment", props.doctor);
};
let patients = "5000+";
let rating = "4.8";
let experience = "10+";
let totalreviews = "4,942";
let reviews = "5.0 / 177 Reviews";
let aboutdoctor =
  "Dr. Aman Bumrow is the top most Immunologist specialist in christ Hospital at London. She achived several awards for her wonderful contribution in medical field. She is available for private consultation.";
let worktime = "Monday - Friday , 08:00 AM - 20:00 PM";
</script>
<style lang="scss">
.doctors-list {
  width: 361px;
  box-shadow: 0px -2px 6px rgba(35, 35, 35, 0.04),
    0px 8px 16px rgba(0, 0, 0, 0.08);
  img {
    border-radius: 12px;
  }
  h4 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #36454f;
  }
  h2 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #76848d;
  }
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 10.5px;
    line-height: 13px;
    color: #76848d;
  }
}
.dosctors-list-content {
  width: 100%;
}
.profile-details-button {
  border-radius: 0;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  width: 100%;
  background: #fcf7f0;
}
.profile-detail-icons {
  img {
    height: 70px;
    width: 40px;
  }
  span {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #36454f;
  }
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #76848d;
  }
}
.dentist {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #76848d;
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #36454f;
    padding: 8px 8px;
  }
  h4 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #36454f;
  }
  span {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    color: #36454f;
  }
}

.work-time {
  width: 297px;
  height: 47px;
  border-radius: 14px;
  border: 1px solid #36454f;
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #76848d;
  }
}
</style>
