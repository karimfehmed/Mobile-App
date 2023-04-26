<template>
  <div class="reschedule-appoiment">
    <v-sheet>
      <v-card class="reschedule-appoiment-card">
        <img src="../assets/images/splashFrame.png" alt="Frame" />
        <v-card-title class="reschedule-card-heading mb-6">
          <router-link to="/allappoiments">
            <img src="../assets/icons/back.png" alt="Logo" class="Backicon" />
          </router-link>
          <p class="mx-auto">Reschedule Appointment</p>
        </v-card-title>
        <v-divider
          :thickness="1"
          class="reschedule-card-divider mx-auto"
        ></v-divider>
        <div class="reschedule-card-content pl-4 py-6">
          <h4>Reason for Schedule Change</h4>
          <div class="reschedule-card-reasons">
            <v-checkbox
              label="I’m having a schedule clash"
              color="primary-color"
            ></v-checkbox>
            <v-checkbox
              label="I’m not available on schedule"
              color="primary-color"
            ></v-checkbox>
            <v-checkbox
              label="I have a activity that can’t be left behind"
              color="primary-color"
            ></v-checkbox>
            <v-checkbox
              label="I don’t want to tell"
              color="primary-color"
            ></v-checkbox>
            <v-checkbox label="Other" color="primary-color"></v-checkbox>
            <textarea class="dieases-details mx-auto" />
          </div>
          <div class="cancel-card-button py-8">
            <Basebutton
              title="Next"
              height="52"
              width="361"
              @click="rescheduledatetime"
            />
          </div>
        </div>
      </v-card>
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import router from "../router";
import Basebutton from "./Basebutton.vue";
const rescheduledatetime = () => {
  router.push("/rescheduledatetime");
};
</script>
<style lang="scss">
.reschedule-appoiment {
  .reschedule-appoiment-card {
    height: 100vh;
  }
  .reschedule-card-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 20px;
      height: 20px;
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
  .reschedule-card-divider {
    width: 361px;
  }
  .reschedule-card-content {
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
  .reschedule-card-reasons {
    .v-checkbox .v-selection-control {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #464646;
    }
    .v-selection-control--inline .v-label {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #464646;
    }
    .v-.v-messages {
      min-height: 0;
      padding-top: 0;
    }
  }
  .v-input__details {
    min-height: 0;
  }
  .v-messages {
    min-height: 0;
    padding-top: 0;
  }
  .v-input--density-default {
    height: 40px;
  }
  .dieases-details {
    font-family: "Proxima Nova";
    width: 361px;
    min-height: 158px;
    padding: 10px;
    outline: none;
    margin-top: 8px;
    background: #eef3f3;
    border-radius: 8px;
    color: #242424;
    font-size: 16px;
  }
  .Button {
    margin-right: 14px;
  }
}
</style>
