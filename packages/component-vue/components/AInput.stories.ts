import type { Meta, StoryObj } from "@storybook/vue3";
import AInput from "./AInput.vue";
import { ref } from "vue";

const meta: Meta<typeof AInput> = {
    title: 'Components/AInput',
    component: AInput
};

const model = ref('');
const updateModel = (value: any) => model.value = value

export default meta;
type Story = StoryObj<typeof AInput>;

export const Standard: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model" /><div>{{ model }}</div>'
    }),
    args: {
        label: '用户名',
        type: 'text'
    },
};

export const Outlined: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model" /><div>{{ model }}</div>'
    }),
    args: {
        label: '用户名',
        type: 'text',
        outlined: true
    },
};

export const Filled: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model" /><div>{{ model }}</div>'
    }),
    args: {
        label: '用户名',
        type: 'text',
        filled: true
    },
};