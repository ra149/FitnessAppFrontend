import { View, Text } from 'react-native';
import React, { useCallback, useEffect, useMemo } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import MealComponent from '../MealComponent/MealComponent';
import { styles } from './FoodBottomSheetModal.styles';

interface IFoodBottomSheetModal {
  id: number;
  data: any;
  ate: any;
}

const FoodBottomSheetModal = React.forwardRef<
  BottomSheetModal,
  IFoodBottomSheetModal
>((props, ref): any => {
  const snapPoints = useMemo(() => ['20%', '70%'], []);
  const { id, data, ate } = props;

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

  const meals = [
    { id: 1, name: 'Breakfast' },
    { id: 2, name: 'Snack' },
    { id: 3, name: 'Lunch' },
    { id: 4, name: 'Snack' },
    { id: 5, name: 'Dinner' },
    { id: 6, name: 'Snack' },
  ];

  const checkDay = () => {
    for (let i in list) {
      if (list[i].id === id) {
        return list[i].name;
      }
    }
  };

  const calculateDaily = useCallback(() => {
    let totalProteins = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    if (data) {
      Object.entries(data).forEach(([key, value]: any) => {
        for (let i in value) {
          totalProteins += Number(value[i]?.proteins);
          totalCarbs += Number(value[i]?.carbs);
          totalFat += Number(value[i]?.fats);
        }
      });
    }

    return { totalProteins, totalCarbs, totalFat };
  }, [id]);
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
        <View style={styles.modalMealProgramContainer}>
          <Text style={styles.mealPlanText}>MEAL PROGRAM</Text>
        </View>
      </View>

      <View style={styles.hr}></View>

      <BottomSheetScrollView
        contentContainerStyle={styles.modalView}
        showsVerticalScrollIndicator={false}
      >
        {meals.map((result) => (
          <View key={result.id} style={{ width: '100%' }}>
            <MealComponent
              data={data?.[`${result.id}`]}
              name={result.name}
              checkData={ate?.[`${id}`]?.[`${result.id}`]}
              id={id}
            />
            <View style={styles.hrNew}></View>
          </View>
        ))}

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomHeader}>Dailty totals:</Text>
          <View style={styles.dataContainer}>
            <Text style={styles.dataNumbersText}>
              {calculateDaily().totalProteins.toFixed(1)}
              <Text style={styles.dataText}>g protein</Text>
            </Text>
            <Text style={styles.dataNumbersText}>
              {calculateDaily().totalCarbs.toFixed(1)}
              <Text style={styles.dataText}>g carbs</Text>
            </Text>
            <Text style={styles.dataNumbersText}>
              {calculateDaily().totalFat.toFixed(1)}
              <Text style={styles.dataText}>g fat</Text>
            </Text>
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default FoodBottomSheetModal;
