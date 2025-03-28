<script setup>
defineProps({
  class: String,
  content: String,
});
</script>

<template>
  <button class="btn" :class="class">{{ content }}</button>
</template>
