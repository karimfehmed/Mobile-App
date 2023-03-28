<template>
  <div class="Baseinput">
    <input class="SingupInput" :placeholder="placeholder" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  placeholder: string;
}>();
</script>
<style scoped lang="scss">
.Baseinput input {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  color: #747980;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  outline: none;
  margin-top: 8px;
  padding: 8px;
  height: 43px;
  width: 100%;
}
</style>
