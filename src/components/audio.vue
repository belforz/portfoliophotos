<template>
  <div class="grid gap-4 lg:grid-cols-2 items-center justify-center p-4 bg-gray-800 text-white rounded-lg shadow-md">
    <button @click="toggleAudio">
      {{ isPlaying ? `${backgroundSong.pauseSong}` : `${backgroundSong.playSong}` }}
    </button>
    
    <audio ref="audioPlayer" loop>
      <source :src="musicPath" type="audio/mpeg">
      Seu navegador não suporta o elemento de áudio.
    </audio>
  </div>

  
</template>

<script setup>
import { ref } from 'vue';

</script>