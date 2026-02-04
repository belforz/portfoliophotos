<template>
  <div class="mb-12">
    <h1
      class="text-4xl text-center text-white mb-6 p-6 border-b-4 border-white pb-4"
    >
      Reflexos de Fotografias: Um Passeio Virtual
    </h1>
  </div>
  <div
    class="relative w-full h-screen overflow-hidden"
    v-for="category in categories"
    :key="category"
  >
    <div
      v-for="(photo, index) in photosHorizontals[category]"
      :key="photo.id"
      class="slide-wrapper absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out"
      :class="{
        'opacity-100': currentIndexes[category] === index,
        'opacity-0': currentIndexes[category] !== index,
      }"
    >
      <template v-if="photo.type === 'text'">
        <div
          class="w-full h-full bg-black text-white flex items-center justify-center px-8 text-center"
        >
          <p
            class="text-2xl md:text-4xl font-light leading-relaxed whitespace-pre-line"
          >
            <span>{{ typedTextBefore }}</span>
            <span v-if="!isTypingAfter" class="blinking-cursor">|</span>
            <br />
            <span class="text-3xl md:text-5xl font-bold text-yellow-300">{{
              typedTextAfter
            }}</span>
            <span v-if="isTypingAfter" class="blinking-cursor">|</span>
          </p>
        </div>
      </template>

      <template v-else-if="photo.div">
        <div :class="photo.div"></div>
      </template>

      <template v-else>
        <div class="bg-black h-16"></div>
          <img
            :src="photo.imageLink"
            :alt="photo.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-6 shadow-md"
          >
            <h2 class="text-2xl font-bold">{{ photo.title }}</h2>
            <p class="text-lg mt-2">{{ photo.description }}</p>
          </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onStartTyping } from "@vueuse/core";
import { ref, onMounted, watch } from "vue";

const typedTextBefore = ref("");
const typedTextAfter = ref("");
const isTypingAfter = ref(false);

function typeEffectDual(part1, part2) {
  typedTextBefore.value = "";
  typedTextAfter.value = "";
  isTypingAfter.value = false;

  let index = 0;

  const interval1 = setInterval(() => {
    if (index < part1.length) {
      typedTextBefore.value += part1[index];
      index++;
    } else {
      clearInterval(interval1);
      isTypingAfter.value = true;
      startTypingAfter();
    }
  }, 100);

  function startTypingAfter() {
    let idx = 0;
    const interval2 = setInterval(() => {
      if (idx < part2.length) {
        typedTextAfter.value += part2[idx];
        idx++;
      } else {
        clearInterval(interval2);
      }
    }, 100);
  }
}

onMounted(() => {
  const photo = photosHorizontals.specialFather.find((p) => p.type === "text");
  if (photo) {
    typeEffectDual(photo.textPart1, photo.textPart2);
  }
});

