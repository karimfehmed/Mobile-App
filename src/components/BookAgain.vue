<template>
  <v-sheet>
    <v-card class="bookagain-card py-4">
      <img src="../assets/images/splashFrame.png" alt="Frame" />
      <v-card-title class="bookagain-heading mb-6">
        <img
          src="../assets/icons/back.png"
          alt="Logo"
          class="Backicon"
          @click="reschduleappoiments"
        />
        <p class="mx-auto">Patient Details</p>
      </v-card-title>
      <v-divider :thickness="1" class="bookagain-divider mx-auto"></v-divider>
      <div class="bookagain-card-content pl-4 py-6">
        <div class="bookagain-input">
          <label for="" class="input-head">Full Name</label>
          <BaseInput
            placeholder="Fehmed Karim"
            model-value="firstname"
            class="firstname-input"
          />
        </div>
        <div class="bookagain-input py-6">
          <label for="" class="bookagain-inputlabel">Gender</label>
          <div>
            <select class="gender-select">
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="pt-5">
            <label for="" class="input-head pt-5">Your Age</label>
            <BaseInput placeholder="Your Age" model-value="25 Years" />
          </div>
          <div class="pt-5">
            <label for="" class="input-head pt-5">Write Your Problem</label>
            <textarea placeholder="Dieases" class="dieases-details" />
          </div>
        </div>
        <div class="bookagain-card-button py-3">
          <Basebutton title="Next" height="52" width="361" />
        </div>
      </div>
    </v-card>
  </v-sheet>
</template>
<script setup lang="ts">
import router from "../router";
import Basebutton from "./Basebutton.vue";
import BaseInput from "./BaseInput.vue";
const reschduleappoiments = () => {
  router.push("/allappoiments");
};
</script>
<style lang="scss">
.bookagain-card {
  height: 100vh;
  .bookagain-heading {
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
  .bookagain-divider {
    width: 361px;
  }
  .bookagain-input {
    width: 360px;
  }
  .input-head {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #36454f;
  }
  .v-field__outline {
    opacity: 0;
  }
  .v-field--variant-filled .v-field__overlay {
    opacity: 0;
  }
  .v-select .v-field .v-text-field__prefix,
  .v-select .v-field .v-text-field__suffix,
  .v-select .v-field .v-field__input,
  .v-select .v-field.v-field .v-label {
    color: #000;
  }
  .v-field--variant-filled .v-field__overlay {
    opacity: 1;
    background: white;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    height: 48px;
    line-height: 14px;
  }
  .v-text-field .v-field {
    margin: 0;
  }
  .v-input__control {
    width: auto;
  }
  .bookagain-inputlabel {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #36454f;
  }
  .gender-select {
    width: 100%;
  }
}
</style>
