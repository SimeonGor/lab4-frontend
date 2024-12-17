<script setup>
import Table from "@/components/Table.vue";
import Graph from "@/components/Graph.vue";
import CheckForm from "@/components/CheckForm.vue";
import {ref} from "vue";

let resultList = ref([]);
let radius = ref(null);

function onResult({result}) {
  resultList.value.unshift(result);
}

function onRadiusChange({newRadius}) {
  radius.value = newRadius;
}
</script>

<template>
  <div class="graph-data">
    <div class="graph-container">
      <Graph v-bind:result-list="resultList" v-bind:radius="radius" @check="onResult"/>
    </div>
    <CheckForm @radius="onRadiusChange" @check="onResult"/>
  </div>
  <Table v-bind:result-list="resultList"/>
</template>

<style scoped>
.graph-data {
  display: flex;
  width: 80%;
}

.graph-container {
  margin: 30px;
}
</style>