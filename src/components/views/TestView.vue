<template>
  <div>
    <h1>Photo Gallery</h1>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div v-for="photo in photos" :key="photo.id" class="bg-white dark:bg-black rounded-lg shadow-md p-4">
        <img :src="getImagePath(photo.image)" :alt="photo.title" class="w-full h-auto rounded-lg">
        <h3 class="text-base font-medium mt-2">{{ photo.title }}</h3>
        <p class="text-sm text-gray-600">{{ photo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import photos from '../photos.js'; // Ajuste o caminho conforme a estrutura do seu projeto

const getImagePath = (path) => {
  return new URL(`../${path}`, import.meta.url).href;
};

console.log(photos);
</script>

<style scoped>
/* Adicione seu CSS personalizado aqui, se necessário */
</style>
