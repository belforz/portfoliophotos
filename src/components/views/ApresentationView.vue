<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-black">
    <div class="flex flex-col items-center p-6 bg-black rounded-lg shadow-md text-center">
      <div class="icon-container relative w-16 h-16 animate-glow">
        <div v-for="(icon, index) in iconsOne" :key="index" class="absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out" :class="{ 'opacity-100': currentIconIndexOne === index, 'opacity-0': currentIconIndexOne !== index }">
          <img :src="icon" alt="Portrait One" class="w-full h-full object-cover rounded-full" />
        </div>
      </div>
      <p class="mt-4 text-lg font-semibold text-white">{{ greeting.messageOne }}</p>
    </div>
    <div class="flex flex-col items-center p-6 bg-black rounded-lg shadow-md text-center">
      <div class="icon-container relative w-16 h-16 animate-glow">
        <div v-for="(icon, index) in iconsTwo" :key="index" class="absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out" :class="{ 'opacity-100': currentIconIndexTwo === index, 'opacity-0': currentIconIndexTwo !== index }">
          <img :src="icon" alt="Portrait Two" class="w-full h-full object-cover rounded-full" />
        </div>
      </div>
      <p class="mt-4 text-lg font-semibold text-white">{{ greeting.messageTwo }}</p>
    </div>
    <div class="flex flex-col items-center p-6 bg-black rounded-lg shadow-md text-center">
      <div class="icon-container relative w-16 h-16 animate-glow">
        <div v-for="(icon, index) in iconsThree" :key="index" class="absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out" :class="{ 'opacity-100': currentIconIndexThree === index, 'opacity-0': currentIconIndexThree !== index }">
          <img :src="icon" alt="Portrait Three" class="w-full h-full object-cover rounded-full" />
        </div>
      </div>
      <p class="mt-4 text-lg font-semibold text-white">{{ greeting.messageThree }}</p>
    </div>

  </div>


</template>


  
  
<script setup>
import { ref, onMounted } from 'vue';
import { greeting } from '../photos';

const currentIconIndexOne = ref(0);
const currentIconIndexTwo = ref(0);
const currentIconIndexThree = ref(0);

const iconsOne = [
  greeting.portraitLink,
  greeting.portraitLinkFour,
  greeting.portraitLinkFive,
  greeting.portraitLinkSix,
  greeting.portraitLinkThirteen,
  greeting.portraitLinkSixteen,
  greeting.portraitLinkNineteen,
];

const iconsTwo = [
  greeting.portraitLinkTwo,
  greeting.portraitLinkSeven,
  greeting.portraitLinkEight,
  greeting.portraitLinkNine,
  greeting.portraitLinkFourteen,
  greeting.portraitLinkSeventeen,
  greeting.portraitLinkTwenty,
];

const iconsThree = [
  greeting.portraitLinkThree,
  greeting.portraitLinkTen,
  greeting.portraitLinkEleven,
  greeting.portraitLinkTwelve,
  greeting.portraitLinkFiveteen,
  greeting.portraitLinkEighteen,
];

const changeIcon = (iconsArray, currentIndexRef) => {
  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % iconsArray.length;
    currentIndexRef.value = currentIndex;
  }, 5000);
};

onMounted(() => {
  changeIcon(iconsOne, currentIconIndexOne);
  changeIcon(iconsTwo, currentIconIndexTwo);
  changeIcon(iconsThree, currentIconIndexThree);
});
</script>



<style scoped>
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 10px 2px rgba(128, 0, 128, 0.5);
  }
  50% {
    box-shadow: 0 0 20px 4px rgba(128, 0, 128, 0.8);
  }
}

.animate-glow {
  animation: glow 5s infinite ease-in-out;
  border-radius: 50%;
}

.animate-glow .icon-container {
  animation: glow 5s infinite ease-in-out;
  padding: 5px; /* Optional: add padding to make the glow more prominent */
  border-radius: 50%;
}

/* .animate-glow p {
  animation: glow 2s infinite ease-in-out;
} */
</style>

