<template>
  <div class="reschedule-datetime">
    <v-sheet>
      <v-card class="reschedule-datetime-card">
        <img src="../assets/images/splashFrame.png" alt="Frame" />
        <v-card-title class="reschedule-datetime-heading py-6">
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
        <div class="reschedule-datetime-card-content py-6">
          <h4 class="px-4">Select Date</h4>
          <div class="date-picker px-4 py-4">
            <Datepicker v-model="date"></Datepicker>
          </div>
          <div class="select-hour px-4 py-4">
            <label class="time-picker__label">{{ label }}</label>
            <br />
            <input
              type="time"
              class="time-picker__input my-4 px-2"
              v-model="time"
            />
          </div>
          <div class="cancel-card-button py-6">
            <v-dialog v-model="dialog" width="auto">
              <template v-slot:activator="{ props }">
                <Basebutton
                  title="Update"
                  height="52"
                  width="361"
                  v-bind="props"
                  @click="update"
                  :loading="store.state.signInLoader"
                />
              </template>
              <v-card class="cancel-reason-popup py-5">
                <div class="d-flex justify-center">
                  <img src="../assets/icons/Group 34944.png" alt="" />
                </div>
                <h5 class="py-3 text-primary-color">Congratulations!</h5>
                <v-card-text>
                  <p>
                    Appointment Sucessfully booked. You will receive a
                    notification and the doctor you selected will Contact you.
                  </p>
                </v-card-text>
                <v-card-actions>
                  <div class="action-buttons">
                    <Basebutton
                      title="View Appointment"
                      height="50"
                      width="329"
                      @click="rescheduleappoiment"
                    />

                    <Basebutton
                      title="Back to Home"
                      height="50"
                      width="329"
                      class="pt-2"
                      @click="backtohome"
                    />
                  </div>
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
import Datepicker from "vuejs3-datepicker";
import { DoctorsList } from "../types";
import store from "../store/store";
import { useRoute } from "vue-router";

const route = useRoute();

let time = ref("");
let date = ref("");
let dialog = ref(false);

const rescheduleappoiment = () => {
  router.push("/allappoiments");
};
const update = () => {
  let currentDate = new Date(date.value);
  const [hours, minutes] = time.value.split(":");
  currentDate.setHours(parseInt(hours));
  currentDate.setMinutes(parseInt(minutes));

  store.dispatch("recduleAppoiment", {
    currentDate: currentDate,
    docId: route.params.id,
  });
};
const backtohome = () => {
  router.push("/newuser");
};

interface TimePickerProps {
  label?: string;
  value: string;
  onUpdate: (value: string) => void;
}

const props = defineProps({
  label: { type: String, default: "Select Hour" },
  value: { type: String, default: "" },
  onUpdate: { type: Function, default: () => {} },
} as const);

const reschduleappoiments = () => {
  dialog.value = true;
  router.push("/rescheduleappointment/" + route.params.id);
};

// let time = ref(time);
// let date = ref(date);
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
      font-size: 18px;
      line-height: 18px;
      color: #36454f;
    }
  }
  .date-picker {
    width: 100%;
  }
  .vuejs3-datepicker {
    width: 100%;
  }
  .vuejs3-datepicker__value {
    width: 100%;
  }
  .vuejs3-datepicker__calendar {
    width: 100%;
  }
  .time-picker__input {
    height: 40px;
    width: 123px;
    border: 1.5px solid #36454f;
    border-radius: 50px;
  }
  .time-picker__label {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #36454f;
  }
  .action-buttons {
    display: flex;
    flex-direction: column;
  }
}
</style>
