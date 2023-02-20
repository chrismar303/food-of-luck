<template>
  <section class="section py-24">
    <div class="w-5/6 md:w-3/4">
      <div
        v-show="!winner.id"
        class="mb-4 flex items-center justify-between gap-12"
      >
        <h2 class="text-bold text-md text-white md:text-4xl">
          Total Contestants Remaining:
          <span class="text-primary-color">
            {{ state.draw.length }}
          </span>
        </h2>
        <div class="flex flex-col gap-2 md:flex-row md:gap-4">
          <base-button @click="drawRestaurants"> Draw </base-button>
          <base-button outline @click="resetGame"> Reset </base-button>
        </div>
      </div>
      <div
        v-show="winner.id"
        class="mb-4 flex flex-col-reverse items-center justify-center gap-4 md:flex-row md:gap-12"
      >
        <h2 class="text-bold text-3xl text-primary-color md:text-4xl">
          Winner
        </h2>
        <base-button outline @click="resetGame">Play Again</base-button>
      </div>

      <ul class="flex h-3/5 flex-wrap justify-evenly gap-x-4 gap-y-8">
        <li
          v-for="restaurant in state.draw"
          :key="restaurant.id"
          class="h-64 w-64 lg:transform lg:duration-500"
          :class="[
            winner.id
              ? 'mt-8 hover:animate-pulse md:mt-24 lg:scale-150'
              : 'lg:hover:scale-110'
          ]"
        >
          <draw-card :restaurant="restaurant" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { reactive, inject } from 'vue'
import { useRoute } from 'vue-router'
import DrawCard from '@/components/draw/DrawCard.vue'

const route = useRoute()
const yelpApi = inject('yelpApi')
const state = reactive({ restaurants: [], draw: [] })

yelpApi
  .get('/search', {
    params: { location: route.query.location, terms: 'restaurant' }
  })
  .then(({ data }) => {
    state.restaurants = data.businesses
    state.draw = [...state.restaurants]
  })

let winner = reactive({})
function drawRestaurants() {
  // remove half of the items randomly
  let i = 0
  const itemsToRemove = state.draw.length / 2
  while (i < itemsToRemove) {
    const index = selectRandomIndex()
    state.draw.splice(index, 1)
    ++i
    if (state.draw.length <= 1) winner = state.draw[0]
  }
}

function selectRandomIndex() {
  const max = state.draw.length - 1
  return Math.floor(Math.random() * (max + 1))
}

function resetGame() {
  state.draw = [...state.restaurants]
  winner = {}
}
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  background: linear-gradient(
    112.1deg,
    rgb(32, 38, 57) 11.4%,
    rgb(63, 76, 119) 70.2%
  );
}
</style>