// array local de fotos horizontais
const photosHorizontals = {
  specialFather: [
    {
      id: 1,
      type: "text",
      textPart1:
        "Raimundo, queria lhe contar sobre as mudanças tanto pessoais como profissionais ao longo desse 1 ano, queria poder lhe dizer o quanto sou grato por todas as coisas que o senhor me proporcionou, queria dizer tantas coisas mas não consigo dizer nada sem você ao lado. Isso talvez faça parte da vida e como dói saber que não vou poder contar mais. Porém, tem algo que lhe digo,",
      textPart2: "o meu eu te amo onde quer que esteja.",
    },
  ],
  specialFatherInit: [
    {
      div: "border-t border-white !mt-10 my-4",
      configurable: false,
    },
  ],
  specialPhotoFather: [{ id: 2, imageLink: "images/pai_editado.jpeg" }],
  specialFatherEnd: [{
    div: "border-t border-white !mb-10 my-4",
    configurable: false
    
  }],
  special: [
    {
      id: 1,
      title: "Mutual",
      description: "Connections",
      imageLink: "images/copacabana-view.jpg",
    },
    {
      id: 2,
      title: "Lady Gaga",
      description: "Paws Up",
      imageLink: "images/gaga1.jpg",
    },
    {
      id: 3,
      title: "Over the Horizon",
      description: "Energies",
      imageLink: "images/imensidao.jpg",
    },
    {
      id: 4,
      title: "Flamingo",
      description: "Cave",
      imageLink: "images/fa.jpg",
    },
  ],
  landscapes: [
    {
      id: 1,
      title: "River with Boats",
      description: "Kinda hot",
      imageLink: "images/IMG_6672.jpg",
    },
    {
      id: 2,
      title: "Praia Grande Sunset",
      description: "In The Horizon",
      imageLink: "images/IMG_4084.jpg",
    },
    {
      id: 3,
      title: "Movements",
      description: "Sincronization",
      imageLink: "images/IMG_8313.jpg",
    },
    {
      id: 4,
      title: "Life",
      description: "is Árvores",
      imageLink: "images/IMG_6973.jpg",
    },
  ],
  emotions: [
    {
      id: 1,
      title: "Cold",
      description: "Waves",
      imageLink: "images/IMG_4187.jpg",
    },
    {
      id: 2,
      title: "aRT",
      description: "Collections Of Useless",
      imageLink: "images/IMG_5816.jpg",
    },
    {
      id: 3,
      title: "The Life",
      description: "Threes",
      imageLink: "images/IMG_6973.jpg",
    },
    {
      id: 4,
      title: "Condominius",
      description: "All at once",
      imageLink: "images/IMG_2785.jpg",
    },
  ],
  vacations: [
    {
      id: 1,
      title: "Water",
      description: "Sun",
      imageLink: "images/vacations14.jpg",
    },
    {
      id: 2,
      title: "Cliff",
      description: "At the end",
      imageLink: "images/vacations2.jpg",
    },
    {
      id: 3,
      title: "Water II",
      description: "Nothing more",
      imageLink: "images/vacations13.jpg",
    },
    {
      id: 4,
      title: "People",
      description: "All at once",
      imageLink: "images/vacations12.jpg",
    },
  ],
  world: [
    // { id: 1, title: 'Guanabara', description: 'Contrast of The New', imageLink: 'images/guanabara.jpg' },
    {
      id: 2,
      title: "Rio",
      description: "Immensity",
      imageLink: "images/IMG_2232.jpg",
    },
    {
      id: 3,
      title: "Belém",
      description: "Constrast of The Old",
      imageLink: "images/IMG_6915.jpg",
    },
    // { id: 4, title: 'Gavea and the Lagoa', description: 'Localiza ai', imageLink: 'images/gavea-lagoa.jpg' }
  ],
  BW: [
    {
      id: 1,
      title: "Immensity",
      description: "There is one?",
      imageLink: "images/Ultralight_IMG_5835.jpg",
    },
    {
      id: 2,
      title: "Rain Season",
      description: "Avenue",
      imageLink: "images/bw2.jpg",
    },
    {
      id: 3,
      title: "Immensity",
      description: "Feels Different",
      imageLink: "images/bw1.jpg",
    },
    { id: 4, title: "Glasses", description: "?", imageLink: "images/bw4.jpg" },
  ],
};

const categories = Object.keys(photosHorizontals);
const currentIndexes = ref({});

// Inicializar os índices atuais para cada categoria
categories.forEach((category) => {
  currentIndexes.value[category] = 0;
});

const showSlide = (category, index) => {
  currentIndexes.value[category] = index;
};

const nextSlide = (category) => {
  const nextIndex =
    (currentIndexes.value[category] + 1) % photosHorizontals[category].length;
  showSlide(category, nextIndex);
};

onMounted(() => {
  categories.forEach((category) => {
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

.blinking-cursor {
  font-weight: bold;
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}
</style>
