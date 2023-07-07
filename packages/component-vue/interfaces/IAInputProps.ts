import type { IModelModifiers } from "./IModelModifiers"

interface IAInputProps {
    type: 'text' | 'password' | 'textarea' | 'select'
    label: string,
    outlined?: boolean,
    filled?: boolean,
    modelValue: string,
    modelModifiers?: IModelModifiers,
    maxrow?: number,
    options?: Record<string, string>
}

export type { IAInputProps }