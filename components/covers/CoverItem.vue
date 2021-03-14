<template>
  <div>
    <img :src="src" height="200" width="200" />

    <div>Album name</div>
    <div>Artist</div>
    <div>year</div>
  </div>
</template>

<script>
export default {
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
