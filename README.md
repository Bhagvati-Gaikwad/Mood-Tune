# 🎵 MoodTune - Mood-Based Music Discovery

A beautiful Vue 3 web application that recommends music based on your current mood, powered by Spotify and CodeWords backend.

## Live at https://68fde18c366de6ba0a09f016--stunning-gumption-b0d6fd.netlify.app/

## ✨ Features

- 🎭 **7 Mood Options**: Happy, Sad, Calm, Energetic, Party, Romantic, Focused
- 🎵 **Real Spotify Integration**: Live music recommendations from Spotify API
- 🎨 **Dynamic UI**: Background gradients change with your mood
- 💾 **Save Favorites**: Build your personal mood playlists
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🔮 **AI Mood Detection**: Fun random mood selector
- ⚡ **CodeWords Backend**: Powered by serverless CodeWords microservice

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- CodeWords API key ([Get it here](https://codewords.agemo.ai/account/keys))

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure API Key**
   ```bash
   # Create .env file
   cp .env.example .env
   
   # Edit .env and add your CodeWords API key:
   VITE_CODEWORDS_API_KEY=cwk-your-api-key-here
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Architecture

```
Vue 3 Frontend (User Interface)
        ↓
CodeWords Backend (moodtune_music_recommender_16330aa9)
        ↓
Spotify API (Music Data)
```

**Backend Service**: The app uses a CodeWords serverless backend that:
- Authenticates with Spotify
- Maps moods to search queries
- Returns structured JSON with tracks, album art, and Spotify links

**Test the backend directly**: [https://codewords.agemo.ai/run/moodtune_music_recommender_16330aa9](https://codewords.agemo.ai/run/moodtune_music_recommender_16330aa9)

## 📁 Project Structure

```
moodtune/
├── src/
│   ├── components/
│   │   ├── MoodHeader.vue      # Dynamic mood header
│   │   ├── MoodSelector.vue    # Mood selection grid
│   │   ├── MusicList.vue       # Song recommendations display
│   │   ├── MusicPlayer.vue     # Bottom music player
│   │   └── Loader.vue          # Loading animation
│   ├── views/
│   │   ├── HomeView.vue        # Main page
│   │   ├── ProfileView.vue     # Saved songs
│   │   └── SettingsView.vue    # Configuration
│   ├── store/
│   │   └── moodStore.js        # Pinia state management
│   ├── data/
│   │   └── mockData.js         # Mood configurations
│   ├── router/
│   │   └── index.js            # Vue Router config
│   ├── App.vue                 # Root component
│   ├── main.js                 # App entry point
│   └── style.css               # Tailwind styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── .env.example
```

## 🎨 Mood Mapping

Each mood is mapped to specific Spotify search queries:

- **😊 Happy**: Upbeat pop, feel-good music
- **😢 Sad**: Melancholic acoustic, emotional ballads
- **😌 Calm**: Relaxing ambient, peaceful tracks
- **⚡ Energetic**: High-energy EDM, workout music
- **🎉 Party**: Dance anthems, club hits
- **💕 Romantic**: Love songs, R&B slow jams
- **🎯 Focused**: Study music, instrumental concentration tracks

## 🛠️ Tech Stack

- **Frontend**: Vue 3 (Composition API)
- **Styling**: Tailwind CSS
- **State**: Pinia
- **Routing**: Vue Router
- **Build**: Vite
- **Backend**: CodeWords Serverless
- **API**: Spotify Web API

## 📦 Deployment

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

**Important**: Add your `VITE_CODEWORDS_API_KEY` as an environment variable in your deployment platform settings.

## 🔧 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 API Integration

The app calls the CodeWords backend service:

```javascript
POST https://runtime.codewords.ai/run/moodtune_music_recommender_16330aa9

Headers:
  Authorization: Bearer <your-codewords-api-key>
  Content-Type: application/json

Body:
  {
    "mood": "happy",
    "limit": 10
  }

Response:
  {
    "mood": "happy",
    "songs": [...],
    "total": 10,
    "message": "😊 Found 10 perfect songs for your happy mood!"
  }
```

## 📝 License

MIT

## 🙏 Credits

- Built with Vue 3 + Vite + Tailwind CSS
- Powered by CodeWords serverless platform
- Music data from Spotify Web API

---

**Enjoy discovering music for every mood!** 🎵✨
