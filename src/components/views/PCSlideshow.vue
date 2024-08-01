<template>
  <!-- <div class="flex justify-center text-7xl text-white bg-black py-8">Portfolio by belforz</div> -->
  <div class="relative w-full h-screen overflow-hidden" v-for="category in categories" :key="category">
    <div v-for="(photo, index) in photosHorizontals[category]" :key="photo.id" class="slide-wrapper absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out" :class="{ 'opacity-100': currentIndexes[category] === index, 'opacity-0': currentIndexes[category] !== index }">
      <img :src="photo.imageLink" :alt="photo.title" class="w-full h-full object-cover">
      <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-6 shadow-md">
        <h2 class="text-2xl font-bold">{{ photo.title }}</h2>
        <p class="text-lg mt-2">{{ photo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// array local de fotos horizontais
const photosHorizontals = {
  landscapes: [
    { id: 1, title: 'Its Rio', description: 'Vou-de-vouz', imageLink: 'images/IMG_2251.jpg' },
    { id: 2, title: 'Praia Grande Sunset', description: 'In The Horizon', imageLink: 'images/IMG_4084.jpg' },
    { id: 3, title: 'Heart Of São Paulo', description: 'It is always by the lake', imageLink: 'images/IMG_1162.jpg' },
    { id: 4, title: 'From the Heart', description: 'Threes', imageLink: 'images/C765E053-AD9B-473D-98B0-B81DCBA2508A.jpg' },
  ], 
  emotions: [
    { id: 1, title: 'Cold', description: 'Waves', imageLink: 'images/IMG_4187.jpg' },
    { id: 2, title: 'aRT', description: 'Collections Of Useless', imageLink: 'images/IMG_5816.jpg' },
    { id: 3, title: 'The Life', description: 'Threes', imageLink: 'images/IMG_6973.jpg' },
    { id: 4, title: 'Condominius', description: 'All at once', imageLink: 'images/IMG_2785.jpg' }
  ], 
  world: [
    { id: 1, title: 'dECK', description: 'Contrast of The New', imageLink: 'images/IMG_2294.jpg' },
    { id: 2, title: 'Rio', description: 'Immensity', imageLink: 'images/IMG_2232.jpg' },
    { id: 3, title: 'Belém', description: 'Constrast of The Old', imageLink: 'images/IMG_6915.jpg' },
    { id: 4, title: 'Casa das Trezes Janelas', description: 'Localiza ai', imageLink: 'images/IMG_6070.jpg' }
  ], 
  // BW: [
  //   { id: 1, title: '', description: 'Threes', imageLink: 'images/bw-2.jpg' },
  //   { id: 2, title: '', description: 'Threes', imageLink: 'images/bw-2.jpg' },
  //   { id: 3, title: '', description: 'Threes', imageLink: 'images/bw-2.jpg' },
  //   { id: 4, title: '', description: 'Threes', imageLink: 'images/bw-2.jpg' }
  // ] 
};

const categories = Object.keys(photosHorizontals);
const currentIndexes = ref({});

// Inicializar os índices atuais para cada categoria
categories.forEach(category => {
  currentIndexes.value[category] = 0;
});

const showSlide = (category, index) => {
  currentIndexes.value[category] = index;
};

const nextSlide = (category) => {
  const nextIndex = (currentIndexes.value[category] + 1) % photosHorizontals[category].length;
  showSlide(category, nextIndex);
};

onMounted(() => {
  categories.forEach(category => {
    setInterval(() => {
      nextSlide(category);
    }, 5000); // Troca de slide a cada 5 segundos (ajuste conforme necessário)
  });
});
</script>

<style scoped>
.opacity-100 {
  opacity: 1;
}
.opacity-0 {
  opacity: 0;
}

/* Adiciona um efeito de sombra para destacar o overlay */
.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Alternativamente, você pode adicionar uma borda ao fundo para aumentar o nível de separação */
.overlay-border {
  border: 2px solid rgba(0, 0, 0, 0.5); /* Ajuste a cor e a largura conforme necessário */
}

.slide-wrapper {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Ajuste o valor conforme necessário */
}
</style>
