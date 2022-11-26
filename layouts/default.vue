<script lang="ts"></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>

<template>
  <div>
    <header class="shadow-md bg-[#111111]/90 text-white">
      <div class="flex justify-center items-center py-3 w-full">
        <NuxtLink to="/" class="font-bold text-2xl">TV SHOWS</NuxtLink>
      </div>
      <nav
        class="container mx-auto p-4 flex flex-col items-center justify-center w-full"
      >
        <ul class="flex gap-4 items-center text-lg justify-start">
          <li><NuxtLink to="/">Shows</NuxtLink></li>
          <li><NuxtLink to="/search">Search</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div
      class="p-4 bg-black min-h-screen overflow-x-hidden w-full flex flex-col mx-auto"
    >
      <slot />
    </div>
  </div>
</template>
