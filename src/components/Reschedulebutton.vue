<template>
  <div class="reschedule">
    <button>{{ title }}</button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
<style lang="scss" scoped>
.reschedule {
  width: 100%;
  height: 31px;
  border-radius: 0px 0px 12px 0px;
  background: #f6caaa;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #cb5e10;
  border: none;
  text-align: center;
  padding: 8px;
  cursor: pointer;
}
</style>
