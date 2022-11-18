import { useCallback, useState } from 'react';
import Network, { URL } from '../../Network';
import {
  IDailyIntakeResponse,
  IMeal,
  IUser,
  IWater,
  IMealSlot,
} from '../domain/UserInterface';

const { DateTime } = require('luxon');
const dayOfWeekDigit = new Date().getDay();

export const useGetUserHook = () => {
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const [dailyIntakeFood, setDailyIntakeFood] = useState<IMeal | null>(null);
  const [dailyIntakeWater, setDailyIntakeWater] = useState<IWater | null>(null);

  const getUserInfo = useCallback(() => {
    Network.get(`${URL}/user`)
      .then((res: IUser) => {
        let user = res;
        setUserInfo(user);
      })
      .catch((e: any) => {
        e;
      });
  }, []);

  const getDailyIntake = useCallback(() => {
    Network.get(`${URL}/intake/today`)
      .then((res: IDailyIntakeResponse) => {
        let dailyIntakeFood = res.intake;
        let dailyIntakeWater = res.water;
        dailyIntakeWater;
        setDailyIntakeFood(dailyIntakeFood);
        setDailyIntakeWater(dailyIntakeWater);
      })
      .catch((e: any) => {});
  }, []);

  const drinkWater = useCallback(
    (
      amount: number,
      unit = 'l',
      day = dayOfWeekDigit,
      week = DateTime.now().weekNumber,
      year = DateTime.now().year
    ) =>
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
    for (let i in dailyIntakeFood) {
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
    sumWater;
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
