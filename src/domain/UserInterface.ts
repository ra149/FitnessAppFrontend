export interface User {
  nickname: string;
  first_name: string;
  last_name: string;
  description: string;
  trainer_id: number;
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
