<template>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-black">
    <div class="flex flex-col items-center p-6 bg-black rounded-lg shadow-md text-center animate-glow">
      <div class="icon-container">
        <img :src="greeting.portraitLink" alt="Portrait One" class="w-16 h-16 object-cover rounded-full" />
      </div>
      <p class="mt-4 text-lg font-semibold text-white">{{ greeting.messageOne }}</p>
    </div>
    <div class="flex flex-col items-center p-6 bg-black rounded-lg shadow-md text-center animate-glow">
      <div class="icon-container">
        <img :src="greeting.portraitLinkTwo" alt="Portrait Two" class="w-16 h-16 object-cover rounded-full" />
      </div>
      <p class="mt-4 text-lg font-semibold text-white">{{ greeting.messageTwo }}</p>
    </div>
    <div class="flex flex-col items-center p-6 bg-black rounded-lg shadow-md text-center animate-glow">
      <div class="icon-container">
        <img :src="greeting.portraitLinkThree" alt="Portrait Three" class="w-16 h-16 object-cover rounded-full" />
      </div>
      <p class="mt-4 text-lg font-semibold text-white">{{ greeting.messageThree }}</p>
    </div>
  </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue';
  import { greeting } from '../photos';
  </script>



<style scoped>
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 10px 2px rgba(128, 0, 128, 0.5);
  }
  50% {
    box-shadow: 0 0 20px 4px rgba(128, 0, 128, 0.8);
  }
}

.animate-glow {
  animation: glow 2s infinite ease-in-out;
}

.animate-glow .icon-container {
  animation: glow 3s infinite ease-in-out;
  padding: 5px; /* Optional: add padding to make the glow more prominent */
  border-radius: 50%;
}

/* .animate-glow p {
  animation: glow 2s infinite ease-in-out;
} */
</style>

