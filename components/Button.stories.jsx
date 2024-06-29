import Button from "./button";

import { Feather } from '@expo/vector-icons';

const loginIcon = <Feather name="log-in" size={15} color="white" />
const mailIcon = <Feather name="mail" size={15} color="white" />

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'onPress' },
  },
};

export const Default = {
  args: {
    type: 'default',
    children: 'Default Button',
  },
};

export const Primary = {
  args: {
    type: 'primary',
    icon: loginIcon,
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    icon: mailIcon,
    children: 'Secondary Button',
  },
};