import type { IATransition } from "./IATransition"

interface IADropDownProps {
    modelValue: boolean,
    slotClass: {
        visible?: string[],
        hidden?: string[]
    },
    transition: IATransition
}

export type { IADropDownProps }