<template>
  <div class="mb-24">
    <h3 class="text-3xl font-bold mb-6">
      Recommended for your {{ moodConfigs[currentMood]?.label }} mood
    </h3>

    <Loader v-if="loading" />

    <div v-else-if="error" class="text-center text-red-400 py-8">
      <p class="text-xl mb-2">❌ {{ error }}</p>
      <p class="text-sm opacity-70">Make sure your CodeWords API key is configured in .env file</p>
    </div>

    <div v-else-if="songs.length === 0" class="text-center py-8 opacity-70">
      <p>No songs found. Try a different mood!</p>
    </div>

    <div v-else class="grid gap-4">
      <div
        v-for="song in songs"
        :key="song.id"
        class="mood-card flex items-center gap-4 hover:bg-white/30"
      >
        <img 
          :src="song.album_art" 
          :alt="song.album"
          class="w-20 h-20 rounded-lg object-cover"
          @error="handleImageError"
        />
        
        <div class="flex-1">
          <h4 class="font-semibold text-lg">{{ song.name }}</h4>
          <p class="opacity-70">{{ song.artist }}</p>
          <p class="text-sm opacity-50">{{ song.album }}</p>
        </div>

        <div class="flex gap-2 flex-wrap">
          <button
            v-if="song.preview_url"
            @click="playPreview(song)"
            class="px-4 py-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors text-sm"
          >
            ▶️ Preview
          </button>
          
          <a
            :href="song.spotify_url"
            target="_blank"
            class="px-4 py-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors text-sm"
          >
            🎵 Spotify
          </a>

          <button
            @click="saveSong(song)"
            class="px-4 py-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors text-sm"
          >
            💾 Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMoodStore } from '../store/moodStore'
import { moodConfigs } from '../data/mockData'
import Loader from './Loader.vue'

const moodStore = useMoodStore()
const currentMood = computed(() => moodStore.currentMood)
const songs = computed(() => moodStore.songs)
const loading = computed(() => moodStore.loading)
const error = computed(() => moodStore.error)

function playPreview(song) {
  moodStore.setCurrentlyPlaying(song)
}

function saveSong(song) {
  moodStore.saveSong(song)
}

function handleImageError(e) {
  e.target.src = 'https://via.placeholder.com/80x80/1DB954/ffffff?text=🎵'
}
</script>
