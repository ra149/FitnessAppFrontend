import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export default function Input(props: any) {
  const { onFocus, onBlur, placeholder, placeholderTextColor, onChangeText } =
    props;

	const [value, setValue] = useState<string | undefined>(undefined);

	const onChangeHandler = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
		console.log(e, 'EVENT');
	}, []);

	const onChange2 = useCallback((text: string) => {
		console.log(text, 'TEXT');
	}, []);
  return (
		<TextInput value={value} onChange={onChangeHandler} onChangeText={onChange2} />
	);
};
