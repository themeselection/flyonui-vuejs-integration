<script setup>
import Input from '../views/FormElements/Input.vue';
import Radio from '../views/FormElements/Radio.vue';
import Checkbox from '../views/FormElements/Checkbox.vue';
import Switch from '../views/FormElements/Switch.vue';
</script>

<template>
  <div>
    <h1 class="text-xl font-medium mb-4">Input</h1>
    <Input />

    <h1 class="text-xl font-medium mb-4 mt-6">Radio</h1>
    <Radio />

    <h1 class="text-xl font-medium mb-4 mt-6">Checkbox</h1>
    <Checkbox />

    <h1 class="text-xl font-medium mb-4 mt-6">Switch</h1>
    <Switch />
  </div>
</template>
