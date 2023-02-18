<template>
  <div class="flex">
    <input
      class="flex-1 rounded-l-xl px-4"
      :type="type"
      :name="name"
      :placeholder="placeholder"
    />
    <base-button :rounded-left="false">GO</base-button>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false
  },
  name: {
    type: String,
    requred: false
  },
  placeholder: {
    type: String,
    required: false
  }
})
</script>
