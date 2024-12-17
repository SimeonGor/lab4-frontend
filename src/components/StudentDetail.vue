<script setup>

</script>

<template>
  <div>
    <div class="student-details">
      <span>Горюнов Семён P3230</span>
      <span>Вариант 13899</span>
    </div>
  </div>
</template>

<style scoped>
.student-details {
  display: flex;
  flex-direction: column;
  padding: 5%;

  font-family: "fantasy", sans-serif;
  font-size: 1.5em;
  color: #F4F4EC;
}

.student-details span {
  margin: 2%;
}

@media(max-width: 671px) {
  .student-details {
    flex-direction: row;
    font-size: 1em;
  }
  student-details span {
    margin: 5px;
  }
}
</style>