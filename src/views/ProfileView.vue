<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold mb-8">Your Saved Songs</h2>

    <div v-if="savedSongs.length === 0" class="text-center py-12 opacity-70">
      <p class="text-xl">No saved songs yet</p>
      <p class="mt-2">Start saving songs from your mood recommendations!</p>
    </div>

    <div v-else class="grid gap-4">
      <div
        v-for="song in savedSongs"
        :key="song.id"
        class="mood-card flex items-center gap-4"
      >
        <img 
          :src="song.album_art" 
          :alt="song.album"
          class="w-20 h-20 rounded-lg object-cover"
        />
        
        <div class="flex-1">
          <h4 class="font-semibold text-lg">{{ song.name }}</h4>
          <p class="opacity-70">{{ song.artist }}</p>
          <p class="text-sm opacity-50">
            Saved from: {{ moodConfigs[song.mood]?.emoji }} {{ moodConfigs[song.mood]?.label }}
          </p>
        </div>

        <div class="flex gap-2">
          <a
            :href="song.spotify_url"
            target="_blank"
            class="px-4 py-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
          >
            🎵 Play
          </a>

          <button
            @click="removeSong(song.id)"
            class="px-4 py-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
          >
            🗑️ Remove
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

const moodStore = useMoodStore()
const savedSongs = computed(() => moodStore.savedSongs)

function removeSong(songId) {
  moodStore.removeSavedSong(songId)
}
</script>
