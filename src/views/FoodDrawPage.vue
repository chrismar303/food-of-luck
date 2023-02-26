<template>
  <section class="section py-24">
    <div class="w-5/6 md:w-full md:px-16">
      <div
        v-show="!winner.id"
        class="mb-4 flex flex-col-reverse gap-2 md:flex-row md:items-center md:justify-between md:gap-12"
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

      <transition-group
        tag="ul"
        name="list"
        class="flex h-3/5 flex-wrap justify-evenly gap-x-4 gap-y-8"
      >
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
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { reactive, inject } from 'vue'
import { useRoute } from 'vue-router'
import DrawCard from '@/components/draw/DrawCard.vue'

const route = useRoute()
const yelpApi = inject('yelpApi')
const state = reactive({ restaurants: [], remainingOptions: [], draw: [] })

yelpApi
  .get('/yelp', {
    params: { location: route.query.location, terms: 'restaurant' }
  })
  .then(({ data }) => {
    state.restaurants = data
    constructRandomDeck()
  })

let winner = reactive({})
function drawRestaurants() {
  // remove half of the items randomly
  let i = 0
  const itemsToRemove = state.draw.length / 2
  for (let i = 0; i < itemsToRemove; ++i) {
    const index = selectRandomIndex()
    state.draw.splice(index, 1)
  }
  if (state.draw.length <= 1) winner = state.draw[0]
}

function selectRandomIndex() {
  const max = state.draw.length - 1
  return Math.floor(Math.random() * (max + 1))
}

function constructRandomDeck() {
  state.draw = []
  state.remainingOptions = [...state.restaurants]
  for (let i = 0; i < state.restaurants.length / 2.5; ++i) {
    const position = selectRandomIndex()
    const randomCard = state.remainingOptions[position]
    state.draw.push(randomCard)
    state.remainingOptions.splice(position, 1)
  }
}

function resetGame() {
  constructRandomDeck()
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

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
