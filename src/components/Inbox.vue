<template>
  <div class="inbox pt-4">
    <div class="messages-heading px-4">
      <div class="inner-content d-flex justify-space-between align-center">
        <BackButton />
        <h1 class="mx-auto">Inbox</h1>
      </div>
      <v-divider class="my-4"></v-divider>
    </div>
    <div class="search px-4">
      <div class="search-input">
        <v-icon class="search-icon">mdi-magnify</v-icon>
        <input placeholder="Seacrh by name" variant="outlined" />
      </div>
    </div>
    <div
      class="inbox-box my-4 mx-4"
      v-for="(doctor, index) in doctorList"
      :key="index"
      :doctor="doctor"
      @click="startChat(doctor.docId)"
    >
      <div class="doctor-appoiment-cards mx-auto">
        <div class="appoiment-card-content d-flex px-4 py-4">
          <img src="../assets/images/dr ayesha.png" alt="" />
          <div class="pl-3 d-flex flex-column justify-space-evenly">
            <div class="d-flex justify-space-between last-view">
              <h1>Dr. {{ doctor.name }}</h1>
              <p>
                <v-icon class="mx-1">mdi-eye-outline</v-icon>
                20 min ago
              </p>
            </div>
            <p>{{ doctor.specialization }}</p>
            <span>Hey How are you I am good waht about you?</span>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar">
      <BottomNavbar />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import BottomNavbar from "./BottomNavbar.vue";
import store from "../store/store";
import { DoctorsList } from "../types";
import router from "../router";
import BackButton from "./BackButton.vue";

store.dispatch("getDoctorslist");
const doctorList = computed(() => {
  return store.state.doctorsList;
});
store.dispatch("getSpecialist");

const startChat = (id: string) => {
  router.push("/messages/" + id);
};
</script>
<style lang="scss" scoped>
.inbox {
  cursor: pointer;
  .inbox-heading {
    text-align: center;
  }
  img {
    height: 18.75px;
    width: 18.75px;
    cursor: pointer;
  }
  h1 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #242424;
  }
  .search-input {
    height: 48px;
    width: 361px;
    display: flex;
    align-items: center;
    background: #f6f7f9;
    border-radius: 100px;
    input {
      border: none;
      width: 100%;
      height: 100%;
      padding: 5px 5px 5px 40px;
      margin-left: -24px;
      border-radius: 100px;

      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      letter-spacing: -0.25px;
      color: #36454f;
    }
    input:focus {
      outline: none;
    }
  }
  .search-icon {
    padding-left: 16px;
  }
  .doctor-appoiment-cards {
    background-color: #ffffff;
    width: 100%;
    height: 98px;
    border-radius: 12px;
    .appoiment-card-content {
      img {
        height: 58px;
        width: 58px;
        border-radius: 100px;
      }
      h1 {
        font-family: "Proxima Nova";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #0f1828;
      }
      p {
        font-family: "Proxima Nova";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #76848d;
      }
      span {
        font-family: "Proxima Nova";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #36454f;
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
  .inbox-box {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04),
      0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
  }
  .last-view {
    p {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #76848d;
    }
  }
}
</style>
