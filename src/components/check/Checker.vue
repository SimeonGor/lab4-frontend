<script setup>
import Table from "@/components/check/Table.vue";
import Graph from "@/components/check/Graph.vue";
import CheckForm from "@/components/check/CheckForm.vue";
import {onMounted, ref} from "vue";
import {baseUrl} from "@/env.js";
import {AreaCheckResponse} from "@/AreaCheckResponse.js";

let resultList = ref([]);
let radius = ref(null);

function onResult({result}) {
  resultList.value.unshift(result);
}

function onRadiusChange({newRadius}) {
  radius.value = newRadius;
}

onMounted(() => loadResulList());

async function loadResulList() {
  let response = await fetch(baseUrl + "/api/check", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1c2VybmFtZSIsImV4cCI6MTczNDUzMTg3N30.Xc-nsYQDVDeejgO3cjJXg13KmVvMqXiAjJccKw-tr8k",
    }
  });
  if (response.ok) {
    let json = await response.json();
    for (let i in json) {
      resultList.value.unshift(new AreaCheckResponse(json[i]))
    }
  }
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