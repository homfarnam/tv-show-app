<script lang="ts">
import { SearchedShowType } from '~~/types/types'
import { ref } from 'vue'

export default defineComponent({
  data() {
    return {
      shows: [] as SearchedShowType[],
    }
  },
  setup() {
    const search = ref('')
    const shows = ref<SearchedShowType[]>([])

    return { search, shows }
  },
  methods: {
    handleSearch(event: Event) {
      const el = event.target as HTMLInputElement
      this.search = el.value
    },
    async fetchSearchedData() {
      const { data: shows } = await fetchShows<SearchedShowType[]>(
        `search/shows?q=${this.search}`
      )

      console.log({ shows })
      this.shows = shows
    },
    replaceByDefault(e: Event) {
      let image = e.target as HTMLImageElement
      image.src = '/placeholder.png'
    },
  },
})
</script>
<style scoped></style>

<template>
  <div class="w-full h-full">
    <div class="flex items-center text-white gap-5">
      <label>Search</label>
      <input
        :value="search"
        @input="handleSearch"
        @keyup.enter="fetchSearchedData"
        type="text"
        placeholder="Enter a movie or series name"
        class="p-2 w-[300px] rounded-md text-black outline-none"
      />
    </div>
    <div
      class="text-white w-full h-full py-10 flex flex-row flex-wrap items-center gap-10"
    >
      <article v-for="show in shows" :key="show.show.id">
        <NuxtLink :to="`/shows/${show.show.id}`">
          <div v-if="show.show.image">
            <img
              :src="show.show.image.medium"
              :alt="show.show.name"
              class="rounded-lg shadow-md w-full"
              width="232"
              height="376"
            />
          </div>
          <div v-else>
            <img
              src="/placeholder.png"
              alt="placeholder"
              class="rounded-lg shadow-md w-11/12"
              width="230"
              height="370"
            />
          </div>

          <h2 class="text-lg font-bold mt-2">{{ show.show.name }}</h2>
        </NuxtLink>
        <span class="relative flex my-5 z-20">
          <StarsRate :value="show.show.rating.average" />
        </span>
      </article>
    </div>
  </div>
</template>
