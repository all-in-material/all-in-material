import type { IATransition } from "./IATransition"

interface IADropDownProps {
    modelValue: boolean,
    slotClass?: {
        visible?: string[],
        hidden?: string[]
    },
    transition: IATransition,
    when?: 'hover' | 'click'
}

export type { IADropDownProps }