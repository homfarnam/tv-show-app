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
  <div class="show">
    <div class="show__container">
      <div class="show__container__image">
        <div v-if="show.image" class="w-full mx-auto flex justify-center">
          <img :src="show.image.original" :alt="show?.name" class="w-2/3" />
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
      <div class="show__container__details">
        <h3>{{ show.name }}</h3>
        <div
          v-html="show.summary"
          class="show__container__details--description"
        ></div>

        <div v-if="show.premiered" class="show__container__details--item">
          <span>Released</span>
          <span>{{ show.premiered }}</span>
        </div>
        <div v-if="show.ended" class="show__container__details--item">
          <span>Ended</span>
          <span>{{ show.ended }}</span>
        </div>
        <div v-if="show.network" class="show__container__details--item">
          <span>Network</span>
          <span>{{ show.network.name }}</span>
        </div>

        <div v-if="show.genres" class="show__container__details--item">
          <span>Genre</span>
          <div v-for="item in show.genres" :key="item">
            <span class="show__container__details--item--genres">{{
              item
            }}</span>
          </div>
        </div>

        <div v-if="show.language" class="show__container__details--item">
          <span>Language</span>
          <span>{{ show.language }}</span>
        </div>

        <div v-if="show.rating" class="show__container__details--rating">
          <span>Rating</span>
          <StarsRate :value="show.rating.average" />
        </div>

        <div v-if="show.status" class="show__container__details--item">
          <span>Status</span>
          <span>{{ show.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
