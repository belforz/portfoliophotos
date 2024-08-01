<template>
  <div class="flex flex-col w-full h-screen overflow-hidden">
    <!-- Div 1 -->
    <div class="relative w-full flex-1 transition-opacity duration-1000 ease-in-out" :class="{ 'opacity-100': displayedPhotos[0], 'opacity-0': !displayedPhotos[0] }">
      <img v-if="displayedPhotos[0]" :src="displayedPhotos[0].imageLink" :alt="displayedPhotos[0].title" class="w-full h-full object-cover">
      <div v-else class="w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50">Loading...</div>
    </div>

    <!-- Div 2 -->
    <div class="relative w-full flex-1 transition-opacity duration-1000 ease-in-out" :class="{ 'opacity-100': displayedPhotos[1], 'opacity-0': !displayedPhotos[1] }">
      <img v-if="displayedPhotos[1]" :src="displayedPhotos[1].imageLink" :alt="displayedPhotos[1].title" class="w-full h-full object-cover">
      <div v-else class="w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50">Loading...</div>
    </div>

    <!-- Div 3 -->
    <div class="relative w-full flex-1 transition-opacity duration-1000 ease-in-out" :class="{ 'opacity-100': displayedPhotos[2], 'opacity-0': !displayedPhotos[2] }">
      <img v-if="displayedPhotos[2]" :src="displayedPhotos[2].imageLink" :alt="displayedPhotos[2].title" class="w-full h-full object-cover">
      <div v-else class="w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50">Loading...</div>
    </div>

    <!-- Div 4 -->
    <div class="relative w-full flex-1 transition-opacity duration-1000 ease-in-out" :class="{ 'opacity-100': displayedPhotos[3], 'opacity-0': !displayedPhotos[3] }">
      <img v-if="displayedPhotos[3]" :src="displayedPhotos[3].imageLink" :alt="displayedPhotos[3].title" class="w-full h-full object-cover">
      <div v-else class="w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50">Loading...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Dados das fotos
const photos = ref([
  { id: 1, title: 'Its Rio', description: 'Vou-de-vouz', imageLink: 'images/IMG_2251.jpg' },
  { id: 2, title: 'Praia Grande Sunset', description: 'In The Horizon', imageLink: 'images/IMG_4084.jpg' },
  { id: 3, title: 'Heart Of São Paulo', description: 'It is always by the lake', imageLink: 'images/IMG_1162.jpg' },
  { id: 4, title: 'From the Heart', description: 'Threes', imageLink: 'images/C765E053-AD9B-473D-98B0-B81DCBA2508A.jpg' },
  { id: 5, title: 'Cold', description: 'Waves', imageLink: 'images/IMG_4187.jpg' },
  { id: 6, title: 'aRT', description: 'Collections Of Useless', imageLink: 'images/IMG_5816.jpg' },
  { id: 7, title: 'The Life', description: 'Threes', imageLink: 'images/IMG_6973.jpg' },
  { id: 8, title: 'Condominius', description: 'All at once', imageLink: 'images/IMG_2785.jpg' }
]);

const totalDivs = 4;
const photoCount = photos.value.length;
const intervalTime = 5000; // Tempo em milissegundos para a troca de foto

const displayedPhotos = ref(Array(totalDivs).fill(null));
const currentIndex = ref(0);

const updateSlides = () => {
  for (let i = 0; i < totalDivs; i++) {
    const index = (currentIndex.value + i) % photoCount;
    displayedPhotos.value[i] = photos.value[index];
  }
  currentIndex.value = (currentIndex.value + 1) % photoCount;
};

onMounted(() => {
  updateSlides(); // Inicializa os slides
  setInterval(updateSlides, intervalTime); // Troca de slide a cada intervalo de tempo
});
</script>

<style scoped>
/* Container Flexível Vertical */
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.flex-1 {
  flex: 1;
}
.relative {
  position: relative;
}
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}
.object-cover {
  object-fit: cover;
}
.transition-opacity {
  transition: opacity 1s ease-in-out;
}
.opacity-100 {
  opacity: 1;
}
.opacity-0 {
  opacity: 0;
}
</style>
