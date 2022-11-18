interface IUser {
  nickname: string;
  first_name: string;
  last_name: string;
  description: string;
  trainer_id: number;
  meal_plan: any;
  nutrition: {
    id: number;
    client_id: number;
    carbs: number;
    proteins: number;
    fats: number;
    calories: number;
    water: number;
    program: string;
    proteins_ratio: number;
    carbs_ratio: number;
    fats_ratio: number;
    created_at: Date;
    updated_at: Date;
  };
  info: {
    id: number;
    client_id: number;
    dob: Date;
    gender: string;
    height: number;
    weight: number;
    units: string;
    utc_offset: number;
    country: string;
    profile_picture: string;
    goal_weight: number;
    created_at: Date;
    updated_at: Date;
  };
  age: number;
  timeline: [];
}

interface IDailyIntakeResponse {
  intake: IMeal;
  water: IWater;
}

interface IMealPlan {
  day: IMealPlanDay;
}

interface IMealPlanDay {
  meal: IMealPlanMeal[];
}

interface IMealPlanMeal {
  food_id: number;
  unit: string;
  name: string;
  proteins: number;
  carbs: number;
  fats: number;
  serving_amount: number;
  amount: number;
  meal: number;
}

interface IMeal {
  meal: IMealSlot[];
}
interface IMealSlot {
  id: number;
  client_id: number;
  meal: string;
  food_id: number;
  amount: string;
  unit: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  carbs: string;
  proteins: string;
  fats: string;
  serving_amount: string;
}

interface IWater {
  id: number;
  client_id: number;
  amount: number;
  unit: string;
  created_at: Date;
  updated_at: Date;
}

export {
  IUser,
  IDailyIntakeResponse,
  IMeal,
  IWater,
  IMealSlot,
  IMealPlan,
  IMealPlanDay,
  IMealPlanMeal,
};
