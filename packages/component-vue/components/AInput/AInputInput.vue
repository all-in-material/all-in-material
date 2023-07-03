<script lang="ts" setup>
import { ref } from 'vue';
import '../../style/components/AInput/AInputCommon.css'

import { useVModel } from '@vueuse/core'

const props = defineProps(['label', 'type', 'modelValue'])
const emits = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emits)

const textarea = ref<HTMLElement>()
</script>

<template>
  <div @click="textarea?.focus()">
    <label>{{ label }}</label>
    <input v-model="model" ref="input" :type="props.type" />
  </div>
</template>
