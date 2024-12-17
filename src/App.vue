<script setup>
import TheHeader from "@/components/TheHeader.vue";
import Checker from "@/components/check/Checker.vue";
import LoginPage from "@/components/authentication/login/LoginPage.vue";
import {RouterLink, RouterView} from "vue-router";
import {createMemoryHistory, createRouter} from "vue-router";



</script>

<template id="app">
  <header>
    <TheHeader />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
