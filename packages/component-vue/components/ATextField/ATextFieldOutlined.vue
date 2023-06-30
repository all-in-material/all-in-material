<script lang="ts" setup>
import '../../style/components/ATextField/ATextFieldOutlined.css'

import { useVModel } from '@vueuse/core'

const props = defineProps(['label', 'modelValue'])
const emits = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emits)
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input type="text" ref="input" v-model="model" />
  </div>
</template>
