import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import { styles } from './DayOfTheWeek.styles';

interface IDayOfTheWeek {
  text: string | number;
  id: number | string;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const DayOfTheWeek = ({ id, text, onPress, color }: IDayOfTheWeek) => {
  return (
    <View style={styles.hr}>
      <View style={styles.dayContainer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ ...styles.text, color: color }}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DayOfTheWeek;
