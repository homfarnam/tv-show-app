<script lang="ts">
import { ShowsTypes, Genres } from '~~/types/types'
import { ref, PropType } from 'vue'

export default defineComponent({
  setup(props) {
    //  create search state
    const search = ref('')

    return { search }
  },
  methods: {
    handleSearch(event: Event) {
      const el = event.target as HTMLInputElement
      this.search = el.value
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
        type="text"
        placeholder="Enter a movie or series name"
        class="p-2 w-[300px] rounded-md text-black outline-none"
      />
    </div>
  </div>
</template>
