import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
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

export const Primary: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    type: 'primary',
  },
};
export const PrimaryInverse: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    type: 'primary inverse',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
export const Secondary: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    type: 'secondary',
  },
};
export const SecondaryInverse: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    type: 'secondary inverse',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
export const Tertiary: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    type: 'tertiary',
  },
};
export const TertiaryInverse: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    type: 'tertiary inverse',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
export const Negative: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    type: 'negative',
  },
};
export const Lightning: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    type: 'lightning',
  },
};

export const Small: Story = {
  args: {
    text: 'Button',
    size: 'small',
    type: 'primary',
  },
};
export const Medium: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    type: 'primary',
  },
};
export const Large: Story = {
  args: {
    text: 'Button',
    size: 'large',
    type: 'primary',
  },
};

export const Icon: Story = {
  args: {
    text: 'Button',
    size: 'large',
    type: 'primary',
    icon: 'Download'
  },
};


export const Disabled: Story = {
  args: {
    text: 'Button',
    size: 'large',
    type: 'primary',
    disabled: true,
  },
};
export const Loading: Story = {
  args: {
    text: 'Button',
    size: 'large',
    type: 'primary',
    loading: true,
  },
};
export const Selected: Story = {
  args: {
    text: 'Button',
    size: 'large',
    type: 'primary',
    selected: true,
  },
};
