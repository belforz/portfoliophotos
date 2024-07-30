<template>
  <div class="p-4 bg-black">
    <!-- Photos Black and White -->
    <div v-for="(category, categoryName) in photosBW" :key="categoryName" class="mb-12">
      <h2 class="text-2xl text-center text-white mb-6">{{ categoryName }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(photo, index) in category" :key="photo.id" class="relative pb-[100%]" @click="toggleTetris(index, 'BW')">
          <img :src="photo.imageLink" :alt="photo.title" 
               :class="[
                 'absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500', 
                 tetrisIndexesBW.includes(index) ? 'transform scale-150 rotate-12' : ''
               ]"
          />
          <div class="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white">
            <p>{{ photo.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Photos Colored -->
    <div v-for="(category, categoryName) in photos" :key="categoryName" class="mb-12">
      <h2 class="text-2xl text-center text-white mb-6">{{ categoryName }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(photo, index) in category" :key="photo.id" class="relative pb-[100%]" @click="toggleTetris(index, 'Colored')">
          <img :src="photo.imageLink" :alt="photo.title" 
               :class="[
                 'absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500', 
                 tetrisIndexesColored.includes(index) ? 'transform scale-150 rotate-12' : ''
               ]"
          />
          <div class="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white">
            <p>{{ photo.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { photosBW, photos } from '../photos.js';

const tetrisIndexesBW = ref([]);
const tetrisIndexesColored = ref([]);

const toggleTetris = (index, category) => {
  if (category === 'BW') {
    if (tetrisIndexesBW.value.includes(index)) {
      tetrisIndexesBW.value = tetrisIndexesBW.value.filter(i => i !== index);
    } else {
      tetrisIndexesBW.value.push(index);
    }
  } else if (category === 'Colored') {
    if (tetrisIndexesColored.value.includes(index)) {
      tetrisIndexesColored.value = tetrisIndexesColored.value.filter(i => i !== index);
    } else {
      tetrisIndexesColored.value.push(index);
    }
  }
};
</script>
