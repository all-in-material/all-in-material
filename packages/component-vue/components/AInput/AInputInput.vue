<script lang="ts" setup>
import '../../style/components/AInput/AInputInput.css'

import { useVModel } from '@vueuse/core'

const props = defineProps(['label', 'type', 'modelValue'])
const emits = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emits)
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input :type="props.type" v-model="model" />
  </div>
</template>
