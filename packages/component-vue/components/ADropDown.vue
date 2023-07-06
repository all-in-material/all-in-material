<script lang="ts" setup>
import '../style/components/ADropDown.css'

import type { IADropDownProps } from '@/interfaces/IADropDownProps'
import { onClickOutside, useElementHover, useVModel } from '@vueuse/core'
import { ref, watch, type Ref } from 'vue'

const props = withDefaults(defineProps<IADropDownProps>(), {
  when: 'click'
})
const emits = defineEmits(['update:modelValue'])
const active = useVModel(props, 'modelValue', emits)

let onClick: () => void,
  hidden: Ref<HTMLElement | undefined>,
  dropdown: Ref<HTMLElement | undefined>

if (props.when == 'click') {
  hidden = ref()

  onClick = () => (active.value = !active.value)
  onClickOutside(hidden, (e: PointerEvent) => {
    active.value = false
    e.stopPropagation()
  })
} else {
  dropdown = ref()

  const hover = useElementHover(dropdown)

  watch(
    () => hover.value,
    (v: boolean) => (active.value = v)
  )
}
</script>

<template>
  <div class="a-dropdown" ref="dropdown">
    <div @click="onClick" class="a-dropdown-visible" :class="props.slotClass?.visible">
      <slot name="visible" />
    </div>
    <Transition :name="props.transition">
      <div ref="hidden" v-if="active" class="a-dropdown-hidden" :class="props.slotClass?.hidden">
        <slot name="hidden" />
      </div>
    </Transition>
  </div>
</template>
