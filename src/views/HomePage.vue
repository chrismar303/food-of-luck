<template>
  <section class="landing">
    <div>
      <h1 class="text-center text-6xl font-bold text-white">
        <span class="text-primary-color"> Stop </span> The Fighting <br />
        <span class="text-primary-color"> And </span><br />
        Start The
        <span class="text-primary-color"> Eating </span>
      </h1>
      <form class="mt-8 flex flex-col gap-2">
        <label class="text-lg text-white" for="location">Location</label>
        <searchbar type="number" name="location" placeholder="zipcode" />
      </form>
    </div>
  </section>
</template>

<script setup>
import Searchbar from '@/components/input/Searchbar.vue'
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
  height: 100dvh;
}
</style>
