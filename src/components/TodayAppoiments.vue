<template>
  <div class="doctor-appoiment-cards mx-auto">
    <div class="appoiment-card-content d-flex px-4 py-4">
      <img src="../assets/images/dr ayesha.png" alt="" />
      <div class="pl-2">
        <h1>{{ doctorname }}</h1>
        <p>{{ specialtization }}</p>
      </div>
    </div>
    <div>
      <BaseButton height="44" width="329">
        <template #ButtonText>
          <div class="d-flex appoiment-sechdule">
            <p class="d-flex align-center">
              <img src="../assets/icons/calender.svg" alt="#" /><span
                class="pl-2"
              >
                {{ date }}
              </span>
            </p>
            <p class="d-flex align-center pl-2">
              <img src="../assets/icons/appmntclock.svg" alt="#" /><span
                class="pl-2"
              >
                {{ time }}
              </span>
            </p>
          </div>
        </template>
      </BaseButton>
    </div>
  </div>
</template>
<script lang="ts" setup>
import store from "../store/store";
import BaseButton from "./Basebutton.vue";

const props = defineProps<{
  doctorname: string;
  specialtization: string;
  date: string;
  time: string;
}>();

store.dispatch("getupcomingAppoiments");
</script>
<style lang="scss" scoped>
.doctor-appoiment-cards {
  background-color: #36454f;
  width: 100%;
  height: 140px;
  border-radius: 12px;
  .appoiment-card-content {
    img {
      height: 50px;
      width: 50px;
      border-radius: 100px;
    }
    h1 {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #ffffff;
    }
    p {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 13px;
      color: #ffffff;
      padding-top: 8px;
    }
  }
  .appoiment-sechdule {
    p {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      color: #ffffff;
    }
  }
}
</style>
