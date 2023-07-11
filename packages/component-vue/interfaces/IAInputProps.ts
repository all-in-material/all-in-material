import type { IModelModifiers } from "./IModelModifiers"

interface IAInputProps {
    type: 'text' | 'password' | 'textarea' | 'select'
    label: string,
    outlined?: boolean,
    filled?: boolean,
    modelValue: string | string[],
    modelModifiers?: IModelModifiers,
    maxrow?: number,
    options?: Record<string, string>,
    multiple?: boolean
}

interface IAInputDropProps {
    label: IAInputProps['label'],
    options: IAInputProps['options'],
    multiple: IAInputProps['multiple'],
    modelValue: IAInputProps['modelValue'],
    focused: boolean,
}

export type { IAInputProps, IAInputDropProps }