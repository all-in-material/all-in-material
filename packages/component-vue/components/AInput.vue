<script lang="ts" setup>
import '../style/components/AInput.css'

import { computed, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import AInputInput from './AInput/AInputInput.vue'
import type { IAInputProps } from '@/interfaces/IAInputProps'
import AInputTextarea from './AInput/AInputTextarea.vue'
import AInputHelper from './AInput/AInputHelper.vue'
import AInputDrop from './AInput/AInputDrop.vue'
import AInputSwitch from './AInput/AInputSwitch.vue'

const props = defineProps<IAInputProps>()
const emits = defineEmits(['update:modelValue'])
const target = ref<HTMLElement>()

// 封装外部 v-model 的双向绑定
const outerModel = computed({
  get: () => props.modelValue,
  set: (v: IAInputProps['modelValue']) => emits('update:modelValue', v)
})
// 初始化内部 v-model 的值
const innerModel = ref(props.modelValue)

// 判断 Label 是否应该上浮
const focused = ref(false)
const triggerFocus = (v: boolean) => (focused.value = v)
const active = computed(() => focused.value || !!innerModel.value)

// 监听失去焦点
// 在 click 时 focus 输入框会导致 focus-within 短暂变为 false 故使用此方法
onClickOutside(target, () => triggerFocus(false))

// 监听外部 v-model 的变化并同步
watch(
  () => outerModel.value,
  (v: IAInputProps['modelValue']) => (innerModel.value = v)
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

// 判断组件类型
const inputType = computed(
  () =>
    ({
      text: 'input',
      password: 'input',
      textarea: 'textarea',
      select: 'drop',
      switch: 'switch'
    }[props.type!])
)
// 判断组件样式类别
const inputStyle = computed(
  () =>
    ({
      input: 'common',
      textarea: 'common',
      drop: 'common',
      switch: 'switch'
    }[inputType.value!])
)

// 计算绑定的属性
const status = computed(() => ({
  ref: 'target',

  [inputType.value!]: '',
  [inputStyle.value!]: '',
  focused: focused.value ? '' : null,
  active: active.value ? '' : null,
  standard: props.filled || props.outlined ? null : '',
  outlined: props.outlined ? '' : null,
  filled: props.filled ? '' : null
}))
const binds = computed(() => ({
  class: 'a-input-fields',

  type: props.type,
  label: props.label,
  maxrow: props.maxrow,
  options: props.options,
  multiple: props.multiple,

  active: active.value,

  focused: focused.value,
  modelValue: innerModel.value,
  'onUpdate:focused': (v: boolean) => (focused.value = v),
  'onUpdate:modelValue': (v: string) => (innerModel.value = v)
}))
</script>

<template>
  <div v-bind="status" class="a-input" @click="triggerFocus(true)">
    <AInputInput v-bind="binds" v-if="inputType == 'input'" />
    <AInputTextarea v-bind="binds" v-else-if="inputType == 'textarea'" />
    <AInputDrop v-bind="binds" v-else-if="inputType == 'drop'" />
    <AInputSwitch v-bind="binds" v-else-if="inputType == 'switch'" />

    <AInputHelper v-if="!!$slots?.helper && ['input', 'textarea', 'drop'].indexOf(inputType!) != -1">
      <slot name="helper" />
    </AInputHelper>
  </div>
</template>
