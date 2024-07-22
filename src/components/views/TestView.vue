<template>
  <div>
    <h1>Photos by Category</h1>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div v-for="(photos, category) in categories" :key="category">
        <div class="bg-white dark:bg-black rounded-lg shadow-md p-4">
          <h2 class="text-lg font-semibold mb-2">{{ category }}</h2>
          <div class="grid grid-cols-1 gap-4">
            <div v-for="photo in photos" :key="photo.id" @click="showPhotoDetails(photo)">
              <img :src="getImagePath(photo.image)" :alt="photo.title" class="w-full h-auto rounded-lg cursor-pointer">
              <h3 class="text-base font-medium mt-2">{{ photo.title }}</h3>
              <p class="text-sm text-gray-600">{{ photo.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import categories from '../photos.js'; // Ajuste o caminho conforme a estrutura do seu projeto

const getImagePath = (path) => {
  const url = new URL(`../${path}`, import.meta.url).href;
  console.log(url);  // Adicione isto para verificar o caminho da imagem
  return url;
};


const showPhotoDetails = (photo) => {
  // Implementar lógica para mostrar detalhes da foto (ex: modal, visualização detalhada)
  console.log('Clicked on photo:', photo);
};

console.log(categories);
</script>

<style scoped>
/* Adicione seu CSS personalizado aqui, se necessário */
</style>
