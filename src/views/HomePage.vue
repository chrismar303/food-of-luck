<template>
  <section class="landing">
    <div>
      <h1 class="text-center text-3xl font-bold text-white md:text-6xl">
        <span class="text-primary-color"> Stop </span> The Fighting <br />
        <span class="text-primary-color"> And </span><br />
        Start The
        <span class="text-primary-color"> Eating </span>
      </h1>
      <form
        class="mt-8 flex flex-col gap-2"
        @submit.prevent="navigateToFoodDraw"
      >
        <label class="text-md text-white md:text-lg" for="location"
          >Location</label
        >
        <searchbar
          v-model="location"
          type="number"
          name="location"
          placeholder="zipcode"
          class="h-10"
        />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Searchbar from '@/components/input/Searchbar.vue'

const router = useRouter()

const location = ref('')
function navigateToFoodDraw() {
  router.push({
    name: 'food-draw',
    query: { location: location.value }
  })
}
</script>

<style scoped>
/* This is a class because we need use dvh */
.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(@/assets/images/background.jpg);
  background-position: center;
  background-size: cover;
  height: 100%;
  min-height: 100dvh;
}
</style>
