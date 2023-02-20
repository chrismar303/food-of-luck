<template>
  <div class="flex">
    <input
      class="flex-1 rounded-l-lg px-4"
      :type="type"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <base-button :rounded-left="false" @click="emit('submit')">
      GO
    </base-button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: false
  },
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

let emit = defineEmits(['update:modelValue', 'submit'])
</script>
