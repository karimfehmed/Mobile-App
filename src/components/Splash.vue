<template>
  <div class="bg-background d-flex">
    <v-sheet class="splash-one">
      <v-card flat class="splashCard">
        <img src="../assets/images/splashFrame.png" alt="Frame" />
        <v-card-text width="393">
          <v-window v-model="tab">
            <img src="../assets/splashFrame.png" alt="" />
            <v-window-item value="one"
              ><img
                class="doctor-images"
                src="../assets/images/doc1.png"
                alt=""
            /></v-window-item>

            <v-window-item value="two">
              <img class="doctor-images" src="../assets/images/doc2.png" alt=""
            /></v-window-item>

            <v-window-item value="three">
              <img class="doctor-images" src="../assets/images/doc3.png" alt=""
            /></v-window-item>
          </v-window>
        </v-card-text>
        <div class="d-flex justify-center">
          <v-tabs class="v-tabs--doctors" active v-model="tab">
            <v-tab value="one" class="nextSlide"> </v-tab>
            <v-tab value="two" class="nextSlide"></v-tab>
            <v-tab value="three" class="nextSlide"></v-tab>
          </v-tabs>
        </div>
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-card-title class="doctor-card-title"
                >Get Connect out Online <br />
                Consultation
              </v-card-title>
              <v-card-subtitle class="doctor-card-subTitle pb-6"
                >Improve the quality of the services for Patient <br />
                Happiness.</v-card-subtitle
              >
              <router-link
                to="/signup"
                class="SignUp"
                style="text-decoration: none"
              >
                <Basebutton title="Get Started" height="52" width="330" />
              </router-link>
            </v-window-item>

            <v-window-item value="two">
              <v-card-title class="doctor-card-title"
                >Consult only with a doctor <br />
                you trust
              </v-card-title>
              <v-card-subtitle class="doctor-card-subTitle pb-6">
                Improve the quality of the services for Patient <br />
                Happiness.
              </v-card-subtitle>
              <router-link
                to="/signup"
                class="SignUp"
                style="text-decoration: none"
              >
                <Basebutton title="Get Started" height="52" width="330" />
              </router-link>
            </v-window-item>

            <v-window-item value="three">
              <v-card-title class="doctor-card-title"
                >Find a lot specialist doctors <br />
                in one place
              </v-card-title>
              <v-card-subtitle class="doctor-card-subTitle pb-6"
                >Improve the quality of the services for Patient <br />
                Happiness.</v-card-subtitle
              >
              <router-link
                to="/signup"
                class="SignUp"
                style="text-decoration: none"
              >
                <Basebutton title="Get Started" height="52" width="330" />
              </router-link>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Basebutton from "./Basebutton.vue";

let tab = ref(null);
</script>
<style lang="scss">
.splash-one {
  .v-tabs--doctors .v-tab__slider {
    opacity: 0;
    width: 109px;
  }
  .v-tab.v-tab {
    min-width: 0;
    margin-left: 8px;
    height: 10px;
    background-color: #aeaeae;
    border-radius: 19px;
  }
  .nextSlide:hover {
    background-color: #36454f;
  }
}
</style>
