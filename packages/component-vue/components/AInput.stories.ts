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
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
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
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '用户名',
        type: 'password',
        outlined: true
    },
};

export const Filled: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '用户名',
        type: 'text',
        filled: true
    },
};

export const SelectStandard: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '用户名',
        type: 'select',
        options: {
            value1: 'label1',
            value2: 'label2'
        }
    },
};

export const SelectOutlined: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '用户名',
        type: 'select',
        options: {
            value1: 'label1',
            value2: 'label2'
        },
        outlined: true
    },
};

export const SelectFilled: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '用户名',
        type: 'select',
        options: {
            value1: 'label1',
            value2: 'label2'
        },
        filled: true
    },
};

const multipleModel = ref([]);

export const MultipleSelectStandard: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model: multipleModel, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '用户名',
        type: 'select',
        options: {
            value1: 'label1',
            value2: 'label2'
        },
        multiple: true
    },
};

export const TextareaStandard: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '个人简介',
        type: 'textarea'
    },
};

export const TextareaOutlined: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '个人简介',
        type: 'textarea',
        outlined: true
    },
};

export const TextareaFilled: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '个人简介',
        type: 'textarea',
        filled: true
    },
};

export const MaxRow: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>{{ model }}</template></AInput>'
    }),
    args: {
        label: '个人简介',
        type: 'textarea',
        maxrow: 4,
        outlined: false,
        filled: false
    },
};

export const HelperText: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>帮助文本</template></AInput>'
    }),
    args: {
        label: '用户名',
        type: 'text',
        outlined: false,
        filled: false
    },
};

const switchModel = ref(false);

export const SwitchStandard: Story = {
    render: (args) => ({
        components: { AInput },
        setup: () => ({ args, model: switchModel, updateModel }),
        template: '<AInput v-bind="args" v-model="model"><template #helper>帮助文本</template></AInput>'
    }),
    args: {
        label: '用户名',
        type: 'switch'
    },
};