<script setup>
import Tabs from 'primevue/tabs';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import LoginPage from "@/components/authentication/login/LoginPage.vue";
import RegisterPage from "@/components/authentication/register/RegisterPage.vue";

</script>

<template>
  <Tabs value="Login" class="tab">
    <TabList class="tabs-header">
      <Tab class="header" value="Login">Login</Tab>
      <Tab class="header" value="Register">Register</Tab>
    </TabList>
    <TabPanels>
      <TabPanel class="panel" value="Login">
        <LoginPage />
      </TabPanel>
      <TabPanel class="panel" value="Register">
        <RegisterPage />
      </TabPanel>
    </TabPanels>
  </Tabs>

</template>

<style scoped>
.tab {
  display: flex;
  flex-direction: column;
}
.tabs-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  --p-tabs-tablist-border-color: #F4F4EC;
}
.panel {
  display: flex;
  flex-direction: column;
  --p-tabs-tablist-border-width: 0;
}

.tabs-header .header {
  margin-right: 10px;
  font-family: "fantasy", sans-serif;
  font-size: 1em;
  color: #301781;
  --p-tabs-tab-border-width: 0;
}
</style>