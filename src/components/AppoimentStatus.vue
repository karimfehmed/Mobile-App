<template>
  <div class="appoiment-status">
    <div class="d-flex py-3 pl-4 appoiment-status-content">
      <img src="../assets/images/dr amman.png" alt="Logo" />
      <div class="pl-3 d-flex flex-column">
        <h4>Dr. Aman Bumrow</h4>
        <h5>Cardiovascular</h5>
        <p>Upcoming</p>
        <span>Today | 09:30 AM</span>
      </div>
    </div>
    <div class="schedule-button d-flex">
      <slot name="cardButtons"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.appoiment-status {
  box-shadow: 0px -2px 6px rgba(35, 35, 35, 0.04),
    0px 8px 16px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  width: 361px;
  border: 1px solid rgba(54, 69, 79, 0.07);
  height: fit-content;
  img {
    width: 65px;
    height: 65px;
    margin-top: 5px;
  }
  h4 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #36454f;
  }
  h5 {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #76848d;
    opacity: 0.6;
    padding-top: 4px;
  }
  p {
    width: 66px;
    height: 22px;
    margin-top: 4px;
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    color: #cc5500;
    border: 1px solid #cc5500;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px;
  }
  span {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 10.5px;
    line-height: 13px;
    color: #76848d;
    padding-top: 4px;
  }
}
</style>
