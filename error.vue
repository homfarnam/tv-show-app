<script lang="ts">
import { PropType } from 'vue'

export default defineComponent({
  props: {
    error: {
      type: Object as PropType<Error & { statusCode: string }>,
      required: true,
    },
  },

  setup(props) {
    const { error } = props

    const handleClearError = () => {
      clearError({ redirect: '/' })
    }

    return { error, handleClearError }
  },
})
</script>

<style lang="scss" scoped></style>

<template>
  <div class="my-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">
      {{ error?.statusCode }}
    </p>
    <p class="mt-7 text-7xl">Oooops!</p>
    <p class="mt-7 text-2xl">
      {{ error?.message }}
    </p>

    <button class="btn my-7" @click="handleClearError">Go Home...</button>
  </div>
</template>
