<script lang="ts" setup>
import '../../style/components/AInput/AInputSwitch.css'

import { useVModel } from '@vueuse/core'

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emits)
</script>

<template>
  <div @click="model = !model" class="a-input-switch" :checked="model ? '' : null" />
</template>
