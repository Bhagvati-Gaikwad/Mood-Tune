<template>
  <div class="text-center mb-12">
    <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
      How are you feeling today?
    </h2>
    <p v-if="currentMood" class="text-2xl opacity-80">
      Currently vibing: 
      <span class="text-3xl ml-2">{{ moodConfigs[currentMood]?.emoji }}</span>
      <span class="font-semibold ml-2">{{ moodConfigs[currentMood]?.label }}</span>
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMoodStore } from '../store/moodStore'
import { moodConfigs } from '../data/mockData'

const moodStore = useMoodStore()
const currentMood = computed(() => moodStore.currentMood)
</script>
