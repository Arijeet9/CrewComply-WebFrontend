import type { Meta, StoryObj } from '@storybook/svelte';
import TestComponent from '$lib/components/TestComponent.svelte';

const meta: Meta<TestComponent> = {
  title: 'Example/TestComponent',
  component: TestComponent,
};

export default meta;

type Story = StoryObj<TestComponent>;

export const Primary: Story = {
  render: (args) => ({
    Component: TestComponent,
    props: args,
  }),
  args: {
    text: 'Hello, Storybook with Skeleton UI!',
  },
};
