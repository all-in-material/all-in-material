<script lang="ts" setup>
import '../../style/components/AInput/AInputCommon.css'
import '../../style/components/AInput/AInputDrop.css'

import { useVModel } from '@vueuse/core'
import ADropDown from '../ADropDown.vue'

const props = defineProps(['label', 'type', 'options', 'focused', 'modelValue'])
const emits = defineEmits(['update:focused', 'update:modelValue'])
const model = useVModel(props, 'modelValue', emits)
const focused = useVModel(props, 'focused', emits)
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
        {{ options[model] }}
      </div>
      <select v-model="model" ref="input" hidden />
    </template>
    <template #hidden>
      <div
        v-for="(label, value) in options"
        class="a-input-option"
        :key="value"
        :selected="model == value ? '' : null"
        @click="model = value"
      >
        {{ label }}
      </div>
    </template>
  </ADropDown>
</template>
