<template>
  <a
    class="relative h-full w-full"
    :href="restaurant.url"
    :alt="`${restaurant.name} link`"
    target="_blank"
  >
    <div class="absolute h-64 w-64 shadow-xl">
      <div class="absolute h-full w-full rounded-md bg-black opacity-50"></div>
      <img
        class="h-full w-full rounded-md"
        :src="restaurant.image_url"
        alt="restaurant.alias"
      />
    </div>
    <div class="relative z-10 flex h-full p-2 text-white">
      <div class="flex flex-col">
        <div class="flex justify-between gap-4">
          <h4 class="text-lg font-bold">{{ restaurant.name }}</h4>
        </div>
        <div class="flex justify-between">
          <span class="text-sm font-semibold">
            Rating: {{ restaurant.rating }}/5
          </span>
          <span class="text-sm font-semibold">
            Distance: {{ convertToMiles(restaurant.distance).toFixed(2) }}
          </span>
        </div>
        <div class="mt-auto flex flex-col">
          <span class="text-sm font-semibold italic">
            {{ restaurant.display_phone }}
          </span>
          <span class="text-sm">
            {{ restaurant.location.display_address.join(', ') }}
          </span>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  restaurant: {
    type: Object,
    required: true
  }
})

function convertToMiles(meters) {
  return meters * 0.000621371192
}
</script>
