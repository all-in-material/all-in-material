<script lang="ts" setup>
import '../../style/components/AInput/AInputCommon.css'

import { ref } from 'vue'
import { useVModel } from '@vueuse/core'
import type { IAInputInputProps } from '@/interfaces/IAInputProps'

const props = defineProps<IAInputInputProps>()
const emits = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emits)

const input = ref<HTMLElement>()
</script>

<template>
  <div @click="input?.focus()">
    <label>{{ label }}</label>
    <input v-model="model" ref="input" :type="props.type" />
  </div>
</template>
