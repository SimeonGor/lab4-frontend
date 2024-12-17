<script setup>

</script>

<template>
  <div>
    <a href="#">
      <img class="logo" src="../assets/images/logo.png"  alt="Logo"/>
    </a>
  </div>
</template>

<style scoped>
  img {
    height: 70%;
    margin: 5%;
  }

  @media (max-width: 671px) {
    img {
      height: 80px;
      margin: 5px;
    }
  }

  img:hover {
    transition: 0.1s;
    border-radius: 30%;
    border: 2px solid #76E2F4;
    transform: scale(0.9);
    box-shadow: 0 0 30px 2px #76E2F4;
  }

  @media (max-width: 671px) {
    img:hover {
      box-shadow: 0 0 15px 1px #76E2F4;
    }
  }
</style>