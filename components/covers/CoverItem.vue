<template>
  <div class="cover-item">
    <img :src="src" height="200" width="200" />

    <div class="album">{{ album }}</div>
    <div class="artist">{{ artist }}</div>
    <div class="date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: String,
      default: '',
    },
    artist: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      return this.$cloudinary.image.url('color-orgy/2Baba_W.webp', {
        crop: 'scale',
        width: 200,
      })
    },
  },
}
</script>

<style scoped>
.cover-item * {
  @apply font-sans;
}

.album {
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.artist {
  font-weight: regular;
  font-size: 12px;
}

.date {
  font-weight: regular;
  font-size: 10px;
}
</style>
