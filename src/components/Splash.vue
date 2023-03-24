<template>
  <div class="bg-background d-flex justify-center">
    <v-sheet class="SplashOne">
      <v-card class="splashCard">
        <img src="../assets/images/splashFrame.png" alt="Frame" />
        <v-card-text width="393">
          <v-window v-model="tab">
            <img src="../assets/splashFrame.png" alt="" />
            <v-window-item value="one"
              ><img class="DoctorImage" src="../assets/images/doc1.png" alt=""
            /></v-window-item>

            <v-window-item value="two">
              <img class="DoctorImage" src="../assets/images/doc2.png" alt=""
            /></v-window-item>

            <v-window-item value="three">
              <img class="DoctorImage" src="../assets/images/doc3.png" alt=""
            /></v-window-item>
          </v-window>
        </v-card-text>
        <div class="d-flex justify-center">
          <v-tabs class="v-tabs--doctors" v-model="tab">
            <v-tab value="one" class="NextSlide"> </v-tab>
            <v-tab value="two" class="NextSlide"></v-tab>
            <v-tab value="three" class="NextSlide"></v-tab>
          </v-tabs>
        </div>
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-card-title class="DoctorTitle"
                >Get Connect out Online <br />
                Consultation
              </v-card-title>
              <v-card-subtitle class="DoctorSubTitle"
                >Improve the quality of the services for Patient <br />
                Happiness.</v-card-subtitle
              >
              <Basebutton title="Get Started" height="52" width="330" />
              <div class="card-Border">
                <v-divider
                  :thickness="7"
                  class="border-opacity-100 rounded-pill btn"
                  width="134"
                ></v-divider>
              </div>
            </v-window-item>

            <v-window-item value="two">
              <v-card-title class="DoctorTitle"
                >Consult only with a doctor <br />
                you trust
              </v-card-title>
              <v-card-subtitle class="DoctorSubTitle">
                Improve the quality of the services for Patient <br />
                Happiness.
              </v-card-subtitle>
              <Basebutton title="Get Started" height="52" width="330" />
              <div class="card-Border">
                <v-divider
                  :thickness="7"
                  class="border-opacity-100 rounded-pill btn"
                  width="134"
                ></v-divider>
              </div>
            </v-window-item>

            <v-window-item value="three">
              <v-card-title class="DoctorTitle"
                >Find a lot specialist doctors <br />
                in one place
              </v-card-title>
              <v-card-subtitle class="DoctorSubTitle"
                >Improve the quality of the services for Patient <br />
                Happiness.</v-card-subtitle
              >
              <Basebutton title="Get Started" height="52" width="330" />
              <div class="card-Border">
                <v-divider
                  :thickness="7"
                  class="border-opacity-100 rounded-pill btn"
                  width="134"
                ></v-divider>
              </div>
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
.SplashOne {
  .v-tabs--doctors .v-tab__slider {
    opacity: 0;
    width: 109px;
  }
  .v-tab.v-tab {
    min-width: 0;
    margin-left: 8px;
    height: 10px;
    background-color: #36454f;
    border-radius: 19px;
  }
  .NextSlide:hover {
    background-color: #aeaeae;
  }
}
</style>
