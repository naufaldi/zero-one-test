import { Story, Meta } from '@storybook/react';
import { Alert, AlertProps } from './Alert';

export default {
  component: Alert,
  title: 'Alert',
} as Meta;

const Template: Story<AlertProps> = (args) => {
  return (
    <div className="bg-white p-20">
      <Alert {...args}></Alert>
    </div>
  );
};

export const Success = Template.bind({});

Success.args = {
  variant: 'success',
  title: 'Success',
};
export const Error = Template.bind({});

Error.args = {
  variant: 'error',
  title: 'Success',
};
