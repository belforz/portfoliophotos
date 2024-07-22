<template>
  <SplashView v-if="showingSplash"/>
  <div v-else class="flex-1 flex-col order-1 md:order-none">
    <div class="container mx-auto max-w-full 2xl:max-w-6xl">
      <HeaderView />
      <PCSlideshow />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import HeaderView from './HeaderView.vue';
import Footer from './Footer.vue';
import PCSlideshow from './PCSlideshow.vue';
import SplashView from './SplashView.vue';
import { splashScreen as photosSplashScreen } from '../photos.js'; // Ajuste o caminho conforme necessário

const router = useRouter();
const showingSplash = ref(photosSplashScreen);

const splashScreen = () => {
  if (photosSplashScreen) {
    setTimeout(() => {
      showingSplash.value = false;
      router.push(window.location.hash);
    }, 2000);
  }
};

onMounted(() => {
  splashScreen();
});
</script>
