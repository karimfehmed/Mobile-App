<template>
  <div class="appoiment-popup">
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" width="auto">
          <template v-slot:activator="{ props }">
            <v-btn templatecolor="primary" class="bg-primary" v-bind="props"
              >From the bottom</v-btn
            >
          </template>
          <template v-slot:default="{ isActive }">
            <v-card class="poup-card">
              <v-card-text>
                <div class="poup-content">
                  <h4 class="py-2">Cancel Appointment</h4>
                  <v-divider :thickness="1"></v-divider>

                  <p class="py-2">
                    We are very sad that you have canceled your appointment. we
                    will always improve our services to satisfy you in the next
                    <br />
                    appointment.
                    <br />
                    <span class="pt-4"
                      >We are very sad that you have canceled your appointment.
                    </span>
                  </p>
                  <v-divider :thickness="1"></v-divider>
                </div>
              </v-card-text>
              <v-card-actions class="justify-space-between popup-button">
                <v-btn
                  variant="text"
                  @click="isActive.value = false"
                  class="popup-back-button"
                >
                  Back
                </v-btn>
                <router-link to="/cancelreason">
                  <v-btn variant="text" class="popup-cancel-button"
                    >Yes, Cancel</v-btn
                  >
                </router-link>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{}>();
</script>
<style lang="scss" scoped>
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
