<script setup>
import TheHeader from "@/components/TheHeader.vue";
import {RouterView} from "vue-router";


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
