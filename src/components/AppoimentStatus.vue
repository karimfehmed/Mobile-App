<template>
  <div class="appoiment-status my-3">
    <div class="d-flex py-3 pl-4 appoiment-status-content">
      <img src="../assets/images/dr amman.png" alt="Logo" />
      <div class="pl-3 d-flex flex-column">
        <h4>{{ doctor.name }}</h4>
        <h5>Cardiovascular</h5>
        <p>Upcoming</p>
        <span
          >Today | {{ hours(doctor.hours) }} : {{ minutes(doctor.minutes) }}
          {{ period(doctor.hours) }}</span
        >
      </div>
    </div>
    <div class="schedule-button d-flex">
      <slot name="cardButtons"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { DoctorsList } from "../types";
const props = defineProps<{
  doctor: DoctorsList;
}>();

const hours = (hours: number) => {
  let currentHours = hours;
  if (currentHours > 12) currentHours = hours - 12;
  if (currentHours < 10) return "0" + currentHours.toString();
  else return currentHours;
};
const minutes = (minutes: number) => {
  if (minutes < 10) return "0" + minutes.toString();
  else return minutes;
};

const period = (hours: number) => {
  if (hours > 12) return "PM";
  else return "AM";
};
</script>
<style lang="scss">
.appoiment-status {
  box-shadow: 0px -2px 6px rgba(35, 35, 35, 0.04),
    0px 8px 16px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  width: 361px;
  border: 1px solid rgba(54, 69, 79, 0.07);
  height: fit-content;
  img {
    width: 65px;
    height: 65px;
    margin-top: 5px;
  }
  h4 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #36454f;
  }
  h5 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #76848d;
    opacity: 0.6;
    padding-top: 4px;
  }
  p {
    width: 66px;
    height: 22px;
    margin-top: 4px;
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    color: #cc5500;
    border: 1px solid #cc5500;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px;
  }
  span {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 10.5px;
    line-height: 13px;
    color: #76848d;
    padding-top: 4px;
  }
}
</style>
