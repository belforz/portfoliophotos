<!--Footer container-->
<template>
  <footer
    class=" bg-black dark:bg-gray-900 flex flex-col items-center text-white text-center text-surface dark:bg-neutral-700 dark:text-white lg:text-left">
    <div class="container p-6">
      <div class="grid gap-4 lg:grid-cols-2">
        <div class="mb-6 md:mb-0">
          <h5 class="mb-2 font-medium uppercase">Sobre a fotografia</h5>

          <p class="mb-4">
            Olá, aqui é o Leandro, um fã das caracteristicas de fotografia. Suas simplicidades, emoções, sentimentos,
            cargas e acima de tudo, corações. Por que corações?
            Talvez uma imagem representa apenas um momento unico do passado, porque ao ter captura, já é o passado.
            Então é meu coração, o seu, o dele ou dela naquele instante
            e que será eterno.
          </p>
        </div>

        <div class="mb-6 md:mb-0">
          <h5 class="mb-2 font-medium uppercase">Sobre o portfolio</h5>

          <p class="mb-4">
            Todos têm um olhar fotográfico, alguns trabalham com isso e outros momentâneos e eu sou ambos. Este site tem
            a sua função de demonstrar
            minhas capturas de momentos do passado com a finalidade de demonstrar esses <em>glimpses</em> da vida a
            partir de minha visão e
            mostrar ao mundo aquele que o Leandro se insere.
          </p>
        </div>
        <div class="fixed bottom-4 right-4 flex flex-col items-center space-y-4">
          <!-- GitHub Icon -->
          <a v-if="githubLink" :href="githubLink" target="_blank">
            <svg
              class="h-8 w-8 text-white transition-transform ease-out hover:-translate-y-1 duration-300 dark:text-slate-300"
              viewBox="0 0 256 208" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
              <g>
                <path
                  d="M205.28,31.36 C219.376,46.24 225.296,66.56 227.792,95.04 C234.417867,95.04 240.5968,96.5093333 244.768,102.192 L252.56,112.752 C254.8,115.792 256,119.424 256,123.2 L256,151.888 C255.992,155.592267 254.1568,159.203467 251.168,161.392 C215.885333,187.222133 172.3496,208 128,208 C78.9344,208 29.8098667,179.726667 4.832,161.392 C1.84330667,159.203467 0.00722666667,155.592267 0,151.888 L0,123.2 C0,119.424 1.2,115.776 3.424,112.736 L11.216,102.192 C15.3891733,96.5349333 21.5953067,95.04 28.208,95.04 C30.704,66.56 36.608,46.24 50.72,31.36 C77.3312,3.1648 112.56728,0.06016 127.552142,0.00088672 L128,0 C142.72,0 178.4,2.88 205.28,31.36 Z M128.016,78.736 C124.976,78.736 121.472,78.912 117.744,79.28 C116.432,84.176 114.496,88.592 111.664,91.408 C100.464,102.608 86.96,104.336 79.728,104.336 C72.9258667,104.336 65.8005333,102.915733 59.984,99.248 C54.4816,101.056 49.1978667,103.6632 48.848,110.16 C48.2621333,122.440533 48.2112,134.709333 48.1602667,146.984 C48.1336,153.144533 48.1093333,159.3064 48.016,165.472 C48.04,169.050667 50.1978667,172.3752 53.456,173.856 C79.936,185.92 104.976,192 128.016,192 C151.024,192 176.064,185.92 202.528,173.856 C205.786133,172.3752 207.9432,169.050667 207.968,165.472 C208.285333,147.0536 208.029867,128.560267 207.152,110.16 L207.168,110.16 C206.826133,103.625867 201.520267,101.061867 196,99.248 C190.179467,102.899733 183.072533,104.336 176.272,104.336 C169.04,104.336 155.552,102.608 144.336,91.408 C141.504,88.592 139.568,84.176 138.256,79.28 C134.853333,78.9338667 131.436,78.7525333 128.016,78.736 Z M101.074933,122.666667 C106.8232,122.666667 111.4832,127.326667 111.4832,133.074933 L111.4832,152.2584 C111.4832,158.006667 106.8232,162.666667 101.074933,162.666667 C95.3266667,162.666667 90.6666667,158.006667 90.6666667,152.2584 L90.6666667,133.074933 C90.6666667,127.326667 95.3266667,122.666667 101.074933,122.666667 Z M154.408267,122.666667 C160.156533,122.666667 164.816533,127.326667 164.816533,133.074933 L164.816533,133.074933 L164.816533,152.2584 C164.816533,158.006667 160.156533,162.666667 154.408267,162.666667 C148.66,162.666667 144,158.006667 144,152.2584 L144,152.2584 L144,133.074933 C144,127.326667 148.66,122.666667 154.408267,122.666667 Z M81.44,28.32 C70.24,29.44 60.8,33.12 56,38.24 C45.6,49.6 47.84,78.4 53.76,84.48 C58.08,88.8 66.24,91.68 75.04,91.68 C81.76,91.68 94.56,90.24 105.12,79.52 C109.76,75.04 112.64,63.84 112.32,52.48 C112,43.36 109.44,35.84 105.6,32.64 C101.44,28.96 92,27.36 81.44,28.32 Z M150.4,32.64 C146.56,35.84 144,43.36 143.68,52.48 C143.36,63.84 146.24,75.04 150.88,79.52 C161.44,90.24 174.24,91.68 180.96,91.68 C189.76,91.68 197.92,88.8 202.24,84.48 C208.16,78.4 210.4,49.6 200,38.24 C195.2,33.12 185.76,29.44 174.56,28.32 C164,27.36 154.56,28.96 150.4,32.64 Z M128,56 C125.44,56 122.4,56.16 119.04,56.48 C119.36,58.24 119.52,60.16 119.68,62.24 C119.68,63.68 119.68,65.12 119.52,66.72 C122.72,66.4 125.44,66.4 128,66.4 C130.559733,66.4 133.28,66.4 136.48,66.72 C136.32,65.12 136.32,63.6802667 136.32,62.2402667 C136.48,60.1602667 136.64,58.24 136.96,56.48 C133.6,56.16 130.56,56 128,56 Z"
                  ></path>
              </g>
            </svg>

          </a>

          <!-- Instagram Icon -->
          <a v-if="instagramLink" :href="instagramLink" target="_blank">
            <svg
              class="h-8 w-8 text-white transition-transform ease-out hover:-translate-y-1 duration-300 dark:text-slate-300"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M12 2.163c3.18 0 3.559.012 4.826.07 1.223.055 2.092.235 2.643.397a5.363 5.363 0 0 1 1.876 1.259c.457.457.813.98 1.058 1.58.33.865.545 1.825.61 2.79.057 1.242.059 1.627.059 4.814s-.002 3.572-.059 4.814c-.065.964-.28 1.924-.61 2.79a5.364 5.364 0 0 1-1.58 1.876c-.865.33-1.842.595-2.643.65-1.267.058-1.646.07-4.826.07-3.18 0-3.558-.012-4.826-.07-1.223-.055-2.092-.235-2.643-.397a5.363 5.363 0 0 1-1.876-1.259c-.457-.457-.813-.98-1.058-1.58-.33-.865-.545-1.825-.61-2.79-.057-1.242-.059-1.627-.059-4.814s.002-3.572.059-4.814c.065-.964.28-1.924.61-2.79a5.364 5.364 0 0 1 1.58-1.876c.865-.33 1.842-.595 2.643-.65 1.267-.058 1.646-.07 4.826-.07zm0-2.163c-3.194 0-3.584.012-4.847.071-1.281.06-2.558.272-3.646.644-1.084.373-2.055.88-2.866 1.591a7.992 7.992 0 0 0-1.592 2.866c-.37 1.088-.583 2.365-.644 3.646-.059 1.264-.071 1.654-.071 4.847 0 3.194.012 3.583.071 4.847.06 1.281.272 2.558.644 3.646a7.992 7.992 0 0 0 1.592 2.866c.811.711 1.782 1.218 2.866 1.591 1.088.373 2.365.585 3.646.645 1.264.059 1.654.071 4.847.071 3.194 0 3.584-.012 4.847-.071 1.281-.06 2.558-.272 3.646-.645 1.084-.373 2.055-.88 2.866-1.591a7.992 7.992 0 0 0 1.592-2.866c.37-1.088.583-2.365.644-3.646.059-1.264.071-1.654.071-4.847 0-3.194-.012-3.583-.071-4.847-.06-1.281-.272-2.558-.644-3.646a7.992 7.992 0 0 0-1.592-2.866c-.811-.711-1.782-1.218-2.866-1.591-1.088-.373-2.365-.585-3.646-.644-1.264-.059-1.654-.071-4.847-.071zM12 6.972a5.028 5.028 0 1 0 0 10.057 5.028 5.028 0 0 0 0-10.057zm0 8.057a3.028 3.028 0 1 1 0-6.057 3.028 3.028 0 0 1 0 6.057zm4.579-6.131a1.073 1.073 0 1 0 0 2.145 1.073 1.073 0 0 0 0-2.145z" />
            </svg>
          </a>
          <!-- Play Music -->
           <PlayCircle v-if="!isPlaying" class="h-10 w-10 text-white cursor-pointer hover:text-green-500" @click="toggleAudio"/>
           <button @click="toggleAudio">
      
    </button>
    
    <audio ref="audioPlayer" loop>
      <source :src="musicPath" type="audio/mpeg">
      Seu navegador não suporta o elemento de áudio.
    </audio>
           <StopCircle v-if="isPlaying" class="h-10 w-10 text-white cursor-pointer hover:text-red-500" @click="toggleAudio"/>
 
        </div>
      </div>
    </div>

    <!--Copyright section-->
    <div class="w-full bg-black/5 p-4 text-center">
      © Todas as fotos têm direitos reservados, caso queira as usar para outros, mande-me um <a
        href="mailto:macedobeiramar@hotmail.com">email.</a>

    </div>
  </footer>
</template>

<script setup>
import { socialMedia } from '../photos';
import { ref } from 'vue';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { backgroundSong } from '../photos';
import { PlayCircle, StopCircle } from 'lucide-vue-next';


const githubLink = socialMedia.github;
const instagramLink = socialMedia.instagram;

const audioPlayer = ref(null);
const isPlaying = ref(false);
const musicPath = backgroundSong.musicLink;

const toggleAudio = () => {
  if (isPlaying.value) {
    audioPlayer.value.pause();
  } else {
    audioPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};
</script>
