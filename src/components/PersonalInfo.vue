<template>
  <div class="bg-background d-flex">
    <v-sheet class="Personal-info">
      <img src="../assets/images/splashFrame.png" alt="Frame" />
      <v-card class="px-6" flat>
        <v-card-title class="signup-heading mb-5">
          <router-link to="/signup">
            <img src="../assets/icons/back.png" alt="Logo" class="Backicon" />
          </router-link>
          <p class="mx-auto">Add your Details</p>
        </v-card-title>
        <v-divider class="mx-auto" width="361"></v-divider>
        <v-form @submit.prevent="PersonalDetails">
          <v-row class="d-block">
            <v-col class="SignupInputfield pt-6">
              <label for="" class="baseinputlabel">Are You Married</label>
              <RadioButton label="Yes" v-model="Married" />
            </v-col>
            <v-col class="SignupInputfield pt-2">
              <label for="" class="baseinputlabel">Do You Have Child</label>
              <RadioButton label="Yes" v-model="Child" />
            </v-col>
            <v-col class="SignupInputfield pt-2">
              <label for="" class="baseinputlabel">How many child ---</label>
              <div class="md-3">
                <BaseInput
                  v-model="noOfChilds"
                  class="NoOfChilds"
                  placeholder="00"
                />
              </div>
            </v-col>
            <v-col class="SignupInputfield">
              <label for="" class="baseinputlabel">Do You Somke?</label>
              <RadioButton label="Yes" v-model="Smoke" />
            </v-col>
            <v-col class="SignupInputfield pt-2">
              <label for="" class="baseinputlabel"
                >Do You Use Tobacoo Products?</label
              >
              <RadioButton label="Yes" v-model="tobacooProducts" />
            </v-col>
            <v-col class="SignupInputfield pt-2 pb-0">
              <label for="" class="baseinputlabel">Do You Use Alcohol?</label>
              <RadioButton label="Yes" v-model="Alcohol" />
            </v-col>
            <v-col class="mt-6 mb-6">
              <BaseButton
                title="Next"
                height="52"
                width="330"
                v-on:click="PersonalDetails"
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

let Married = ref("");
let Child = ref("");
let noOfChilds = ref("");
let Smoke = ref("");
let tobacooProducts = ref("");
let Alcohol = ref("");

const PersonalDetails = () => {
  if (
    !Married.value ||
    !Child.value ||
    !noOfChilds.value ||
    !Smoke.value ||
    !tobacooProducts.value ||
    !Alcohol.value
  ) {
    alert("Please fill out all required fields.");
    return;
  } else {
    store.dispatch("PersonalDetails", {
      Married: Married.value,
      Child: Child.value,
      noOfChilds: noOfChilds.value,
      Smoke: Smoke.value,
      tobacooProducts: tobacooProducts.value,
      Alcohol: Alcohol.value,
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
