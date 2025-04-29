import React from 'react';
import { Button, ButtonProps } from './Button';
import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: fn(),
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Click Me', disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { label: 'Disabled', disabled: true };
