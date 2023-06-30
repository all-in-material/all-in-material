import type { Meta, StoryObj } from "@storybook/vue3";
import ATextField from "./ATextField.vue";
import { ref } from "vue";

const meta: Meta<typeof ATextField> = {
    title: 'Components/ATextField',
    component: ATextField
};

const model = ref('');
const updateModel = (value: any) => model.value = value

export default meta;
type Story = StoryObj<typeof ATextField>;

export const Outlined: Story = {
    render: (args) => ({
        components: { ATextField },
        setup: () => ({ args, model, updateModel }),
        template: '<ATextField v-bind="args" v-model="model" /><div>{{ model }}</div>'
    }),
    args: {
        label: '用户名',
        type: 'text',
        filled: false
    },
};

export const Filled: Story = {
    render: (args) => ({
        components: { ATextField },
        setup: () => ({ args, model, updateModel }),
        template: '<ATextField v-bind="args" v-model="model" /><div>{{ model }}</div>'
    }),
    args: {
        label: '用户名',
        type: 'text',
        filled: true
    },
};