import React from 'react';

import { Meta, StoryObj } from "@storybook/react";

import Wrapper from './Wrapper';
import { ActionWrapperProps } from '@nstaldev/react-core'

export default {
  title: 'Wrapper',
  component: Wrapper,
  argTypes: {
  },
} as Meta;

type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
  args: {
    children: <div>TODO</div>,
    status: 'hello',
    automated: false
  }
};
