import { Meta, StoryObj } from '@storybook/react';
import { Guard } from './Guard';

const meta: Meta<typeof Guard> = {
  component: Guard,
};

export default meta;

type Story = StoryObj<typeof Guard>;

export const Primary: Story = {
  render: () => <Guard>解錠</Guard>,
};
