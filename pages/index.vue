<script setup lang="ts">
import { ShowsTypes } from '~~/types/types'

const { data: shows } = await fetchShows<ShowsTypes[]>(`shows`)

console.log('show data: ', shows)
</script>

<style scoped></style>

<template>
  <div class="w-full h-full flex flex-col">
    <CategoryDisplay :shows="shows" filter="Action" />
    <CategoryDisplay :shows="shows" filter="Romance" />
    <CategoryDisplay :shows="shows" filter="Comedy" />
  </div>
</template>
