<script lang="ts" setup>
import '../../style/components/AInput/AInputCommon.css'
import '../../style/components/AInput/AInputDrop.css'

import { useVModel } from '@vueuse/core'
import ADropDown from '../ADropDown.vue'
import type { IAInputDropProps } from '@/interfaces/IAInputProps'

const props = defineProps<IAInputDropProps>()
const emits = defineEmits(['update:focused', 'update:modelValue'])
const model = useVModel(props, 'modelValue', emits)
const focused = useVModel(props, 'focused', emits)

const select = (value: any) => {
  if (props.multiple) {
    // 多选
    if (isSelected(value)) {
      // 已选择 取消选择
      ;(model.value as string[]).splice((model.value as string[]).indexOf(value), 1)
    } else {
      // 未选择 操作选择
      ;(model.value as string[]).push(value)
    }
  } else {
    // 单选
    model.value = value
  }
}
const isSelected = (value: any) =>
  props.multiple
    ? (model.value as string[]).indexOf(value) != -1 /* 多选 */
    : model.value == value /* 单选 */
</script>

<template>
  <ADropDown
    v-model="focused"
    transition="fade-scale"
    :slot-class="{ hidden: ['a-input-options'] }"
  >
    <template #visible>
      <label>{{ label }}</label>

      <div class="a-input-value">
        {{
          !model
            ? ''
            : typeof model == 'string'
            ? options![model]
            : (model as string[]).map((v: string) => options![v]).join(', ')
        }}
      </div>
      <select v-model="model" ref="input" hidden />
    </template>
    <template #hidden>
      <div
        v-for="(label, value) in options"
        class="a-input-option"
        :key="value"
        :selected="isSelected(value) ? '' : null"
        @click="select(value)"
      >
        {{ label }} {{ isSelected(value) }}
      </div>
    </template>
  </ADropDown>
</template>
