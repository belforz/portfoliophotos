<template>
  <div>
    <!-- Exibe o SplashView sem transição -->
    <SplashView v-if="showingSplash" key="splash" />

    <!-- Aplica a transição apenas ao conteúdo principal -->
    <PagesLoad v-else>
      <div class="flex-1 flex-col order-1 md:order-none" key="main">
        <div class="container mx-auto max-w-full 2xl:max-w-6xl">
          <!-- <HeaderView /> -->
          <div class="z-50">
           <LayoutView/>
          
          </div>

          <!-- <PCSlideshow /> -->
           

           <div class="flex justify-center">
            <ApresentationView />

          </div> 
          <Footer />
        </div>
      </div>
    </PagesLoad>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import HeaderView from './HeaderView.vue';
import Footer from './Footer.vue';
import PCSlideshow from './PCSlideshow.vue';
import SplashView from './SplashView.vue';
import ApresentationView from './ApresentationView.vue';
import { splashScreen as photosSplashScreen } from '../photos.js'; // Ajuste o caminho conforme necessário
import LayoutView from './LayoutView.vue';
import PagesLoad from '@/transitions/PagesLoad.vue';

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
