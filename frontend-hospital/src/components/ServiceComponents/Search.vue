<template>
  <div class="d-flex align-center mb-6 gap-4">
    <v-text-field
      v-model="input"
      label="Buscar servicio o especialidad"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      clearable
      class="flex-grow-1"
      @keyup.enter="buscar"
      @click:clear="clear"
    />
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'

const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue', 'buscar', 'clear'])

const input = ref(props.modelValue || '')

watch(input, (val) => emit('update:modelValue', val))
watch(() => props.modelValue, (val) => {
  if (val !== input.value) input.value = val
})

function buscar() {
  if (input.value.trim()) emit('buscar')
}
function clear() {
  emit('update:modelValue', '')
  emit('clear')
}
</script>

<style scoped>
.gap-4 {
  gap: 1rem;
}
</style>
