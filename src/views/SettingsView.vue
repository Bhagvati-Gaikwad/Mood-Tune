<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-4xl font-bold mb-8">Settings</h2>

    <div class="mood-card mb-6">
      <h3 class="text-2xl font-semibold mb-4">CodeWords API Configuration</h3>
      
      <div class="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30 mb-4">
        <h4 class="font-semibold mb-2">📖 Setup Instructions:</h4>
        <ol class="list-decimal list-inside space-y-2 text-sm opacity-80">
          <li>Get your API key from <a href="https://codewords.agemo.ai/account/keys" target="_blank" class="underline text-blue-300">CodeWords Dashboard</a></li>
          <li>Create a <code class="bg-black/30 px-2 py-1 rounded">.env</code> file in your project root</li>
          <li>Add: <code class="bg-black/30 px-2 py-1 rounded">VITE_CODEWORDS_API_KEY=cwk-your-key-here</code></li>
          <li>Restart your dev server (<code class="bg-black/30 px-2 py-1 rounded">npm run dev</code>)</li>
        </ol>
      </div>

      <div class="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
        <h4 class="font-semibold mb-2">✅ Backend Service:</h4>
        <p class="text-sm opacity-80">MoodTune is powered by a CodeWords backend service that connects to Spotify.</p>
        <p class="text-sm opacity-80 mt-2">Service ID: <code class="bg-black/30 px-2 py-1 rounded">moodtune_music_recommender_16330aa9</code></p>
        <a 
          href="https://codewords.agemo.ai/run/moodtune_music_recommender_16330aa9" 
          target="_blank"
          class="inline-block mt-2 text-sm text-blue-300 underline"
        >
          Test Backend Directly →
        </a>
      </div>
    </div>

    <div class="mood-card">
      <h3 class="text-2xl font-semibold mb-4">Data Management</h3>
      
      <button
        @click="clearSavedSongs"
        class="px-6 py-3 bg-red-500 rounded-lg font-semibold 
               hover:bg-red-600 transition-colors"
      >
        Clear All Saved Songs
      </button>
    </div>
  </div>
</template>

<script setup>
import { useMoodStore } from '../store/moodStore'

const moodStore = useMoodStore()

function clearSavedSongs() {
  if (confirm('Are you sure you want to clear all saved songs?')) {
    localStorage.removeItem('savedSongs')
    moodStore.savedSongs = []
    alert('All saved songs cleared!')
  }
}
</script>
