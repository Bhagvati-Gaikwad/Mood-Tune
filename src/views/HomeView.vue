<template>
  <div>
    <MoodHeader />
    <MoodSelector />
    <MusicList />
    <MusicPlayer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMoodStore } from '../store/moodStore'
import MoodHeader from '../components/MoodHeader.vue'
import MoodSelector from '../components/MoodSelector.vue'
import MusicList from '../components/MusicList.vue'
import MusicPlayer from '../components/MusicPlayer.vue'

const moodStore = useMoodStore()

onMounted(() => {
  // Load recommendations for default mood
  moodStore.fetchRecommendations(moodStore.currentMood)
})
</script>
