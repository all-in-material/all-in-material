import type { Meta, StoryObj } from "@storybook/vue3";
import ADropDown from "./ADropDown.vue";
import { ref } from "vue";

const meta: Meta<typeof ADropDown> = {
    title: 'Components/ADropDown',
    component: ADropDown
};

const model = ref(false);
const updateModel = (value: any) => model.value = value

export default meta;
type Story = StoryObj<typeof ADropDown>;

export const Standard: Story = {
    render: (args) => ({
        components: { ADropDown },
        setup: () => ({ args, model, updateModel }),
        template: '<ADropDown v-bind="args" v-model="model"><template #visible>Visible Slot</template><template #hidden>Hidden Slot<br />Hidden Slot 2</template></ADropDown>'
    }),
    args: {
        transition: 'fade-scale'
    }
};