<template>
  <div class="mb-12">
    <h1 class="text-4xl text-center text-white mb-6 p-6 border-b-4 border-white pb-4">Reflexos de Fotografias: Um
      Passeio Virtual</h1>
  </div>
  <div class="relative w-full h-screen overflow-hidden" v-for="category in categories" :key="category">
    <div v-for="(photo, index) in photosHorizontals[category]" :key="photo.id"
      class="slide-wrapper absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out"
      :class="{ 'opacity-100': currentIndexes[category] === index, 'opacity-0': currentIndexes[category] !== index }">
      <img :src="photo.imageLink" :alt="photo.title" class="w-full h-full object-cover">
      <div
        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-6 shadow-md">
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
    { id: 1, title: 'River with Boats', description: 'Kinda hot', imageLink: 'images/IMG_6672.jpg' },
    { id: 2, title: 'Praia Grande Sunset', description: 'In The Horizon', imageLink: 'images/IMG_4084.jpg' },
    { id: 3, title: 'Movements', description: 'Sincronization', imageLink: 'images/IMG_8313.jpg' },
    { id: 4, title: 'Life', description: 'is Árvores', imageLink: 'images/IMG_6973.jpg' },
  ],
  emotions: [
    { id: 1, title: 'Cold', description: 'Waves', imageLink: 'images/IMG_4187.jpg' },
    { id: 2, title: 'aRT', description: 'Collections Of Useless', imageLink: 'images/IMG_5816.jpg' },
    { id: 3, title: 'The Life', description: 'Threes', imageLink: 'images/IMG_6973.jpg' },
    { id: 4, title: 'Condominius', description: 'All at once', imageLink: 'images/IMG_2785.jpg' }
  ],
  vacations: [
    { id: 1, title: 'Water', description: 'Sun', imageLink: 'images/vacations14.jpg' },
    { id: 2, title: 'Cliff', description: 'At the end', imageLink: 'images/vacations2.jpg' },
    { id: 3, title: 'Water II', description: 'Nothing more', imageLink: 'images/vacations13.jpg' },
    { id: 4, title: 'People', description: 'All at once', imageLink: 'images/vacations12.jpg' }
  ],
  world: [
    { id: 1, title: 'dECK', description: 'Contrast of The New', imageLink: 'images/IMG_2294.jpg' },
    { id: 2, title: 'Rio', description: 'Immensity', imageLink: 'images/IMG_2232.jpg' },
    { id: 3, title: 'Belém', description: 'Constrast of The Old', imageLink: 'images/IMG_6915.jpg' },
    { id: 4, title: 'Casa das Onze Janelas', description: 'Localiza ai', imageLink: 'images/IMG_6070.jpg' }
  ],
  BW: [
    { id: 1, title: 'Immensity', description: 'There is one?', imageLink: 'images/Ultralight_IMG_5835.jpg' },
    { id: 2, title: 'Rain Season', description: 'Avenue', imageLink: 'images/bw2.jpg' },
    { id: 3, title: 'Immensity', description: 'Feels Different', imageLink: 'images/bw1.jpg' },
    { id: 4, title: 'Glasses', description: '?', imageLink: 'images/bw4.jpg' }
  ]
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
    }, 5000); // Troca de slide a cada 5 segundos
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
  border: 2px solid rgba(0, 0, 0, 0.5);
  /* Ajuste a cor e a largura conforme necessário */
}

.slide-wrapper {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  /* Ajuste o valor conforme necessário */
}
</style>
