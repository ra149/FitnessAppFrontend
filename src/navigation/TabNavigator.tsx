import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/Colors';
import { Icon } from '@rneui/themed';
import ProfileScreen from '../screens/Profile/ProfileScreen';

import MealPlanScreen from '../screens/MealPlan/MealPlanScreen';
import WorkoutScreen from '../screens/Workout/WorkoutScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.turqoise,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: { backgroundColor: '#272C31' },
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Profile') {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? Colors.turqoise : Colors.white}
              />
            );
          } else if (route.name === 'MealPlan') {
            return (
              <MaterialCommunityIcons
                name="food-apple"
                size={28}
                color={focused ? Colors.turqoise : Colors.white}
              />
            );
          } else if (route.name === 'Workouts') {
            return (
              <MaterialCommunityIcons
                name="weight-lifter"
                size={28}
                color={focused ? Colors.turqoise : Colors.white}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MealPlan"
        component={MealPlanScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
