<script lang="ts" setup>
import '../../style/components/AInput/AInputTextarea.css'

import { computed } from 'vue'
import { useVModel } from '@vueuse/core'

const props = defineProps(['label', 'type', 'modelValue'])
const emits = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emits)

// 换行需要重新计算高度
const height = computed(() => 52 + 24 * (model.value.split('\n').length - 1) + 'px')
</script>

<template>
  <div textarea :style="{ maxHeight: height }">
    <label>{{ label }}</label>
    <textarea :style="{ height }" :type="props.type" v-model="model" />
  </div>
</template>
