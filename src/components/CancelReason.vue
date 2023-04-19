<template>
  <div class="cancel-reason">
    <v-sheet>
      <v-card class="cancel-reason-card">
        <img src="../assets/images/splashFrame.png" alt="Frame" />
        <v-card-title class="cancel-card-heading mb-6">
          <router-link to="/allappoiments">
            <img src="../assets/icons/back.png" alt="Logo" class="Backicon" />
          </router-link>
          <p class="mx-auto">Cancel Appointment</p>
        </v-card-title>
        <v-divider
          :thickness="1"
          class="cancel-card-divider mx-auto"
        ></v-divider>
        <div class="cancel-card-content pl-4 py-6">
          <h4>Reason For Schedule Change</h4>
          <div class="cancel-card-reasons">
            <v-checkbox
              label="I want to change anoter doctor"
              color="primary-color"
            ></v-checkbox>
            <v-checkbox
              label="I want to change package"
              color="primary-color"
            ></v-checkbox>
            <v-checkbox
              label="I don’t want to Consult"
              color="primary-color"
            ></v-checkbox>
            <v-checkbox
              label="I have Recovered From the Disease"
              color="primary-color"
            ></v-checkbox>
            <v-checkbox label="Other" color="primary-color"></v-checkbox>
            <textarea class="dieases-details mx-auto" />
          </div>
          <div class="cancel-card-button py-8">
            <v-dialog v-model="dialog" width="auto">
              <template v-slot:activator="{ props }">
                <Basebutton
                  title="Continue"
                  height="52"
                  width="361"
                  v-bind="props"
                />
              </template>
              <v-card class="cancel-reason-popup py-5">
                <div class="d-flex justify-center">
                  <img src="../assets/icons/Group 34944.png" alt="" />
                </div>
                <h5 class="py-3">Cancel Appointment Sucess!</h5>
                <v-card-text>
                  <p>
                    We are very sad that you have canceled your appointment. we
                    will always improve our services to satisfy you in the next
                    appointment.
                  </p>
                </v-card-text>
                <v-card-actions>
                  <Basebutton
                    title="See Appointment"
                    height="50"
                    width="329"
                    @click="dialogclose"
                  />
                </v-card-actions>
              </v-card>
            </v-dialog>
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
import store from "../store/store";
let dialog = ref(false);
const dialogclose = () => {
  dialog.value = true;
  router.push("/allappoiments");
};
</script>
<style lang="scss">
.cancel-reason {
  .cancel-reason-card {
    height: 100vh;
  }
  .cancel-card-heading {
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
  .cancel-card-divider {
    width: 361px;
  }
  .cancel-card-content {
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
  .cancel-card-reasons {
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
.cancel-reason-popup {
  border-radius: 12px;
  width: 361px;
  img {
    width: 226px;
    height: 187px;
  }
  h5 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 43px;
    text-align: center;
  }
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #76848d;
    text-align: center;
  }
  .v-card-actions {
    display: flex;
    justify-content: center;
  }
}
</style>
