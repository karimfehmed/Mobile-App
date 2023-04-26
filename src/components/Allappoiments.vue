<template>
  <div class="all-appointments">
    <h1 class="text-center pt-2">Appointments</h1>
    <div class="pt-8">
      <v-card>
        <v-tabs v-model="tab" text-black>
          <v-tab value="upcoming">Upcoming</v-tab>
          <v-tab value="completed">Completed </v-tab>
          <v-tab value="cancelled">Cancelled</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="upcoming">
              <AppoimentStatus>
                <template #cardButtons>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <div class="appoiment-popup">
                        <v-dialog
                          transition="dialog-bottom-transition"
                          width="auto"
                        >
                          <template v-slot:activator="{ props }">
                            <Cancelappoimentbutton
                              title="Cancel Appoinment"
                              v-bind="props"
                            >
                            </Cancelappoimentbutton>
                          </template>
                          <template v-slot:default="{ isActive }">
                            <v-card class="poup-card">
                              <v-card-text>
                                <div class="poup-content">
                                  <h4 class="py-2">Cancel Appointment</h4>
                                  <v-divider :thickness="1"></v-divider>

                                  <p class="py-2">
                                    We are very sad that you have canceled your
                                    appointment. we will always improve our
                                    services to satisfy you in the next
                                    <br />
                                    appointment.
                                    <br />
                                    <span class="pt-4"
                                      >We are very sad that you have canceled
                                      your appointment.
                                    </span>
                                  </p>
                                  <v-divider :thickness="1"></v-divider>
                                </div>
                              </v-card-text>
                              <v-card-actions
                                class="justify-space-between popup-button py-4"
                              >
                                <v-btn
                                  variant="text"
                                  @click="isActive.value = false"
                                  class="popup-back-button"
                                >
                                  Back
                                </v-btn>
                                <router-link to="/cancelreason">
                                  <v-btn
                                    variant="text"
                                    class="popup-cancel-button"
                                    >Yes, Cancel</v-btn
                                  >
                                </router-link>
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <Reschedulebutton
                        title="Reschedule"
                        @click="reschedule"
                      />
                    </v-col>
                  </v-row>
                </template>
              </AppoimentStatus>
            </v-window-item>

            <v-window-item value="completed">
              <AppoimentStatus>
                <template #cardButtons>
                  <Cancelappoimentbutton
                    title="Book Again"
                    @click="bookagain"
                  />
                  <Reschedulebutton title="Leave a Review" />
                </template>
              </AppoimentStatus>
            </v-window-item>

            <v-window-item value="cancelled">
              <AppoimentStatus
            /></v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </div>
    <BottomNavbar />
  </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AppoimentStatus from "./AppoimentStatus.vue";
import BottomNavbar from "./BottomNavbar.vue";
import Cancelappoimentbutton from "./Cancelappoimentbutton.vue";
import Reschedulebutton from "./Reschedulebutton.vue";
import router from "../router";

let tab = ref(null);
const reschedule = () => {
  router.push("/rescheduleappointment");
};
const bookagain = () => {
  router.push("/bookagain");
};
</script>
<style lang="scss">
.all-appointments {
  h1 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #242424;
  }
  .v-theme--myCustomLightTheme {
    box-shadow: none;
    outline: none;
    border-radius: 12px;
    overflow: hidden;
  }
  .v-slide-group__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .v-btn__content {
    font-family: "Proxima Nova";
    font-style: normal;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 13px;
    display: flex;
    align-items: center;
    color: #76848d;
  }
  .v-btn:hover > .v-btn__overlay {
    opacity: 0;
    background-color: white;
  }
  .v-btn--variant-plain,
  .v-btn--variant-outlined,
  .v-btn--variant-text,
  .v-btn--variant-tonal {
    color: white;
  }
  .v-slide-group-item--active {
    .v-btn__content {
      color: #cc5500;
    }
  }
  .v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    border-radius: 0px;
    padding-top: 10px;
  }
}

.poup-card {
  width: 361px;
  height: fit-content;

  .popup-back-button {
    width: 140px;
    height: 40px;
    border: 1px solid #36454f;
    border-radius: 100px;
  }
  .popup-cancel-button {
    width: 140px;
    height: 40px;
    background-color: #cc5500;
    color: white;
    border-radius: 100px;
  }
}
.poup-content {
  h4 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #ff5263;
    text-align: center;
  }
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #36454f;
  }
}
</style>
