<script setup>
import SolidButtons from '../views/Button/SolidButtons.vue';
import SoftButtons from '../views/Button/SoftButtons.vue';
import OutlineButtons from '../views/Button/OutlineButtons.vue';
import TextButtons from '../views/Button/TextButtons.vue';
import GradientButtons from '../views/Button/GradientButtons.vue';
</script>

<template>
  <div>
    <h1 class="text-xl font-medium my-4">Solid Buttons</h1>
    <SolidButtons />

    <h1 class="text-xl font-medium mb-4 mt-6">Soft Buttons</h1>
    <SoftButtons />

    <h1 class="text-xl font-medium mb-4 mt-6">Outline Buttons</h1>
    <OutlineButtons />

    <h1 class="text-xl font-medium mb-4 mt-6">Text Buttons</h1>
    <TextButtons />

    <h1 class="text-xl font-medium mb-4 mt-6">Gradient Buttons</h1>
    <GradientButtons />
  </div>
</template>
