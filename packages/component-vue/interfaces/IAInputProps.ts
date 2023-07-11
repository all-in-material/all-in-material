import type { InputHTMLAttributes } from "vue"
import type { IModelModifiers } from "./IModelModifiers"

interface IAInputProps {
    type: InputHTMLAttributes['type'] | 'select' | 'textarea' | 'switch'
    label: string
    outlined?: boolean
    filled?: boolean
    modelValue: string | string[] | boolean
    modelModifiers?: IModelModifiers
    maxrow?: number
    options?: Record<string, string>
    multiple?: boolean
}

interface IAInputInputProps {
    label: IAInputProps['label']
    type: IAInputProps['type']
    modelValue: IAInputProps['modelValue']
}

interface IAInputTextareaProps {
    label: IAInputProps['label']
    maxrow?: IAInputProps['maxrow']
    modelValue: IAInputProps['modelValue']
}

interface IAInputDropProps {
    label: IAInputProps['label']
    options: IAInputProps['options']
    multiple?: IAInputProps['multiple']
    modelValue: IAInputProps['modelValue']
    focused: boolean
}

export type { IAInputProps, IAInputInputProps, IAInputTextareaProps, IAInputDropProps }