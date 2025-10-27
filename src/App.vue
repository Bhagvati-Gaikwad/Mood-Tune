<template>
  <div 
    class="min-h-screen transition-all duration-1000 gradient-bg"
    :style="backgroundGradient"
  >
    <nav class="bg-black/30 backdrop-blur-md border-b border-white/10">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🎵 MoodTune
          </h1>
          <div class="flex gap-4">
            <router-link 
              to="/" 
              class="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
              active-class="bg-white/20"
            >
              🏠 Home
            </router-link>
            <router-link 
              to="/profile" 
              class="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
              active-class="bg-white/20"
            >
              👤 Profile
            </router-link>
            <router-link 
              to="/settings" 
              class="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
              active-class="bg-white/20"
            >
              ⚙️ Settings
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMoodStore } from './store/moodStore'

const moodStore = useMoodStore()

const backgroundGradient = computed(() => {
  const mood = moodStore.currentMood
  const gradients = {
    happy: 'background-image: linear-gradient(135deg, #FFA500, #FFD700, #FF8C00)',
    sad: 'background-image: linear-gradient(135deg, #4A5568, #2D3748, #1A202C)',
    calm: 'background-image: linear-gradient(135deg, #38B2AC, #4FD1C5, #81E6D9)',
    energetic: 'background-image: linear-gradient(135deg, #E53E3E, #FC8181, #F56565)',
    party: 'background-image: linear-gradient(135deg, #9F7AEA, #B794F4, #D6BCFA)',
    romantic: 'background-image: linear-gradient(135deg, #ED64A6, #F687B3, #FBB6CE)',
    focused: 'background-image: linear-gradient(135deg, #4299E1, #63B3ED, #90CDF4)',
  }
  
  return gradients[mood] || gradients.happy
})
</script>
