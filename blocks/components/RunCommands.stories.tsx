import React from 'react';

import { Meta, StoryObj } from "@storybook/react";

import RunCommands from './RunCommands';
import { ExecutionStatus } from '@nstaldev/react-core';

export default {
  title: 'RunCommands',
  component: RunCommands,
  argTypes: {},
} as Meta;

type Story = StoryObj<typeof RunCommands>;

export const Default: Story = {
  args: {
    commands: [
      'the first command',
      'another command',
      'a third command',
      'the last command'
    ],
    status: [
      ExecutionStatus.Completed,
      ExecutionStatus.Error,
      ExecutionStatus.Running,
      ExecutionStatus.NotStarted
    ],
    output: [
      'A command with a small output', 
      `This is a larger output\nSome additional stuff\nAnd again\nAnd again!!\nNow that's the last line`,
      '', ''
    ]
  }
};
