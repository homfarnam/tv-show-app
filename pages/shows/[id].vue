<script setup lang="ts">
import { ShowsTypes } from '~~/types/types'

const { id } = useRoute().params

const { data: show } = await fetchShows<ShowsTypes>(`shows/${id}`)

console.log('show data: ', show)

if (!show) {
  throw createError({ statusCode: 404, message: 'Show not found' })
}
</script>

<template>
  <div class="w-full h-full">
    <div class="flex items-center justify-center h-full">
      <div class="w-1/2 flex flex-col items-center justify-center h-full">
        <div v-if="show.image">
          <img :src="show.image.original" :alt="show.name" class="w-2/3" />
        </div>
        <div v-else>
          <img
            src="/placeholder.png"
            alt="placeholder"
            class="rounded-lg shadow-md w-full"
            width="230"
            height="370"
          />
        </div>
      </div>
      <div
        class="w-1/2 flex flex-col gap-5 space-y-5 items-start justify-start text-white h-full"
      >
        <h3 class="text-3xl font-bold">{{ show.name }}</h3>
        <div v-html="show.summary" class="text-justify pr-5 w-1/2"></div>

        <div class="flex items-center gap-5 text-white/50">
          <span>Released</span>
          <span>{{ show.premiered }}</span>
        </div>
        <div class="flex items-center gap-5 text-white/50">
          <span>Network</span>
          <span>{{ show.network.name }}</span>
        </div>

        <div class="flex items-center gap-5 text-white/50">
          <span>Genre</span>
          <div v-for="item in show.genres" :key="item">
            <span class="bg-gray-700 rounded-lg px-4 py-1">{{ item }}</span>
          </div>
        </div>

        <div class="flex items-center gap-5 text-white/50">
          <span>Language</span>
          <span>{{ show.language }}</span>
        </div>

        <div class="flex flex-col items-start gap-2 text-white/50">
          <span>Rating</span>
          <StarsRate :value="show.rating.average" />
        </div>

        <div class="flex items-center gap-5 text-white/50">
          <span>Status</span>
          <span>{{ show.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
