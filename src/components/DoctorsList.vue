<template>
  <v-card class="doctors-list mx-auto">
    <div class="d-flex px-3 py-3">
      <img src="../assets/images/dr amman.png" alt="" />
      <div
        class="dosctors-list-content ml-3 d-flex flex-column justify-space-between"
      >
        <div class="d-flex justify-space-between">
          <h4>Dr. Aman Bumrow</h4>
          <img src="../assets/icons/Like.svg" alt="" />
        </div>

        <h2>Cardiovascular</h2>
        <div>
          <p><img src="../assets/icons/star.svg" alt="" /> 4.8 / 177 Reviews</p>
        </div>
      </div>
    </div>
    <v-btn class="profile-details-button text-primary-color" flat
      >View Profile Details</v-btn
    >
  </v-card>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.doctors-list {
  width: 361px;
  box-shadow: 0px -2px 6px rgba(35, 35, 35, 0.04),
    0px 8px 16px rgba(0, 0, 0, 0.08);
  img {
    border-radius: 12px;
  }
  h4 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #36454f;
  }
  h2 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #76848d;
  }
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 10.5px;
    line-height: 13px;
    color: #76848d;
  }
}
.dosctors-list-content {
  width: 100%;
}
.profile-details-button {
  border-radius: 0;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  width: 100%;
  background: #fcf7f0;
}
</style>
