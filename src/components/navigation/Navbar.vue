<template>
  <header
    class="absolute flex w-full items-center justify-between px-16 py-4 font-bold text-white"
  >
    <h2 class="text-2xl text-primary-color">Food Of Luck</h2>
    <nav class="flex gap-8 text-lg">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'food-draw' }">Food Draw</router-link>
    </nav>
  </header>
</template>

<style scoped>
nav .router-link-active {
  @apply text-primary-color;
}
</style>
