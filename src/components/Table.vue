<script setup>

import AreaCheckResult from "@/components/AreaCheckResult.vue";

defineProps({
  resultList: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="table">
  <table id="check-table" class="table-check">
    <thead>
    <tr>
      <AreaCheckResult />
    </tr>
    </thead>
    <tbody>
      <tr v-for="result in resultList">
        <AreaCheckResult :result="result" />
      </tr>
    </tbody>
  </table>
  </div>
</template>

<style scoped>
div.table {
  background-color: #301781;
  border-radius: 10px;
  margin: 2%;
  border: 2px solid #ffffff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}
table {
  width: 100%;
  border-collapse: collapse;
  padding: 5%;
  border-radius: 10px;
  border: 2px solid ;
  overflow: hidden;
}
</style>