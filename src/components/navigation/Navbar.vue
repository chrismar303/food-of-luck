<template>
  <header
    class="absolute flex w-full items-center justify-between py-2 px-2 font-bold text-white md:py-4 md:px-16"
  >
    <h2 class="text-md text-primary-color md:text-2xl">FOOD OF LUCK</h2>
    <nav class="flex gap-2 text-sm md:gap-8 md:text-lg">
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
