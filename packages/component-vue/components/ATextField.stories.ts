import { ref } from 'vue'
import ATextField from './ATextField.vue'

export default {
    title: 'Components/ATextField',
    component: ATextField,
    args: {
        label: '用户名',
    }
}

const Template = (args: any) => ({
    components: { ATextField },
    setup() {
        const model = ref('')
        const updateModel = (value: any) => model.value = value

        return { args, model, updateModel }
    },
    template: '<ATextField v-bind="args" v-model="model" /><span>{{ model }}</span>'
})

export const Default = Template.bind({})