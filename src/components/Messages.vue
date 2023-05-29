<template>
  <div class="chat-container">
    <!-- <img src="../assets/images/splashFrame.png" alt="Frame" /> -->
    <Cardheading />
    <div class="contact pa-4">
      <p class="date pb-2">January 16</p>
      <div class="contact-info">
        <p
          class="messages"
          v-for="(message, index) in messages"
          :key="index"
          :class="{ currentUser: currentUser(message.senderId) }"
        >
          {{ message.text }}
        </p>
      </div>
    </div>
    <div class="px-4 d-flex align-center">
      <BaseInput
        class="msg-box"
        placeholder="Type messages"
        @keypress.enter="sendMessages"
        v-model="text"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import Cardheading from "./Cardheading.vue";
import BaseInput from "./BaseInput.vue";
import store from "../store/store";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
let text = ref("");

let route = useRoute();
let id = route.params.id;

store.dispatch("getMessages", id);

const messages = computed(() => {
  return store.state.messages;
});

const sendMessages = () => {
  console.log(text.value);
  store.dispatch("sendMessage", { id: id, text: text.value });
};

const currentUser = (id: string) => {
  if (store.state.currentPatientDetails.id === id) return true;
  else return false;
};
</script>
<style lang="scss">
.chat-container {
  display: grid;
  grid-template-rows: 80px 1fr 65px;
  height: 100%;
}
.messages-heading {
  img {
    height: 18.75px;
    width: 18.75px;
    cursor: pointer;
  }
  p {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #242424;
  }
}
.msg-box {
  width: 100%;
}
.contact {
  overflow-x: hidden;
  overflow-y: auto;

  .date {
    text-align: center;
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    color: #828796;
  }
  .contact-info {
    width: 100%;
    display: grid;
    .messages {
      margin: 8px 0px;
      width: 50%;
      background-color: #f4f6f8;
      border-radius: 12px;
      padding: 12px;
      color: #36454f;
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: 0.25px;
    }
  }

  .currentUser {
    justify-self: flex-end;
    background-color: #cc5500 !important;
    color: white !important;
  }
}
.v-input--density-default {
  border-radius: 15px;
  width: 315px;
}
.contact::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
//   .v-field__outline {
//     background: #f4f6f8;
//     border-radius: 15px;
//   }
//   .v-input--density-default .v-field--variant-outlined,
//   .v-input--density-default .v-field--single-line,
//   .v-input--density-default .v-field--no-label {
//     border-radius: 15px;
</style>
