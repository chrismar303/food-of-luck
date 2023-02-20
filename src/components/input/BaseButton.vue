<template>
  <button
    :class="[
      { 'rounded-l-lg': roundedLeft },
      { 'rounded-r-lg': roundedRight },
      'bg-primary-color py-2 px-4 text-sm font-bold text-white md:text-lg',
      outline ? secondaryStyles : ''
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
  },
  outline: {
    type: Boolean,
    required: false
  }
})

const secondaryStyles =
  'text-primary-color bg-transparent border-2 border-primary-color'
</script>
