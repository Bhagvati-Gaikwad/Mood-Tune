<template>
  <div class="mb-12">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
      <div
        v-for="(config, mood) in moodConfigs"
        :key="mood"
        @click="selectMood(mood)"
        class="mood-card text-center"
        :class="{ 'ring-4 ring-white': currentMood === mood }"
      >
        <div class="text-5xl mb-2">{{ config.emoji }}</div>
        <div class="font-semibold text-lg">{{ config.label }}</div>
        <div class="text-xs opacity-70 mt-1">{{ config.description }}</div>
      </div>
    </div>

    <div class="text-center">
      <button
        @click="detectMood"
        :disabled="detecting"
        class="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 
               rounded-full font-semibold text-lg hover:scale-105 
               transition-transform disabled:opacity-50 disabled:cursor-not-allowed
               shadow-lg hover:shadow-2xl"
      >
        <span v-if="!detecting">🔮 Detect My Mood</span>
        <span v-else>🔮 Detecting... {{ Math.round(progress) }}%</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMoodStore } from '../store/moodStore'
import { moodConfigs } from '../data/mockData'

const moodStore = useMoodStore()
const currentMood = computed(() => moodStore.currentMood)
const detecting = ref(false)
const progress = ref(0)

function selectMood(mood) {
  moodStore.setMood(mood)
}

async function detectMood() {
  detecting.value = true
  progress.value = 0
  
  // Simulate AI mood detection
  const interval = setInterval(() => {
    progress.value += 5
    if (progress.value >= 100) {
      clearInterval(interval)
    }
  }, 100)
  
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Pick a random mood
  const moods = ['happy', 'sad', 'calm', 'energetic', 'party', 'romantic', 'focused']
  const randomMood = moods[Math.floor(Math.random() * moods.length)]
  
  moodStore.setMood(randomMood)
  detecting.value = false
  progress.value = 0
}
</script>
