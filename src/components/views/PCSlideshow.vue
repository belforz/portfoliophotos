<template>
  <div class="relative w-full h-screen overflow-hidden">
    <div
      v-for="(photo, index) in photosList"
      :key="photo.id"
      class="absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out"
      :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
    >
      <img :src="photo.imageLink" :alt="photo.title" class="w-full h-full object-cover fade-in">
      <!-- Title and Description Overlay -->
      <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-6">
        <h2 class="text-2xl font-bold">{{ photo.title }}</h2>
        <p class="text-lg mt-2">{{ photo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { photos } from '../photos.js'; // Certifique-se de ajustar o caminho conforme necessário

const currentIndex = ref(0);
const photosList = photos.landscapes; // Certifique-se de que isso esteja correto

const showSlide = (index) => {
  currentIndex.value = index;
};

const nextSlide = () => {
  const nextIndex = (currentIndex.value + 1) % photosList.length;
  showSlide(nextIndex);
};

onMounted(() => {
  setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos (ajuste conforme necessário)
});
</script>

<style scoped>
.opacity-100 {
  opacity: 1;
}
.opacity-0 {
  opacity: 0;
}
</style>
