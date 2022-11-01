import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IDayOfTheWeek {
  text: string;
}

const DayOfTheWeek = ({ text }: IDayOfTheWeek) => {
  return (
    <View style={styles.hr}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hr: {
    borderTopColor: 'white',
    borderTopWidth: 0.2,

    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  text: {
    color: '#49FFFF',
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
});

export default DayOfTheWeek;
