<script lang="ts" setup>
import '../../style/components/AInput/AInputCommon.css'

import { nextTick, ref, watch, type WritableComputedRef } from 'vue'
import { useVModel } from '@vueuse/core'
import type { IAInputTextareaProps } from '@/interfaces/IAInputProps'

const props = defineProps<IAInputTextareaProps>()
const emits = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emits) as WritableComputedRef<string>

const textarea = ref<HTMLElement>()
const height = ref(24)

// 计算 Textarea 行高
watch(
  () => model.value,
  () => {
    height.value = 0
    nextTick(() => {
      let line = textarea.value!.scrollHeight / 24
      height.value = Math.min(line, props.maxrow ?? 2) * 24
    })
  }
)
</script>

<template>
  <div :style="{ height: height + 'px' }" @click="textarea?.focus()">
    <label>{{ label }}</label>
    <textarea v-model="model" ref="textarea" :style="{ height: height + 'px' }" />
  </div>
</template>
