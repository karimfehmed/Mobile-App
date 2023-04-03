<template>
  <div class="bg-background d-flex">
    <v-sheet class="Signup">
      <img src="../assets/images/splashFrame.png" alt="Frame" />
      <v-card class="px-6">
        <v-card-title class="SignupHeading mb-5">
          <router-link to="/">
            <img src="../assets/icons/back.png" alt="Logo" class="Backicon" />
          </router-link>
          <p class="mx-auto">Sign Up</p>
        </v-card-title>
        <v-divider class="mx-auto" width="361"></v-divider>
        <v-form @submit.prevent="singnUpForm">
          <v-row class="d-block py-6">
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">First Name</label>
              <div class="d-flex justify-space-between">
                <BaseInput
                  required
                  v-model="firstName"
                  class="mr-1"
                  placeholder="First Name"
                />
                <BaseInput
                  v-model="lastName"
                  class="ml-1"
                  placeholder="Last Name"
                />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">E-mail</label>
              <div>
                <BaseInput v-model="email" placeholder="Enter your email" />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Phone Number</label>
              <div>
                <BaseInput
                  v-model="phoneNumber"
                  placeholder="Enter your phone number"
                />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Gender</label>
              <div>
                <select class="GenderSelect" v-model="gender">
                  <option value="">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </v-col>
            <v-col class="SignupInputfield">
              <label for="" class="Baseinputlabel">Date of Birth</label>
              <div class="d-flex justify-space-between">
                <BaseInput v-model="day" class="mr-1" placeholder="Day" />
                <BaseInput v-model="month" class="" placeholder="Month" />
                <BaseInput v-model="year" class="ml-1" placeholder="Year" />
              </div>
            </v-col>
            <v-col class="WeightHeight">
              <div class="WeightAndheightInput">
                <label for="" class="Baseinputlabel">Height</label>
                <BaseInput v-model="height" class="" placeholder="In inches" />
              </div>
              <div class="WeightAndheightInput">
                <label for="" class="Baseinputlabel">Weight</label>
                <BaseInput v-model="weight" class="" placeholder="In KGs" />
              </div>
            </v-col>
            <v-col>
              <div class="Terms d-flex">
                <input type="checkbox" v-model="agree" />
                <p class="ml-2">
                  By creating your account you have to agree with <br />
                  our
                  <span>Terms and Conditions</span>
                  
              <p v-if="test" class="text-red pt-1">
                Please Agree terms And Conditions
              </p>
                </p>
              </div>
            </v-col>
            <v-col>
              <BaseButton
                title="Next"
                height="52"
                width="330"
                v-on:click="singnUpForm"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import BaseInput from "../components/BaseInput.vue";
import BaseButton from "../components/Basebutton.vue";
import { ref } from "@vue/reactivity";
import store from "../store/store";
import { computed } from "vue";

let firstName = ref("");
let lastName = ref("");
let email = ref("");
let phoneNumber = ref("");
let gender = ref("");
let day = ref("");
let month = ref("");
let year = ref("");
let height = ref("");
let weight = ref("");
let agree = ref(false);
let test = ref(false);

const singnUpForm = () => {
  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !phoneNumber.value ||
    !gender.value ||
    !day.value ||
    !month.value ||
    !year.value ||
    !height.value ||
    !weight.value
  ) {
    alert("Please fill out all required fields.");
    return;
  }
  else{

    if (!agree.value) {
      test.value = true;
      return;
    }
    store.dispatch('singnUpForm', 
    {
      firstName: firstName.value,
      lastName: lastName.value,
      dob: day.value + "/" + month.value + "/" + year.value,
      gender: gender.value,
      height: height.value,
      weight: weight.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
    })
  }

};



</script>
<style lang="scss" scoped></style>
