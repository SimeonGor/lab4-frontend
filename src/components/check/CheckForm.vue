<script setup>
import {baseUrl} from "@/env.js";
import {AreaCheckResponse} from "@/AreaCheckResponse.js";
import {getAuthHeader} from "@/auth.service.js";

const emit = defineEmits(["result", "radius"])

let x = null;
let y = null;
let r = null;
let errorMessage = null;

let xOptions = [
  {label: "--choose x--", value: null},
  {label: "-5", value: -5},
  {label: "-4", value: -4},
  {label: "-3", value: -3},
  {label: "-2", value: -2},
  {label: "-1", value: -1},
  {label: "0", value: 0},
  {label: "1", value: 1},
  {label: "2", value: 2},
  {label: "3", value: 3},
];

let rOptions = [
  {label: "--choose r--", value: null},
  {label: "-5", value: -5},
  {label: "-4", value: -4},
  {label: "-3", value: -3},
  {label: "-2", value: -2},
  {label: "-1", value: -1},
  {label: "0", value: 0},
  {label: "1", value: 1},
  {label: "2", value: 2},
  {label: "3", value: 3},
]

function validConstraint(event) {
  let field = event.target;
  console.log(field);
  let value = field.value.replace(",", ".");
  console.log(value);
  if (value.trim() === "") {
    field.setCustomValidity("Заполните поле");
    return false;
  } else if (!isFinite(value)) {
    field.setCustomValidity("Должно быть число!");
    return false;
  } else if (value >= 5 || value <= -3) {
    field.setCustomValidity("Вы вышли за диапазон (-3; 5)!");
    return false;
  } else {
    field.setCustomValidity("");
    return true;
  }
}

async function onSubmit() {
  let data = {x, y, r}

  let response = await fetch(baseUrl + "/api/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader()
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    let json = await response.json();
    let result = new AreaCheckResponse(json);
    errorMessage = null;
    emit("check", {
      result: result
    });
  }
  else {
    errorMessage = await response.text();
  }
}

function onRadiusChange() {
  emit("radius", {
    newRadius: r
  });
}

</script>

<template>
  <form id="coordinates-form" @submit.prevent="onSubmit">
    <div id="x-field" class="value-input">
      <label class="labels" for="x-input">X:</label>
      <select id="x-input" class="labels" v-model="x" required>
        <option v-for="x in xOptions" :value="x.value">{{ x.label }}</option>
      </select>
    </div>
    <div id="y-field" class="value-input">
      <label class="labels" for="y-input">Y:</label>
      <input id="y-input" class="labels" type="text" autocomplete="off" required v-model="y"
             v-on:change="validConstraint"/>
    </div>
    <div id="r-field" class="value-input">
      <label class="labels" for="r-input">R:</label>
      <select id="r-input" class="labels" v-model="r" required
        @change="onRadiusChange">
        <option v-for="r in rOptions" :value="r.value">{{ r.label }}</option>
      </select>
    </div>
    <label v-show="errorMessage !== null">{{ errorMessage }}</label>

    <input type="submit" value="Отправить" class="button labels"/>
  </form>

</template>

<style scoped>
  form {
    background-color: #76E2F4;
    border: 2px solid #301781;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
    padding: 20px;
    margin: auto auto auto 10%;
  }

  @media (max-width: 671px) {
    form {
      width: 80%;
    }
  }

  form .labels {
    margin-right: 10px;
    font-family: "fantasy", sans-serif;
    font-size: 1em;
    color: #301781;
  }

  form .button {
    color: #F4F4EC;
    margin: 20px 5px 0;
    border-radius: 5%;
    letter-spacing: 1px;
    display: flex;
    text-decoration: none;
    background-color: #615DEC;
    border: 2px solid #301781;
  }

  form .button:hover {
    color: #301781;
    transition: 0.5s;
    border: 2px solid #301781;
    background-color: #F4F4EC;
  }


  form .value-input {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin: 10px;
  }

  @media (max-width: 671px) {
    form .value-input {
      flex-direction: column;
    }
  }

  form input {
    margin: 0.5%;
    background-color: #F4F4EC;
  }
</style>