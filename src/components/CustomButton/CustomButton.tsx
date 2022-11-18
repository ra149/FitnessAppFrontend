import React from 'react';
import { Text, Pressable, ButtonProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './CustomButton.styles';

export default function Button(props: ButtonProps) {
  const { onPress, title } = props;
  return (
    <LinearGradient colors={['#49FFFF', '#2AACE3']} style={styles.button}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
}
