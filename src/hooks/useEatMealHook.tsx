import Network, { URL } from '../../Network';
import { IMealSlot } from '../domain/UserInterface';
const { DateTime } = require('luxon');
const dayOfWeekDigit = new Date().getDay();

interface IProps {
  amount: number;
  carbs: number;
  fats: number;
  food_id: number;
  meal: number;
  name: string;
  proteins: number;
  serving_amount: number;
  unit: string;
  e: IMealSlot;
}

export const useEatMealHook = () => {
  const eatMeal = (e: IMealSlot) => {
    let mealNew = [
      {
        amount: e?.amount,
        carbs: e?.carbs,
        fats: e?.fats,
        food_id: e?.food_id,
        meal: e?.meal,
        name: e?.name,
        proteins: e?.proteins,
        serving_amount: e?.serving_amount,
        unit: e?.unit,
      },
    ];

    Network.post(`${URL}/intake/intakeFavouriteMeal`, {
      day: dayOfWeekDigit,
      week: DateTime.now().weekNumber,
      year: DateTime.now().year,
      meal: mealNew,
      meal_number: e?.meal,
    })
      .then((res: any) => console.log(res, 'ovo je pojeo'))
      .catch((e) => e);
  };

  return {
    eatMeal,
  };
};

export default useEatMealHook;
