import type { Meta, StoryObj } from '@storybook/react';

import TransitionStack from './TransitionStack';

const meta: Meta<typeof TransitionStack> = {
  title: 'TransitionStack',
  component: TransitionStack,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof TransitionStack>;

export const Primary: Story = {
  args: {
    currentElement: 0,
    elements: [
      <p key="p" className="bg-blue-500">
        A simple paragraph
      </p>,
      <div key="div" className="bg-red-500 grow h-full">
        A div
      </div>,
      <div key="big-div" className="bg-green-500 p-5">
        A bigger div
      </div>
    ]
  },
};
