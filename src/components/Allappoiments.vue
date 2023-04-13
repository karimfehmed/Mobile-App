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
                <!-- <div class="schedule-button d-flex">
                  <Cancelappoimentbutton title="Book-Again" />
                  <Reschedulebutton title="Reschedule" />
                </div> -->
              </AppoimentStatus>
            </v-window-item>

            <v-window-item value="completed">
              <AppoimentStatus />
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
// import Cancelappoimentbutton from "./Cancelappoimentbutton.vue";
// import Reschedulebutton from "./Reschedulebutton.vue";

let tab = ref(null);
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
</style>
