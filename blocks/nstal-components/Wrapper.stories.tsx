import React from 'react';

import { Meta, StoryObj } from "@storybook/react";

import Wrapper from './Wrapper';
import { ActionStatus, ActionWrapperProps } from '@nstaldev/react-core'

const statusOptions = {
  'Later': ActionStatus.Later,
  'NextToRun': ActionStatus.NextToRun,
  'Starting': ActionStatus.Starting,
  'Running': ActionStatus.Running,
  'Completed': ActionStatus.Completed,
  'Error': ActionStatus.Error
};

export default {
  title: 'Wrapper',
  component: Wrapper,
  argTypes: {
    status: {
      options: statusOptions,
      control: {
        type: 'select',
        labels: statusOptions
      }
    }
  },
} as Meta;

type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
  args: {
    children: <div>
      <h1>Hey!</h1>
      <p>
        This is some random content.
      </p>
    </div>,
    status: 'hello',
    automated: false
  }
};
