import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Spinner",
  component: Example,
  parameters: {
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Dark', value: '#333' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    size: 'small',
    type: 'default',
  },
};

export const Inverse: Story = {
  args: {
    size: 'small',
    type: 'inverse',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    type: 'default',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    type: 'default',
  },
};