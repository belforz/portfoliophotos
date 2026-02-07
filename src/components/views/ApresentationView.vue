<template>
  <div class="flex flex-col items-center p-6 bg-black rounded-lg shadow-md text-center">
    <div class="icon-container relative w-24 h-24 animate-glow overflow-hidden rounded-full">
      <img :src="greeting.portraitLinkRed" alt="Portrait" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import { greeting } from '../photos';
</script>

<style scoped>
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 10px 2px rgba(248, 78, 72, 0.5);
  }
  50% {
    box-shadow: 0 0 20px 4px rgba(181, 33, 33, 0.8);
  }
}

.animate-glow {
  animation: glow 5s infinite ease-in-out;
  border-radius: 50%;
}
</style>
