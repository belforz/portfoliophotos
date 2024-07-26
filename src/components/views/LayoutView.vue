<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-black">
      <div v-for="(photo, index) in photoArray" :key="photo.id" class="relative pb-[100%]">
        <img :src="photo.imageLink" :alt="photo.title" class="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md"/>
        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white">
          <p>{{ photo.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { photosBW } from '../photos.js'
  
  const photoArray = ref(photosBW.firstOne)
  </script>