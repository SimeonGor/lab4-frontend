<script setup>

import Logo from "@/components/Logo.vue";
import StudentDetail from "@/components/StudentDetail.vue";
import {RouterLink} from "vue-router";
import {logout} from "@/auth.service.js";
</script>

<template>
  <nav class="navigation">
    <RouterLink class="labels" to="/">Go to Home</RouterLink>
    <RouterLink class="labels" to="/check">Go to Checker</RouterLink>
    <RouterLink class="labels" to="/" @click="logout">Logout</RouterLink>
  </nav>

  <div class="header">
    <Logo />
    <StudentDetail />
  </div>
</template>

<style scoped>
.header {
  height: 200px;
  display: flex;
  background-color: #301781;
  justify-content: space-between;
}

.labels {
  margin-right: 10px;
  font-family: "fantasy", sans-serif;
  font-size: 1em;
  color: #F4F4EC;
}

.navigation {
  display: flex;
  flex-direction: row;
  background-color: #301781;

}

@media (max-width: 671px) {
  .header {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 150px;
  }
  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #301781;

  }
}
</style>