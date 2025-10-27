import { defineStore } from 'pinia'

export const useMoodStore = defineStore('mood', {
  state: () => ({
    currentMood: 'happy',
    songs: [],
    loading: false,
    currentlyPlaying: null,
    savedSongs: JSON.parse(localStorage.getItem('savedSongs') || '[]'),
    error: null
  }),

  actions: {
    setMood(mood) {
      this.currentMood = mood
      this.fetchRecommendations(mood)
    },

    async fetchRecommendations(mood) {
      this.loading = true
      this.error = null
      
      try {
  // Temporary: Hard-coded API key for testing
  const codewordsApiKey = 'cwk-1f4f7180a6eeeb9f846e6ddffe921c6c215dda9803b66a18297b017e8f03d487'

        // Call CodeWords backend
        const response = await fetch('https://runtime.codewords.ai/run/moodtune_music_recommender_16330aa9', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${codewordsApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            mood: mood,
            limit: 10
          })
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.detail || `API error: ${response.status}`)
        }

        const data = await response.json()
        
        // CodeWords returns: { mood, songs[], total, message }
        this.songs = data.songs
        
        console.log('✅ Loaded', data.total, 'songs for', mood, 'mood')
        
      } catch (error) {
        console.error('Error fetching recommendations:', error)
        this.error = error.message || 'Failed to fetch recommendations'
      } finally {
        this.loading = false
      }
    },

    setCurrentlyPlaying(song) {
      this.currentlyPlaying = song
    },

    saveSong(song) {
      if (!this.savedSongs.find(s => s.id === song.id)) {
        this.savedSongs.push({
          ...song,
          mood: this.currentMood,
          savedAt: new Date().toISOString()
        })
        localStorage.setItem('savedSongs', JSON.stringify(this.savedSongs))
      }
    },

    removeSavedSong(songId) {
      this.savedSongs = this.savedSongs.filter(s => s.id !== songId)
      localStorage.setItem('savedSongs', JSON.stringify(this.savedSongs))
    }
  }
})
