<script setup>
import {login} from "@/auth.service.js";
import {ref} from "vue";
import {useRouter} from "vue-router";

let username = '';
let password = '';
let errorMessage = ref('')

const router = useRouter()

function goToCheck() {
  router.push("/check");
}

async function onSubmit() {
  login(username, password).then(
      () => {
        errorMessage = null;
        goToCheck();
      },
      (error) => {
        errorMessage.value = error.message;
      });
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="value-input">
      <label for="username" class="labels">Username</label>
      <input type="text" v-model="username" name="username" class="labels" required />
    </div>
    <div class="value-input">
      <label for="password" class="labels">Password</label>
      <input type="password" v-model="password" name="password" class="labels" required />
    </div>
    <div v-if="errorMessage" class="value-input">
      <label class="labels">{{ errorMessage }}</label>
    </div>

    <input type="submit" class="button labels" value="Login">
  </form>
</template>

<style scoped>
form {
  background-color: #76E2F4;
  border: 2px solid #301781;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
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