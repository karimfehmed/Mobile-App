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
        <v-form>
          <v-row class="d-block py-6">
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">First Name</label>
              <div class="d-flex justify-space-between">
                <BaseInput class="mr-1" placeholder="First Name" />
                <BaseInput class="ml-1" placeholder="Last Name" />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">E-mail</label>
              <div>
                <BaseInput placeholder="Enter your email" />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Phone Number</label>
              <div>
                <BaseInput placeholder="Enter your phone number" />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Gender</label>
              <div>
                <select class="GenderSelect">
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
                <BaseInput class="mr-1" placeholder="Day" />
                <BaseInput class="" placeholder="Month" />
                <BaseInput class="ml-1" placeholder="Year" />
              </div>
            </v-col>
            <v-col class="WeightHeight">
              <div class="WeightAndheightInput">
                <label for="" class="Baseinputlabel">Height</label>
                <BaseInput class="" placeholder="In inches" />
              </div>
              <div class="WeightAndheightInput">
                <label for="" class="Baseinputlabel">Weight</label>
                <BaseInput class="" placeholder="In KGs" />
              </div>
            </v-col>
            <v-col>
              <div class="Terms d-flex">
                <input type="checkbox" />
                <p class="ml-2">
                  By creating your account you have to agree with <br />
                  our
                  <span>Terms and Conditions</span>
                </p>
              </div>
            </v-col>
            <v-col>
              <BaseButton title="Next" height="52" width="330" />
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import BaseInput from "..//components/BaseInput.vue";
import BaseButton from "..//components/BaseButton.vue";
</script>
<style lang="scss" scoped></style>
