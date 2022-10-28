import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function LogoutButton(props: any) {
  const { onPress, title } = props;
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    color: 'white',
  },
});
