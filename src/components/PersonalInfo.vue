<template>
  <div class="bg-background d-flex">
    <v-sheet class="Personal-info">
      <img src="../assets/images/splashFrame.png" alt="Frame" />
      <v-card class="px-6">
        <v-card-title class="SignupHeading mb-5">
          <router-link to="/signup">
            <img src="../assets/icons/back.png" alt="Logo" class="Backicon" />
          </router-link>
          <p class="mx-auto">Add your Details</p>
        </v-card-title>
        <v-divider class="mx-auto" width="361"></v-divider>
        <v-form>
          <v-row class="d-block py-6">
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Are You Married</label>
              <RadioButton label="Yes" />
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Do You Have Child</label>
              <RadioButton label="Yes" />
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">How many child ---</label>
              <div class="md-3">
                <BaseInput class="NoOfChilds" placeholder="00" />
              </div>
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Do You Somke?</label>
              <RadioButton label="Yes" />
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel"
                >Do You Use Tobacoo Products?</label
              >
              <RadioButton label="Yes" />
            </v-col>
            <v-col class="SignupInputfield pt-0">
              <label for="" class="Baseinputlabel">Do You Use Alcohol?</label>
              <RadioButton label="Yes" />
            </v-col>
            <v-col>
              <router-link to="/familydetails" style="text-decoration: none">
                <BaseButton title="Next" height="52" width="330" />
              </router-link>
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
import RadioButton from "./RadioButton.vue";
</script>
<style lang="scss" scoped>
.NoOfChilds {
  width: 100px;
}
</style>
