import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './MealComponent.styles';
import Checkbox from 'expo-checkbox';
import useEatMealHook from '../../hooks/useEatMealHook';
import dayjs from 'dayjs';

interface IMealComponent {
  data: any;
  name: string;
  checkData: any;
  id: number;
}

const MealComponent = ({ data, name, checkData, id }: IMealComponent) => {
  const [isChecked, setChecked] = useState(false);
  const { eatMeal } = useEatMealHook();
  const [notEnabled, setNotEnabled] = useState(false);

  useEffect(() => {
    //console.log(checkData, 'dobio sta je pojeo tacnog dana za tacan obrok');
    if (checkData) {
      // console.log('postoji check data');
      Object.entries(checkData).forEach(([key, value]: any) => {
        for (let i in value) {
          if (data?.food_id === value[i]?.food_id) {
            setChecked(true);

            // console.log('postavio na true', data);
            return;
          }
        }
      });
    }
  }, [data, checkData]);

  useEffect(() => {
    if (dayjs().day() !== id) {
      setNotEnabled(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <View style={styles.itemsList}>
        {data?.map((e: any) => (
          <View
            key={e?.food_id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text style={styles.itemsText}>
              · {Number(e?.amount).toFixed(0)} {e?.unit}'s of {e?.name} -{' '}
              {e?.proteins} proteins, {e?.carbs} carbs, {e?.fats} fats
            </Text>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={() => {
                setChecked(true);

                eatMeal(e);
              }}
              color="#434345"
              disabled={isChecked || notEnabled ? true : false}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default MealComponent;
