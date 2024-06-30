import Input from "./input";

import { Feather } from "@expo/vector-icons";

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    onChangeText: { action: 'onChangeText' },
  },
};

export const Default = {
  args: {
    value: 'Input Text',
    inputMode: 'text'
  },
};

export const PasswordInput = {
  args: {
    secureTextEntry: true,
    value: 'Password',
    icon: <Feather name={"eye-off"} size={24} color="#475467" />
  },
};

export const PasswordVisible = {
  args: {
    secureTextEntry: false,
    value: 'Password',
    icon: <Feather name={"eye"} size={24} color="#475467" />
  },
};