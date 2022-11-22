<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />


  <RouterView />
</template>

<style >
body{
  background: #f2f2f2;
}
#app{

  max-width: 600px;
  margin: 0 auto;
}

</style>
