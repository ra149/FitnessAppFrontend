import { useCallback, useState } from 'react';
import Network, { URL } from '../../Network';

export const useGetWeekMealPlanHook = () => {
  const [weeklyMealPlan, setWeeklyMealPlan] = useState<any>();
  const [weeklyMealPlanRequest, setWeeklyMealPlanRequest] = useState<any>();

  const getWeeklyMealPlan = () => {
    Network.get(`${URL}/intake/week`)
      .then((res: any) => {
        let weeklyMealPlan = res.intake;
        setWeeklyMealPlan(weeklyMealPlan);
      })
      .catch((e: any) => {});
  };

  const getWeeklyMealPlanRequest = (week: number, year: number) => {
    Network.post(`${URL}/user/fetchWeeklyMealPlan`, {
      week,
      year,
    })
      .then((res: any) => {
        setWeeklyMealPlanRequest(res);
      })
      .catch((e: any) => {});
  };

  return {
    weeklyMealPlan,
    getWeeklyMealPlan,
    weeklyMealPlanRequest,
    getWeeklyMealPlanRequest,
  } as const;
};
