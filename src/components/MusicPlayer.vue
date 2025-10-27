<template>
  <div
    v-if="currentSong"
    class="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 p-4 z-50"
  >
    <div class="container mx-auto flex items-center gap-4">
      <img 
        :src="currentSong.album_art" 
        :alt="currentSong.album"
        class="w-16 h-16 rounded-lg"
      />
      
      <div class="flex-1">
        <h4 class="font-semibold">{{ currentSong.name }}</h4>
        <p class="text-sm opacity-70">{{ currentSong.artist }}</p>
      </div>

      <div class="flex items-center gap-4">
        <button class="hover:scale-110 transition-transform text-2xl">⏮</button>
        <button 
          @click="togglePlay"
          class="hover:scale-110 transition-transform text-3xl"
        >
          {{ isPlaying ? '⏸️' : '▶️' }}
        </button>
        <button class="hover:scale-110 transition-transform text-2xl">⏭</button>
      </div>

      <div class="flex items-center gap-2">
        <button class="hover:scale-110 transition-transform">🔊</button>
        <a 
          :href="currentSong.spotify_url" 
          target="_blank"
          class="px-4 py-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
        >
          Open in Spotify
        </a>
      </div>
    </div>

    <audio
      v-if="currentSong.preview_url"
      ref="audioPlayer"
      :src="currentSong.preview_url"
      @ended="onEnded"
    ></audio>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useMoodStore } from '../store/moodStore'

const moodStore = useMoodStore()
const currentSong = computed(() => moodStore.currentlyPlaying)
const isPlaying = ref(false)
const audioPlayer = ref(null)

function togglePlay() {
  if (!audioPlayer.value || !currentSong.value?.preview_url) return
  
  if (isPlaying.value) {
    audioPlayer.value.pause()
  } else {
    audioPlayer.value.play()
  }
  
  isPlaying.value = !isPlaying.value
}

function onEnded() {
  isPlaying.value = false
}

watch(currentSong, (newSong) => {
  if (newSong && audioPlayer.value) {
    audioPlayer.value.load()
    isPlaying.value = false
  }
})
</script>
