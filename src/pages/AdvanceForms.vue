<script setup>
import AdvanceSelect from '../views/AdvanceForms/AdvanceSelect.vue';
import ToggleCount from '../views/AdvanceForms/ToggleCount.vue';
import StrongPassword from '../views/AdvanceForms/StrongPassword.vue';
</script>

<template>
  <div>
    <h1 class="text-xl font-medium mb-4">Advance Select</h1>
    <AdvanceSelect />

    <h1 class="text-xl font-medium mb-4 mt-6">Toggle Count</h1>
    <ToggleCount />

    <h1 class="text-xl font-medium mb-4 mt-6">Strong Password</h1>
    <StrongPassword />
  </div>
</template>
