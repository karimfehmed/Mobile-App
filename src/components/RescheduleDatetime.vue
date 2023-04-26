<template>
  <div class="reschedule-datetime">
    <v-sheet>
      <v-card class="reschedule-datetime-card">
        <img src="../assets/images/splashFrame.png" alt="Frame" />
        <v-card-title class="reschedule-datetime-heading mb-6">
          <img
            src="../assets/icons/back.png"
            alt="Logo"
            class="Backicon"
            @click="reschduleappoiments"
          />
          <p class="mx-auto">Reschedule Appointment</p>
        </v-card-title>
        <v-divider
          :thickness="1"
          class="reschedule-datetime-divider mx-auto"
        ></v-divider>
        <div class="reschedule-datetime-card-content pl-4 py-6">
          <h4>Select Date</h4>
          <div class="cancel-card-button py-8">
            <Basebutton title="Next" height="52" width="361" />
          </div>
        </div>
      </v-card>
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Basebutton from "./Basebutton.vue";
import router from "../router";

let dialog = ref(false);
const reschduleappoiments = () => {
  dialog.value = true;
  router.push("/rescheduleappointment");
};
</script>
<style lang="scss">
.reschedule-datetime {
  .reschedule-datetime-card {
    height: 100vh;
  }
  .reschedule-datetime-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    p {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 18px;
      color: #242424;
    }
  }
  .reschedule-datetime-divider {
    width: 361px;
  }
  .reschedule-datetime-card-content {
    h4 {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #36454f;
      padding-left: 10px;
    }
  }
}
</style>
