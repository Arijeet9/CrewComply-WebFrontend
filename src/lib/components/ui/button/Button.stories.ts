

import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';

const meta: Meta<Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    iconSrc: { control: 'text' },
    buttonClass: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    text: 'Export',
    iconSrc: '',
    buttonClass: 'btn btn-filled-primary'
  },
};

export const WithoutIcon: Story = {
  args: {
    text: 'Import',
    buttonClass: 'btn btn-filled-primary',
  },
};


