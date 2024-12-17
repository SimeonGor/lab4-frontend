<script setup>

import Logo from "@/components/Logo.vue";
import StudentDetail from "@/components/StudentDetail.vue";
</script>

<template>
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