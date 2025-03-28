<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />

  <div class="p-6">
    <RouterView />
  </div>
</template>
