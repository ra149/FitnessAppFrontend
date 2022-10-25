import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Button(props: any) {
  const { onPress, title } = props;
  return (
    <LinearGradient colors={['#49FFFF', '#2AACE3']} style={styles.button}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    width: 120,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2AACE3',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    color: 'white',
  },
});
