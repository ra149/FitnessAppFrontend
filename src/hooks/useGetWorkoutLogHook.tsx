import { useState } from 'react';
import Network, { URL } from '../../Network';

export const useGetWorkoutLogHook = () => {
  const [weeklyWorkoutLog, setWeeklyWorkoutLog] = useState<any>();

  const getWeeklyWorkoutLog = () => {
    Network.get(`${URL}/workoutlog/week`)
      .then((res: any) => {
        let weeklyWorkoutLog = res.workout_log;
        setWeeklyWorkoutLog(weeklyWorkoutLog);
      })
      .catch((e: any) => {});
  };

  return {
    weeklyWorkoutLog,
    getWeeklyWorkoutLog,
  } as const;
};
