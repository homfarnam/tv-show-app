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
    className: {
      type: String as PropType<string>,
      required: true,
    },
    withNavButtons: {
      type: Boolean as PropType<boolean>,
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
  <div class="allShows">
    <h3 class="allShows--title">{{ filter }}</h3>
    <div :class="className" ref="scrollEl">
      <button
        class="allShows--scrollLeft"
        @click="scrollLeft()"
        v-if="withNavButtons"
      >
        <span>{{ '<' }}</span>
      </button>
      <article
        v-for="show in data.slice(0, 20)"
        :key="show.id"
        class="allShows__showCard"
      >
        <NuxtLink :to="`/shows/${show.id}`">
          <div v-if="show.image">
            <img
              :src="show.image.medium"
              :alt="show.name"
              class="allShows__showCard--image"
              width="232"
              height="376"
            />
          </div>

          <div v-else>
            <img
              src="/placeholder.png"
              alt="placeholder"
              class="allShows__showCard--image"
              width="232"
              height="376"
            />
          </div>

          <h3>{{ show.name }}</h3>
        </NuxtLink>
        <span class="allShows__showCard--rate">
          <StarsRate :value="show.rating.average" />
        </span>
      </article>
      <button
        class="allShows--scrollRight"
        @click="scrollRight()"
        v-if="withNavButtons"
      >
        <span>{{ '>' }}</span>
      </button>
    </div>
  </div>
</template>
