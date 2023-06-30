import type { Meta, StoryObj } from "@storybook/vue3";
import ATextField from "./ATextField.vue";
import { ref } from "vue";

const meta: Meta<typeof ATextField> = {
    title: 'Components/ATextField',
    component: ATextField
};

export default meta;
type Story = StoryObj<typeof ATextField>;

export const Default: Story = {
    render: (args) => ({
        components: { ATextField },
        setup: () => {
            const model = ref('');
            const updateModel = (value: any) => model.value = value

            return { args, model, updateModel }
        },
        template: '<ATextField v-bind="args" v-model="model" /><div>{{ model }}</div>'
    }),
    args: {
        label: '用户名'
    },
};