<script lang="ts" setup>
import '../style/components/ATextField.css'

import { computed, ref, watch } from 'vue'
import { useFocusWithin } from '@vueuse/core'

const props = defineProps(['type', 'label', 'filled', 'modelValue', 'modelModifiers'])
const emits = defineEmits(['update:modelValue'])
const target = ref<HTMLElement>()

// 封装外部 v-model 的双向绑定
const outerModel = computed({
  get: () => props.modelValue,
  set: (v: string) => emits('update:modelValue', v)
})
// 初始化内部 v-model 的值
const innerModel = ref(props.modelValue)

// 判断 Label 是否应该上浮
const { focused } = useFocusWithin(target)
const active = computed(() => focused.value || !!innerModel.value)

// 监听外部 v-model 的变化并同步
watch(
  () => outerModel.value,
  (v: string) => (innerModel.value = v)
)
// v-model 正常更新模式 内部 model 变化时同步
watch(
  () => innerModel.value,
  (v) => {
    if (!props.modelModifiers?.lazy) outerModel.value = v
  }
)
// v-model 懒更新模式 失去焦点事件时同步
watch(
  () => focused.value,
  (v) => {
    if (!v && props.modelModifiers?.lazy) outerModel.value = innerModel.value
  }
)

// 计算绑定的属性
const binds = computed(() => ({
  class: 'a-textfield',
  ref: 'target',

  focused: focused.value ? '' : null,
  active: active.value ? '' : null,
  outlined: props.filled ? null : '',
  filled: props.filled ? '' : null
}))
</script>

<template>
  <div v-bind="binds">
    <label>{{ label }}</label>
    <input type="text" ref="input" v-model="innerModel" />
  </div>
</template>
