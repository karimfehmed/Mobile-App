<template>
  <v-radio-group class="d-flex RadioSelect">
    <div class="d-flex">
      <span class="InfoRadio pt-4">
        <v-radio class="RadioButton" value="1" name="testing"></v-radio>
        <label for="" class="RadioLabel">Yes</label>
      </span>
      <span class="InfoRadio pt-4">
        <v-radio class="RadioButton pl-1" value="2" name="testing"></v-radio>
        <label for="" class="RadioLabel">No</label>
      </span>
    </div>
  </v-radio-group>
</template>
<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>
<style lang="scss" scoped>
.RadioButton {
  color: #cc5500;
}
.InfoRadio {
  display: flex;
  align-items: center;
}
.RadioLabel {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #36454f;
}
</style>
