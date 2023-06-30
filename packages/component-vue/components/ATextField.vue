<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useFocus } from '@vueuse/core'

import '../style/components/ATextField.css'

const props = defineProps(['label', 'type', 'modelValue', 'modelModifiers'])
const emits = defineEmits(['update:modelValue'])
const input = ref<HTMLElement>()

// 封装外部 v-model 的双向绑定
const outerModel = computed({
  get: () => props.modelValue,
  set: (v: string) => emits('update:modelValue', v)
})
// 初始化内部 v-model 的值
const innerModel = ref(props.modelValue)

// 判断 Label 是否应该上浮
const { focused } = useFocus(input)
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
</script>

<template>
  <div class="a-textfield" :active="active">
    <label>{{ label }}</label>
    <input :type="props.type" ref="input" v-model="innerModel" />
  </div>
</template>
