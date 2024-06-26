import type {Meta,StoryObj} from "@storybook/svelte";
import Button from "./Button.svelte";

const meta:Meta<Button>={
    title:'UI/Button',
    component:Button
}

export default meta;

type Story=StoryObj<typeof meta>;

export const Primary:Story={
    args:{
        label:"Buttonnnn",
    }
}
