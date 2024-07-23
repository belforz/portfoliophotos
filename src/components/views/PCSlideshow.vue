<template>
  <div class="flex justify-center text-7xl text-white bg-black py-8">Portfolio by belforz</div>
  <div class="relative w-full h-screen overflow-hidden" v-for="category in categories" :key="category">
    <div v-for="(photo, index) in photos[category]" :key="photo.id" class="slide-wrapper absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out" :class="{ 'opacity-100': currentIndexes[category] === index, 'opacity-0': currentIndexes[category] !== index }">
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
import { photos } from '../photos.js'; 
import ApresentationView from './ApresentationView.vue';

const categories = Object.keys(photos);
const currentIndexes = ref({});

// Inicializar os índices atuais para cada categoria
categories.forEach(category => {
  currentIndexes.value[category] = 0;
});

const showSlide = (category, index) => {
  currentIndexes.value[category] = index;
};

const nextSlide = (category) => {
  const nextIndex = (currentIndexes.value[category] + 1) % photos[category].length;
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
