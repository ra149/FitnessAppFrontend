import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './LogoutButton.styles';

export default function LogoutButton(props: any) {
  const { onPress, title } = props;
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
