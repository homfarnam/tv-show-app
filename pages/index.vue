<script setup lang="ts">
import { ShowsTypes } from '~~/types/types'

const { data: shows } = await fetchShows<ShowsTypes[]>(`shows`)
</script>

<style scoped></style>

<template>
  <div class="w-full h-full flex flex-col">
    <ShowsDisplay
      :shows="shows"
      className="shows"
      filter="Action"
      withNavButtons
    />
    <ShowsDisplay
      :shows="shows"
      className="shows"
      filter="Romance"
      withNavButtons
    />
    <ShowsDisplay
      :shows="shows"
      className="shows"
      filter="Comedy"
      withNavButtons
    />
  </div>
</template>
