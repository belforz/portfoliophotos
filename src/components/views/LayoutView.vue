<template>
  <div class="p-4 bg-black">
    <div>
      <!-- Photos BW -->
      <div v-for="(category, categoryName) in photosBW" :key="categoryName" class="mb-12">
        <h2 class="text-2xl text-center text-white mb-6">{{ categoryName }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(photo, index) in category" :key="photo.id"
            class="relative pb-[100%] border-2 border-white group">
            <div class="absolute inset-0 overflow-hidden">
              <img :src="photo.imageLink" :alt="photo.title"
                class="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-150 " />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white">
                <p>{{ photo.description }}</p>
              </div>
            </div>
            <div class="absolute inset-0 grid grid-cols-2 grid-rows-1">
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <!-- <div class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300"></div>
              <div class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300"></div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Photos Colored -->
      <div class="mb-12">
        <h2 class="text-2xl text-center text-white mb-6"> landscapes</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(photo, index) in photosLandscapes" :key="photo.id"
            class="relative pb-[100%] border-2 border-white group">
            <div class="absolute inset-0 overflow-hidden">
              <img :src="photo.imageLink" :alt="photo.title"
                class="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500" />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white">
                <p>{{ photo.description }}</p>
              </div>
            </div>
            <div class="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="mb-12">
        <h2 class="text-2xl text-center text-white mb-6"> emotions</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(photo, index) in photosEmotions" :key="photo.id"
            class="relative pb-[100%] border-2 border-white group">
            <div class="absolute inset-0 overflow-hidden">
              <img :src="photo.imageLink" :alt="photo.title"
                class="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500" />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white">
                <p>{{ photo.description }}</p>
              </div>
            </div>
            <div class="absolute inset-0 grid grid-cols-3 grid-rows-3">
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
              <div
                class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
              </div>
            </div>
          </div>
        </div>
      </div>

        <div class="mb-12">
          <h2 class="text-2xl text-center text-white mb-6"> world</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="(photo, index) in photosWorld" :key="photo.id"
              class="relative pb-[100%] border-2 border-white group">
              <div class="absolute inset-0 overflow-hidden">
                <img :src="photo.imageLink" :alt="photo.title"
                  class="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500" />
                <div
                  class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white">
                  <p>{{ photo.description }}</p>
                </div>
              </div>
              <div class="absolute inset-0 grid grid-cols-4 grid-rows-4">
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
                <div
                  class="col-span-1 row-span-1 bg-black bg-opacity-1 group-hover:bg-opacity-0 transition-all duration-300">
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { photosBW, photos } from '../photos.js';

const photosLandscapes = photos.landscapes;
const photosEmotions = photos.emotions;
const photosWorld = photos.world;


</script>

<style scoped>
.relative {
  position: relative;
}

.overflow-hidden {
  overflow: hidden;
}

.border-2 {
  border-width: 2px;
}

.border-white {
  border-color: white;
}

.group-hover\:scale-150:hover {
  /* transform: scale(1.5); */
}

.group-hover\:rotate-12:hover {
  /* transform: rotate(12deg); */
}

.group-hover\:bg-opacity-0:hover {
  background-opacity: 0;
}

.group-hover\:opacity-50:hover {
  opacity: 0.9;
}
</style>
