<template>
  <div class="Baseinput">
    <input
      class="SingupInput"
      :model-value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :placeholder="placeholder"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  placeholder: string;
  modelValue: string;
}>();
const emit = defineEmits(["update:modelValue"]);
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
  padding: 8px;
  height: 43px;
  width: 100%;
}
</style>
