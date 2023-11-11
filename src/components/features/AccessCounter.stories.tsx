import type { Meta, StoryObj } from '@storybook/react';

import { AccessCounter } from './AccessCounter';

const meta: Meta<typeof AccessCounter> = {
  component: AccessCounter,
};

export default meta;
type Story = StoryObj<typeof AccessCounter>;

export const Primary: Story = {
  render: () => <AccessCounter />,
};
