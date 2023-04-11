<template>
  <div class="bg-background d-flex">
    <v-sheet>
      <img src="../assets/images/splashFrame.png" alt="Frame" />
      <div class="main-Header bg-primary-text pt-5">
        <div class="Ellipse d-flex justify-space-evenly">
          <img src="../assets/icons/Ellipse 9.svg" alt="" />
          <div>
            <p>Wellcome Baig!</p>
            <span class="pt-1">
              <img src="../assets/icons/locationIcon.svg" alt="" /> A-block
              Downtown-Florida
              <img src="../assets/icons/EditIcon.svg" alt="" />
            </span>
          </div>
          <div class="header-icons">
            <img src="../assets/icons/bellIcon.svg" alt="" />
            <img src="../assets/icons/likenot.svg" alt="" />
          </div>
        </div>
        <div class="head-input d-flex pt-6 pb-6">
          <div class="Search d-flex mx-auto mr-0">
            <img src="../assets/icons/Search.svg" alt="" />
            <input type="text" placeholder="Search" v-model="newtest" />
          </div>
          <v-divider :thickness="6" vertical></v-divider>
          <div class="all-doctors select-box-container mx-auto ml-0">
            <v-select
              class="select-box"
              placeholder="All"
              v-model="newtest"
              :items="items"
            ></v-select>
          </div>
        </div>
      </div>
      <div class="pt-3">
        <Appoiments />
      </div>
      <div class="medical-checks mt-3">
        <h1>Medical Checks!</h1>
        <div>
          <p>
            Check your health condition regularly to minimize the incidence of
            disease in the future...
          </p>
          <v-btn class="medical-checks-button">Book Now</v-btn>
        </div>
      </div>
      <div class="doctor-speciality">
        <p class="pl-4 pt-5">Doctor Speciality</p>
        <div class="doctor-speciality-icons d-flex justify-space-around pt-5">
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><img
                class="icon-image"
                src="../assets/icons/tooth-whitening.svg"
                alt=""
            /></v-icon>
            <p>Dentist</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><img class="icon-image" src="../assets/icons/user 1.svg" alt=""
            /></v-icon>
            <p>General</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><img
                class="icon-image"
                src="../assets/icons/healthy-food 1.svg"
                alt=""
            /></v-icon>
            <p>Nutrition</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><img
                class="icon-image"
                src="../assets/icons/consultation 1.svg"
                alt=""
            /></v-icon>
            <p>Online Visit</p>
          </div>
        </div>
        <div class="doctor-speciality-icons d-flex justify-space-around pt-5">
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><img class="icon-image" src="../assets/icons/brain 1.svg" alt=""
            /></v-icon>
            <p>Neurology</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><img
                class="icon-image"
                src="../assets/icons/eye-care 1.svg"
                alt=""
            /></v-icon>
            <p>Opthal...</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><img
                class="icon-image"
                src="../assets/icons/pediatrician 1.svg"
                alt=""
            /></v-icon>
            <p>Pediatric</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><img
                class="icon-image"
                src="../assets/icons/coolicon.svg"
                alt=""
            /></v-icon>
            <p>More</p>
          </div>
        </div>
      </div>
      <div class="pt-8 pb-8">
        <BaseButton title="Book an Appoinment" height="50" width="361" />
      </div>
      <DoctorsList />
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./Basebutton.vue";
import DoctorsList from "./DoctorsList.vue";
import Appoiments from "./Appoiments.vue";
import store from "../store/store";
import { collection, query, where } from "@firebase/firestore";
import db from "../firebaseInit";
let doctor = ref("");
let newtest = ref("");
let items = ref([
  "Primary Care Physician (PCP)",
  "Dentist",
  "Eye Doctor",
  "Psychiatrist",
  "Orthopedic Surgeon ",
  "Acupuncturist",
  "Psychiatrist",
  "Cardiologist",
]);

let test = () => {
  console.log(doctor);
  alert(doctor);
};
store.dispatch("getSpecialist");
</script>
<style lang="scss">
.Search {
  border: 1px solid black;
  border-radius: 100px 0px 0px 100px;
  width: 270.5px;
  height: 48px;
  background-color: white;
  input {
    outline: none;
    width: 100%;
    height: 100%;
    color: #36454f;
  }
  img {
    padding: 12px 16px;
  }

  .select-box {
    width: 50px;
  }
}
.head-input {
  .v-select .v-field .v-text-field__prefix,
  .v-select .v-field .v-text-field__suffix,
  .v-select .v-field .v-field__input,
  .v-select .v-field.v-field {
    color: #36454f;
  }
  .v-select__selection-text {
    display: none;
  }
  .v-select__selection::before {
    content: "All";
    width: 100%;
    height: 100%;
    color: #36454f;
  }
}

.all-doctors {
  border: 1px solid black;
  overflow: hidden;
  width: 100px;
  height: 48px;
  background: white;
  border-radius: 0px 100px 100px 0px;
}

.doctors-dropdown {
  width: 100%;
  height: 100%;
  outline: none;
}
.main-Header {
  border-radius: 14px;
  width: 100%;
}
.Ellipse p {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;

  span {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 13px;
  }
}

.header-icons img {
  cursor: pointer;
}

.medical-checks {
  background-image: url("..//assets/images/DocFrame.png");
  background-position: center;
  max-width: 361px;
  height: 158px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 18.1905px;
    line-height: 22px;
    color: #ffffff;
    padding-left: 16px;
  }
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 119.5%;
    width: 222px;
    color: #ffffff;
    padding-top: 6px;
    padding-left: 16px;
  }
  .medical-checks-button {
    width: 108px;
    height: 32px;
    background: transparent;
    border: 1px solid white;
    border-radius: 6px;
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #ffffff;
    margin-top: 6px;
    margin-left: 16px;
  }
}
.doctor-speciality {
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #36454f;
  }
  .icon-box {
    p {
      width: 65px;
    }
  }
  .speciality-icon {
    width: 50px;
    height: 50px;
    background: rgba(54, 69, 79, 0.07);
    border-radius: 65px;
    cursor: pointer;
  }
}

.doctor-speciality-icons {
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #36454f;
    text-align: center;
    padding-top: 8px;
    cursor: pointer;
  }
}
.icon-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
