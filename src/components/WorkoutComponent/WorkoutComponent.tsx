import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './WorkoutComponent.styles';

interface IWorkoutComponent {
  data: any;
}

const WorkoutComponent = ({ data }: IWorkoutComponent) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{data?.name}</Text>
      </View>
      <View style={styles.itemsList}>
        {data?.exerciseItems?.map((e: any, i: any) => (
          <View
            key={i}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text style={styles.itemsText}>
              ·{' '}
              {e?.reps
                ? 'Reps: ' + e?.reps + ' reps'
                : 'Duration: ' + e?.duration + ' sec'}
              {e?.weight ? ', Weight: ' + e?.weight + 'kg' : ''}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WorkoutComponent;
