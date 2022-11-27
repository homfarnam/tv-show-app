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
    async fetchSearchedData(event: Event) {
      event.preventDefault()
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
  <div class="search">
    <form class="search__searchBar" @submit="fetchSearchedData">
      <label>Search</label>
      <input
        :value="search"
        @input="handleSearch"
        type="text"
        placeholder="Enter a movie or series name"
      />
    </form>
    <div class="search__shows">
      <article v-for="show in shows" :key="show.show.id">
        <NuxtLink :to="`/shows/${show.show.id}`">
          <div v-if="show.show.image">
            <img
              :src="show.show.image.medium"
              :alt="show.show?.name"
              class="search__shows--realImage"
              width="232"
              height="376"
            />
          </div>
          <div v-else>
            <img
              src="/placeholder.png"
              alt="placeholder"
              class="search__shows--placeholderImage"
              width="230"
              height="370"
            />
          </div>

          <h3>{{ show.show.name }}</h3>
        </NuxtLink>
        <span class="search__shows--rating">
          <StarsRate :value="show.show.rating.average" />
        </span>
      </article>
    </div>
  </div>
</template>
