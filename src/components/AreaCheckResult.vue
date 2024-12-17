<script setup>
import { AreaCheckResponse } from "../AreaCheckResponse.js"

defineProps({
  result: {
    type: AreaCheckResponse,
    required: false
  }
})
</script>

<template>
  <template v-if="result">
    <td>{{ result.x.toLocaleString(
        undefined, // leave undefined to use the visitor's browser
        // locale or a string like 'en-US' to override it.
        { maximumFractionDigits: 3 }
    ) }}</td>
    <td>{{ result.y.toLocaleString(
        undefined, // leave undefined to use the visitor's browser
        // locale or a string like 'en-US' to override it.
        { maximumFractionDigits: 3 }
    ) }}</td>
    <td>{{ result.r.toLocaleString(
        undefined, // leave undefined to use the visitor's browser
        // locale or a string like 'en-US' to override it.
        { maximumFractionDigits: 3 }
    ) }}</td>
    <td>{{ result.hit ? "Попал" : "Не попал" }}</td>
    <td>{{ result.workingTime }}</td>
    <td>{{(new Date(result.createdAt)).toLocaleTimeString() }}</td>
  </template>
  <template v-else>
    <th scope="col">X</th>
    <th scope="col">Y</th>
    <th scope="col">R</th>
    <th scope="col">Результат попадания</th>
    <th scope="col">Время отправки</th>
    <th scope="col">Время исполнения (мс)</th>
  </template>
</template>

<style scoped>
th, td {
  background-color: #F4F4EC;
  color: #301781;
  border: 1px solid #F4F4EC;
  padding: 8px;
  text-align: center;
}
th {
  background-color: #615DEC;
  color: #F4F4EC;
}
</style>