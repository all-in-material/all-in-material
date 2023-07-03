import type { IModelModifiers } from "./IModelModifiers"

interface IAInputProps {
    type: 'text' | 'password' | 'textarea'
    label: string,
    outlined?: boolean,
    filled?: boolean,
    modelValue: string,
    modelModifiers?: IModelModifiers,
    maxrow?: number
}

export type { IAInputProps }