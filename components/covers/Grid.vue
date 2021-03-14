<template>
  <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
    <covers-cover-item
      v-for="cover in covers"
      :id="cover.id"
      :key="cover.id"
      :album="cover.album"
      :artist="cover.artist"
      :date="cover.date"
    />
  </div>
</template>

<script>
const getCovers = () =>
  import('~/db/covers.json').then((data) => data.default || data)
export default {
  data() {
    return {
      covers: [],
    }
  },
  async fetch() {
    const covers = await getCovers()
    this.covers = covers
  },
}
</script>
