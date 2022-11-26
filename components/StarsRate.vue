<script setup lang="ts">
const { value = 0 } = defineProps<{
  value?: number
}>()

const style = {
  'clip-path': `inset(0 ${(10 - value) * 10}% 0 0)`,
}
</script>

<template>
  <div class="relative z-30 w-[100px]">
    <img src="/stars.webp" class="absolute inset-0" aria-hidden="true" />
    <img
      src="/stars-filled.webp"
      class="absolute inset-0"
      width="100"
      height="100"
      aria-hidden="true"
      :style="style"
    />
  </div>
</template>
