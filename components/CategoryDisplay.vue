<script lang="ts">
import { ShowsTypes, Genres } from '~~/types/types'
import { ref, PropType } from 'vue'

export default defineComponent({
  props: {
    shows: {
      type: Array as PropType<ShowsTypes[]>,
      required: true,
    },
    filter: {
      type: String as PropType<Genres>,
      required: true,
    },
  },

  setup(props) {
    const scrollEl = ref<null | HTMLDivElement>(null)

    const data = props.shows.filter((show) =>
      show.genres.includes(props.filter)
    )

    return { data, scrollEl }
  },
  methods: {
    scrollLeft() {
      if (this.scrollEl) {
        this.scrollEl?.scrollTo({
          left: 0,
          behavior: 'smooth',
        })
      }
    },
    scrollRight() {
      this.scrollEl?.scrollTo({
        left: this.scrollEl?.scrollWidth - this.scrollEl?.clientWidth,
        behavior: 'smooth',
      })
    },
  },
})
</script>

<style scoped lang="scss"></style>

<template>
  <div class="flex w-full flex-col h-[400px] relative">
    <h3 class="text-white font-bold text-2xl my-5">{{ filter }}</h3>
    <div class="shows" ref="scrollEl">
      <button
        class="flex flex-col absolute z-30 top-0 left-0 bottom-0 bg-black/90 p-3 items-center justify-center opacity-0 hover:opacity-100 transition"
        @click="scrollLeft()"
      >
        <div class="text-3xl text-white">{{ '<' }}</div>
      </button>
      <article
        v-for="show in data.slice(0, 20)"
        :key="show.id"
        class="show-card"
      >
        <NuxtLink :to="`/shows/${show.id}`">
          <img
            :src="show.image.medium"
            :alt="show.name"
            class="rounded-lg shadow-md w-full"
            width="232"
            height="376"
          />
          <h2 class="text-lg font-bold mt-2">{{ show.name }}</h2>
        </NuxtLink>
        <span class="relative my-5 z-20">
          <StarsRate :value="show.rating.average" />
        </span>
      </article>
      <button
        class="flex flex-col absolute z-30 top-0 right-0 bottom-0 bg-black/90 p-3 items-center justify-center opacity-0 hover:opacity-100 transition"
        @click="scrollRight()"
      >
        <div class="text-3xl text-white">{{ '>' }}</div>
      </button>
    </div>
  </div>
</template>
