<script setup>

import Logo from "@/components/Logo.vue";
import StudentDetail from "@/components/StudentDetail.vue";
import {RouterLink} from "vue-router";

</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/check">Go to Checker</RouterLink>
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

</style>