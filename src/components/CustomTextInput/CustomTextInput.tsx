import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

export default function Input(props: TextInputProps) {
  const { onChangeText } = props;

  const [value, setValue] = useState('');

  return <TextInput value={value} onChangeText={onChangeText} />;
}
