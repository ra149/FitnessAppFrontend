import { eachWeekendOfYear } from 'date-fns';
import { daysInWeek } from 'date-fns/esm/fp';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import Network, { URL } from '../../Network';
import { User } from '../domain/UserInterface';

export const useGetUserHook = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [dailyIntakeFood, setDailyIntakeFood]: any = useState();
  const [dailyIntakeWater, setDailyIntakeWater]: any = useState();
  var weekYear = require('dayjs/plugin/weekYear'); // dependent on weekOfYear plugin
  var weekOfYear = require('dayjs/plugin/weekOfYear');
  dayjs.extend(weekYear);
  dayjs.locale;
  const getUserInfo = useCallback(() => {
    Network.get(`${URL}/user`)
      .then((res: User) => {
        let user = res;
        setUserInfo(user);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, []);

  const getDailyIntake = useCallback(() => {
    Network.get(`${URL}/intake/today`)
      .then((res: any) => {
        let dailyIntakeFood = res.intake;
        let dailyIntakeWater = res.water;
        console.log(dailyIntakeWater);
        setDailyIntakeFood(dailyIntakeFood);
        setDailyIntakeWater(dailyIntakeWater);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, []);

  const drinkWater = useCallback(
    (amount: number, unit = 'l', day = 1, week = 44, year = 2022) =>
      Network.post(`${URL}/intake/water`, {
        amount,
        day,
        unit,
        week,
        year,
      }),
    []
  );

  const calculateIntakeFood = useCallback((dailyIntakeFood: any) => {
    let sumProteins = 0;
    let sumCarbs = 0;
    let sumFats = 0;

    for (const i in dailyIntakeFood) {
      sumProteins = sumProteins + parseFloat(dailyIntakeFood[i][0].proteins);
      sumCarbs = sumCarbs + parseFloat(dailyIntakeFood[i][0].carbs);
      sumFats = sumFats + parseFloat(dailyIntakeFood[i][0].fats);
    }
    return { sumProteins, sumCarbs, sumFats };
  }, []);

  const calculateIntakeWater = useCallback((dailyIntakeWater: any) => {
    let sumWater = 0;

    for (const i in dailyIntakeWater) {
      sumWater = sumWater + parseFloat(dailyIntakeWater[i].amount) / 1000;
    }
    console.log(sumWater);
    return { sumWater };
  }, []);

  return {
    userInfo,
    getUserInfo,
    dailyIntakeFood,
    dailyIntakeWater,
    getDailyIntake,
    calculateIntakeFood,
    calculateIntakeWater,
    drinkWater,
  } as const;
};
