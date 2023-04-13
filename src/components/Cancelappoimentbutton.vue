<template>
  <div
    class="cancel-button"
    :class="{ 'cancel-appoinment': isStatus, 'book-again': changedStatus }"
  >
    <button>{{ title }}</button>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "@vue/reactivity";

const props = defineProps<{
  title: string;
}>();
let status = "completed";
const isStatus = computed(() => {
  if (props.title === "Cancel Appoinment") {
    return true;
  } else {
    return false;
  }
});
const changedStatus = computed(() => {
  if (props.title === "Book-Again") {
    return true;
  } else {
    return false;
  }
});
</script>
<style lang="scss" scoped>
.cancel-appoinment {
  color: #f85b6b;
  background: #fad6d9;
}
.book-again {
  background: rgba(3, 167, 88, 0.09);
  color: #03a758;
}
.cancel-button {
  width: 100%;
  height: 31px;
  border-radius: 12px;
  font-family: "Proxima Nova";
  border-radius: 0px 0px 0px 12px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  border: none;
  text-align: center;
  padding: 8px;
  cursor: pointer;
}
</style>
