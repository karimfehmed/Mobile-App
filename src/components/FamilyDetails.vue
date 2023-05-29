<template>
  <div class="bg-background d-flex">
    <v-sheet class="family-details-card">
      <img src="../assets/images/splashFrame.png" alt="Frame" />
      <v-card class="px-6">
        <v-card-title class="signup-heading mb-5">
          <BackButton />
          <p class="mx-auto">Add Your Family Details</p>
        </v-card-title>
        <v-divider class="mx-auto" width="361"></v-divider>
        <v-form @submit.prevent="FamilyDetails">
          <v-row class="d-block py-6">
            <v-col class="SignupInputfield pt-0">
              <label for="" class="baseinputlabel">First Name</label>
              <div class="d-flex justify-space-between">
                <BaseInput
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

            <v-col class="SignupInputfield">
              <label for="" class="baseinputlabel">Date of Birth</label>
              <div class="d-flex justify-space-between">
                <BaseInput v-model="day" class="mr-1" placeholder="Day" />
                <BaseInput v-model="month" class="" placeholder="Month" />
                <BaseInput v-model="year" class="ml-1" placeholder="Year" />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="baseinputlabel">Dieases</label>
              <div class="MultipleSelect">
                <v-select
                  v-model="Dieases"
                  label="Select Here"
                  :items="['Cancer', 'Stroke', 'Mental illness']"
                ></v-select>
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="baseinputlabel">Child One Information</label>
              <div class="d-flex justify-space-between">
                <BaseInput
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
            <v-col class="SignupInputfield">
              <label for="" class="baseinputlabel">Date of Birth</label>
              <div class="d-flex justify-space-between">
                <BaseInput v-model="day" class="mr-1" placeholder="Day" />
                <BaseInput v-model="month" class="" placeholder="Month" />
                <BaseInput v-model="year" class="ml-1" placeholder="Year" />
              </div>
            </v-col>

            <v-col class="DieasesInformation">
              <label for="" class="baseinputlabel"
                >Let us know in short Detail!</label
              >
              <textarea
                placeholder="Dieases"
                class="dieases-details"
                v-model="Details"
              />
            </v-col>
            <v-col>
              <BaseButton
                title="Next"
                height="52"
                width="330"
                v-on:click="FamilyDetails"
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
import BackButton from "./BackButton.vue";

let firstName = ref("");
let lastName = ref("");
let day = ref("");
let month = ref("");
let year = ref("");
let Dieases = ref([]);
let Details = ref("");
const FamilyDetails = () => {
  if (
    !firstName.value ||
    !lastName.value ||
    !day.value ||
    !month.value ||
    !year.value ||
    !Dieases.value ||
    !Details.value
  ) {
    alert("Please fill out all required fields.");
    return;
  } else {
    store.dispatch("FamilyDetails", {
      firstName: firstName.value,
      lastName: lastName.value,
      dob: day.value + "/" + month.value + "/" + year.value,
      Dieases: Dieases.value,
      Details: Details.value,
    });
  }
};
</script>
<style lang="scss">
@import "../assets/scss/var";
.family-details-card {
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
    background: $white;
    border-radius: 12px;
    border: 1px solid $border-color;
    height: 48px;
    line-height: 14px;
  }
  .v-text-field .v-field {
    margin: 0;
  }
  .v-input__control {
    width: auto;
  }
}

.dieases-details {
  border: 1px solid #e0e0e0;
  width: 100%;
  min-height: 100px;
  padding: 10px;
  outline: none;
  margin-top: 8px;
  border-radius: 14px;
}
</style>
