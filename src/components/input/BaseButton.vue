<template>
  <button
    :class="[
      { 'rounded-l-xl': roundedLeft },
      { 'rounded-r-xl': roundedRight },
      'bg-primary-color py-2 px-4 text-lg font-bold text-white'
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  roundedLeft: {
    type: Boolean,
    required: false,
    default: true
  },
  roundedRight: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>
