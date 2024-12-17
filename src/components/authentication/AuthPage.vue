<script setup>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import LoginPage from "@/components/authentication/login/LoginPage.vue";
import RegisterPage from "@/components/authentication/register/RegisterPage.vue";

</script>

<template>
  <TabView>
    <TabPanel header="Login">
      <LoginPage />
    </TabPanel>
    <TabPanel header="Register">
      <RegisterPage />
    </TabPanel>
  </TabView>

</template>

<style scoped>

</style>