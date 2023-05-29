<template>
  <div class="bg-background d-flex">
    <v-sheet class="signup-details">
      <img src="../assets/images/splashFrame.png" alt="Frame" />
      <v-card class="px-6">
        <v-card-title class="signup-heading mb-5">
        <BackButton/>
          <p class="mx-auto">Sign Up</p>
        </v-card-title>
        <v-divider class="mx-auto" width="361"></v-divider>
        <v-form @submit.prevent="singnUpForm">
          <v-row class="d-block py-6">
            <v-col class="SignupInputfield pt-0">
              <label for="" class="baseinputlabel">First Name</label>
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
              <label for="" class="baseinputlabel">E-mail</label>
              <div>
                <BaseInput v-model="email" placeholder="Enter your email" />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="baseinputlabel">Phone Number</label>
              <div>
                <BaseInput
                  v-model="phoneNumber"
                  placeholder="Enter your phone number"
                />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="baseinputlabel">Password</label>
              <div>
                <BaseInput
                  v-model="password"
                  placeholder="Enter your Password"
                />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="baseinputlabel">Gender</label>
              <div>
                <select class="gender-select" v-model="gender">
                  <option value="">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </v-col>
            <v-col class="SignupInputfield">
              <label for="" class="baseinputlabel">Date of Birth</label>
              <div class="d-flex justify-space-between">
                <BaseInput v-model="day" class="mr-1" placeholder="Day" />
                <BaseInput v-model="month" class="" placeholder="Month" />
                <BaseInput v-model="year" class="ml-1" placeholder="Year" />
              </div>
            </v-col>
            <v-col class="weightheight">
              <div class="WeightAndheightInput">
                <label for="" class="baseinputlabel">Height</label>
                <BaseInput v-model="height" class="" placeholder="In inches" />
              </div>
              <div class="WeightAndheightInput">
                <label for="" class="baseinputlabel">Weight</label>
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
            <v-col class="sign-in">
              <p>Already Have an Account? <router-link  to="/signin">Sign In</router-link></p>
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
import BackButton from "./BackButton.vue";

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
let password =ref("");

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
    !weight.value ||
    !password.value
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
      password: password.value,
    })
  };
};
</script>
<style lang="scss" scoped>
.sign-in{
  text-align: center;
  p{
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 12px;
    color: #36454F;
    a{
      color: #CC5500;
      cursor: pointer;
      text-decoration: none;
    }

  }
}
</style>
