<template>
  <div class="head-input d-flex pt-6 pb-6">
    <div class="Search d-flex mx-auto mr-0">
      <!-- <slot name="searchValue" v-bind="searchValue"></slot> -->
      <input type="text" placeholder="Search" v-model="searchtext" />
    </div>
    <v-divider :thickness="6" vertical></v-divider>
    <div class="all-doctors select-box-container mx-auto ml-0">
      <v-select
        class="select-box"
        placeholder="All"
        v-model="searchtext"
        :items="items"
      ></v-select>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";

let searchtext = ref("");
let searchValue = ref("");
let items = ref([
  "Primary Care Physician (PCP)",
  "Dentist",
  "Eye Doctor",
  "Psychiatrist",
  "Orthopedic Surgeon ",
  "Acupuncturist",
  "Psychiatrist",
  "Cardiologist",
]);
</script>
<style lang="scss">
.head-input {
  .v-select .v-field .v-text-field__prefix,
  .v-select .v-field .v-text-field__suffix,
  .v-select .v-field .v-field__input,
  .v-select .v-field.v-field {
    color: #36454f;
  }
  .v-select__selection-text {
    display: none;
  }
  .v-select__selection::before {
    content: "All";
    width: 100%;
    height: 100%;
    color: #36454f;
  }
  .all-doctors {
    border: 1px solid black;
    overflow: hidden;
    width: 100px;
    height: 48px;
    background: white;
    border-radius: 0px 100px 100px 0px;
  }

  .Search {
    border: 1px solid black;
    border-radius: 100px 0px 0px 100px;
    width: 270.5px;
    height: 48px;
    background-color: white;
    input {
      outline: none;
      width: 100%;
      height: 100%;
      color: #36454f;
    }
    img {
      padding: 12px 16px;
    }

    .select-box {
      width: 50px;
    }
  }
}
</style>
