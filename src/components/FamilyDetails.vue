<template>
  <div class="bg-background d-flex">
    <v-sheet class="Family-Details">
      <img src="../assets/images/splashFrame.png" alt="Frame" />
      <v-card class="px-6">
        <v-card-title class="SignupHeading mb-5">
          <router-link to="/PersonalInfo">
            <img src="../assets/icons/back.png" alt="Logo" class="Backicon" />
          </router-link>
          <p class="mx-auto">Add Your Family Details</p>
        </v-card-title>
        <v-divider class="mx-auto" width="361"></v-divider>
        <v-form @submit.prevent="FamilyDetails">
          <v-row class="d-block py-6">
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">First Name</label>
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
              <label for="" class="Baseinputlabel">Date of Birth</label>
              <div class="d-flex justify-space-between">
                <BaseInput v-model="day" class="mr-1" placeholder="Day" />
                <BaseInput v-model="month" class="" placeholder="Month" />
                <BaseInput v-model="year" class="ml-1" placeholder="Year" />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Dieases</label>
              <div class="MultipleSelect">
                <v-select
                  v-model="Dieases"
                  label="Select Here"
                  :items="['Cancer', 'Stroke', 'Mental illness']"
                  multiple
                ></v-select>
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Child One Information</label>
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
              <label for="" class="Baseinputlabel">Date of Birth</label>
              <div class="d-flex justify-space-between">
                <BaseInput v-model="day" class="mr-1" placeholder="Day" />
                <BaseInput v-model="month" class="" placeholder="Month" />
                <BaseInput v-model="year" class="ml-1" placeholder="Year" />
              </div>
            </v-col>

            <v-col class="DieasesInformation">
              <label for="" class="Baseinputlabel"
                >Let us know in short Detail!</label
              >
              <v-textarea
                v-model="Details"
                label="Dieases"
                variant="solo"
                class="mt-3"
              ></v-textarea>
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
.Family-Details {
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
}
</style>
