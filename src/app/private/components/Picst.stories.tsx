import type { Meta, StoryObj } from '@storybook/react';
import { Picst } from './Picst';

const meta: Meta<typeof Picst> = {
  component: Picst,
};

export default meta;
type Story = StoryObj<typeof Picst>;

export const Primary: Story = {
  render: () => <Picst src={'/profile1.webp'} text="aa" />,
};
