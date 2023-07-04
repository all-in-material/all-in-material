<script lang="ts" setup>
import '../style/components/ADropDown.css'

import type { IADropDownProps } from '@/interfaces/IADropDownProps'
import { onClickOutside, useVModel } from '@vueuse/core'
import { ref, watch } from 'vue'

const props = defineProps<IADropDownProps>()
const emits = defineEmits(['update:modelValue'])

const active = useVModel(props, 'modelValue', emits)
watch(
  () => active.value,
  (v) => console.log(v)
)
const hidden = ref<HTMLElement>()

onClickOutside(hidden, (e: PointerEvent) => {
  active.value = false
  e.stopPropagation()
})
</script>

<template>
  <div class="a-dropdown">
    <div @click="active = !active" class="a-dropdown-visible" :class="props.slotClass.visible">
      <slot name="visible" />
    </div>
    <Transition :name="props.transition">
      <div ref="hidden" v-if="active" class="a-dropdown-hidden" :class="props.slotClass.hidden">
        <slot name="hidden" />
      </div>
    </Transition>
  </div>
</template>
