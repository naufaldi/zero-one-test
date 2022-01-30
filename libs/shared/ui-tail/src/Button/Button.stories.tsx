import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return (
    <div className="bg-gray-400 p-20">
      <Button {...args}> Button </Button>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  title: 'Success',
  size: 'large',
};
export const Outline = Template.bind({});

Outline.args = {
  variant: 'outline',
  title: 'Success',
  size: 'medium',
};
