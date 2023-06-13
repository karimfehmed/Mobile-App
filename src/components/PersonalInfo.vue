<template>
  <div class="bg-background d-flex">
    <v-sheet class="Personal-info">
      <img src="../assets/images/splashFrame.png" alt="Frame" />
      <v-card class="px-6" flat>
        <v-card-title class="signup-heading mb-5">
          <BackButton />
          <p class="mx-auto">Add your Details</p>
        </v-card-title>
        <v-divider class="mx-auto" width="361"></v-divider>
        <v-form @submit.prevent="PersonalDetails">
          <v-row class="d-block">
            <v-col class="SignupInputfield pt-6">
              <label for="" class="baseinputlabel">Are You Married</label>
              <RadioButton label="Yes" v-model="married" />
            </v-col>
            <v-col class="SignupInputfield pt-2">
              <label for="" class="baseinputlabel">Do You Have Child</label>
              <RadioButton label="Yes" v-model="child" />
            </v-col>
            <v-col class="SignupInputfield pt-2">
              <label for="" class="baseinputlabel">How many child ---</label>
              <div class="md-3">
                <BaseInput
                  v-model="noOfchilds"
                  class="NoOfChilds"
                  placeholder="00"
                />
              </div>
            </v-col>
            <v-col class="SignupInputfield">
              <label for="" class="baseinputlabel">Do You Somke?</label>
              <RadioButton label="Yes" v-model="smoke" />
            </v-col>
            <v-col class="SignupInputfield pt-2">
              <label for="" class="baseinputlabel"
                >Do You Use Tobacoo Products?</label
              >
              <RadioButton label="Yes" v-model="tobacooProducts" />
            </v-col>
            <v-col class="SignupInputfield pt-2 pb-0">
              <label for="" class="baseinputlabel">Do You Use Alcohol?</label>
              <RadioButton label="Yes" v-model="alcohol" />
            </v-col>
            <v-col class="mt-6 mb-6">
              <BaseButton
                title="Next"
                height="52"
                width="330"
                v-on:click="PersonalDetails"
                :loading="store.state.personalInfoLoader"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import BaseInput from "..//components/BaseInput.vue";
import BaseButton from "../components/Basebutton.vue";
import RadioButton from "./RadioButton.vue";
import { ref } from "@vue/reactivity";
import store from "../store/store";
import BackButton from "./BackButton.vue";

let married = ref("");
let child = ref("");
let noOfchilds = ref("");
let smoke = ref("");
let tobacooProducts = ref("");
let alcohol = ref("");

const PersonalDetails = () => {
  if (
    !married.value ||
    !child.value ||
    !noOfchilds.value ||
    !smoke.value ||
    !tobacooProducts.value ||
    !alcohol.value
  ) {
    alert("Please fill out all required fields.");
    return;
  } else {
    store.dispatch("PersonalDetails", {
      married: married.value,
      child: child.value,
      noOfchilds: noOfchilds.value,
      smoke: smoke.value,
      tobacooProducts: tobacooProducts.value,
      alcohol: alcohol.value,
    });
  }
};
</script>
<style lang="scss" scoped>
.NoOfChilds {
  width: 100px;
}
.SignupInputfield {
  padding-top: 0px;
}
</style>
