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
        <specializationsearch> </specializationsearch>
      </div>
      <div class="pt-3">
        <TodaysAppoiments
          doctorname="Dr. Muhamme Syahid"
          date="01/04/98"
          specialtization="Heart Specialist"
          time="02:00"
        />
      </div>
      <div class="medical-checks my-3 mx-auto">
        <h1>Medical Checks!</h1>
        <div>
          <p>
            Check your health condition regularly to minimize the incidence of
            disease in the future...
          </p>
          <v-btn class="medical-checks-button" @click="getDoctorslist"
            >Book Now</v-btn
          >
        </div>
      </div>
      <div class="doctor-speciality">
        <p class="pl-4 pt-5">Doctor Speciality</p>
        <div class="doctor-speciality-icons d-flex justify-space-around pt-5">
          <div class="icon-box">
            <v-icon class="speciality-icon">
              <v-btn icon="" flat class="bg-background" to="/dentist">
                <img
                  class="icon-image"
                  src="../assets/icons/tooth-whitening.svg"
                  alt=""
                />
              </v-btn>
            </v-icon>
            <p>Dentist</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon">
              <v-btn icon="" flat class="bg-background" to="/generalphysician">
                <img
                  class="icon-image"
                  src="../assets/icons/user 1.svg"
                  alt=""
                />
              </v-btn>
            </v-icon>
            <p>General</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon">
              <v-btn icon="" flat class="bg-background" to="/nutrition">
                <img
                  class="icon-image"
                  src="../assets/icons/healthy-food 1.svg"
                  alt=""
                />
              </v-btn>
            </v-icon>
            <p>Nutrition</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon">
              <v-btn icon="" flat class="bg-background">
                <img
                  class="icon-image"
                  src="../assets/icons/consultation 1.svg"
                  alt=""
                />
              </v-btn>
            </v-icon>
            <p>Online Visit</p>
          </div>
        </div>
        <div class="doctor-speciality-icons d-flex justify-space-around pt-5">
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><v-btn icon="" flat class="bg-background" to="/neurologist">
                <img
                  class="icon-image"
                  src="../assets/icons/brain 1.svg"
                  alt=""
                /> </v-btn
            ></v-icon>
            <p>Neurology</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><v-btn icon="" flat class="bg-background" to="/opthal">
                <img
                  class="icon-image"
                  src="../assets/icons/eye-care 1.svg"
                  alt=""
                /> </v-btn
            ></v-icon>
            <p>Opthal...</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon"
              ><v-btn icon="" flat class="bg-background" to="/pediatic">
                <img
                  class="icon-image"
                  src="../assets/icons/pediatrician 1.svg"
                  alt=""
                /> </v-btn
            ></v-icon>
            <p>Pediatric</p>
          </div>
          <div class="icon-box">
            <v-icon class="speciality-icon">
              <v-btn icon="" flat class="bg-background">
                <img
                  class="icon-image"
                  src="../assets/icons/coolicon.svg"
                  alt=""
                /> </v-btn
            ></v-icon>
            <p>More</p>
          </div>
        </div>
      </div>
      <div class="pt-8 pb-8">
        <BaseButton
          title="Book an Appoinment"
          height="50"
          width="361"
          @click="getDoctorslist"
        />
      </div>

      <DoctorsList
        v-for="(doctor, index) in doctorList"
        :key="index"
        :doctor="doctor"
      />
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./Basebutton.vue";
import DoctorsList from "./DoctorsList.vue";
import TodaysAppoiments from "./TodayAppoiments.vue";
import store from "../store/store";
import specializationsearch from "./specializationsearch.vue";
import console from "console";
import { computed } from "vue";
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

store.dispatch("getSpecialist");
const getDoctorslist = () => {
  store.dispatch("getDoctorslist");
};

const doctorList = computed(() => {
  return store.state.doctorsList;
});
</script>
<style lang="scss" scoped>
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
  }
}
.icon-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
