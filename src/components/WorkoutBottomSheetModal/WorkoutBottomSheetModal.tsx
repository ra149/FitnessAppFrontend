import { View, Text } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import { styles } from './WorkoutBottomSheetModal.styles';
import WorkoutComponent from '../WorkoutComponent/WorkoutComponent';

interface IWorkoutBottomSheetModal {
  id: number;
  data: any;
}

const WorkoutBottomSheetModal = React.forwardRef<
  BottomSheetModal,
  IWorkoutBottomSheetModal
>((props, ref): any => {
  const snapPoints = useMemo(() => ['20%', '70%'], []);
  const { id, data } = props;

  useEffect(() => {}, [data, id]);

  const list = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' },
  ];

  const checkDay = () => {
    for (let i in list) {
      if (list[i].id === id) {
        return list[i].name;
      }
    }
  };

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      backdropComponent={BottomSheetBackdrop}
      backgroundStyle={{ backgroundColor: '#2A3035' }}
    >
      <View style={styles.modalHeader}>
        <View style={styles.modalDayHeader}>
          <Text style={styles.modalText}>{checkDay()}</Text>
        </View>
      </View>

      <BottomSheetScrollView
        contentContainerStyle={styles.modalView}
        showsVerticalScrollIndicator={false}
      >
        {data?.map((training: any, i: any) => (
          <View style={{ width: '100%' }} key={training.id}>
            <View style={styles.modalMealProgramContainer}>
              <Text style={styles.mealPlanText}>{training?.name}</Text>
            </View>

            {training?.exercises?.map((result: any, i: any) => (
              <View style={{ width: '100%' }} key={i}>
                <WorkoutComponent data={result} />
                <View style={styles.hrNew}></View>
              </View>
            ))}
          </View>
        ))}
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default WorkoutBottomSheetModal;
