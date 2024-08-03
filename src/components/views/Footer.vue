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
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.305 3.438 9.794 8.205 11.387.6.114.82-.261.82-.577v-2.178c-3.338.724-4.043-1.58-4.043-1.58-.545-1.38-1.333-1.746-1.333-1.746-1.089-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.071 1.837 2.809 1.305 3.493 1 .108-.775.418-1.305.762-1.606-2.664-.303-5.467-1.332-5.467-5.93 0-1.311.47-2.382 1.24-3.22-.125-.303-.54-1.522.11-3.171 0 0 1.008-.323 3.3 1.23.956-.267 1.986-.402 3.016-.405 1.03.003 2.06.139 3.016.405 2.292-1.553 3.3-1.23 3.3-1.23.653 1.649.237 2.868.115 3.171.769.838 1.238 1.909 1.238 3.22 0 4.607-2.808 5.626-5.48 5.922.431.372.825 1.104.825 2.225v3.293c0 .315.217.693.823.577C20.563 21.791 24 17.302 24 12 24 5.37 18.63 0 12 0z" />
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
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const githubLink = socialMedia.github;
const instagramLink = socialMedia.instagram;
</script>
