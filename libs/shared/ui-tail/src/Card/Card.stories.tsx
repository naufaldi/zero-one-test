// Button.stories.ts|tsx

import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Card, CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

export const Primary: Story<CardProps> = () => {
  return (
    <div className="bg-white p-2">
      <Card className="bg-white mx-auto">Card content</Card>
    </div>
  );
};
