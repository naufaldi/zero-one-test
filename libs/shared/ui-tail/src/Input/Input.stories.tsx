import { Story } from '@storybook/react';
import { InputProps } from '..';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: 'Value',
  onChange: () => {},
  className: '',
  type: 'text',
  id: 'base-input',
  required: false,
};
