import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/Colors';
import { Icon } from '@rneui/themed';
import ProfileScreen from '../screens/ProfileScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen';

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
        tabBarActiveTintColor: Colors.TabActive,
        tabBarInactiveTintColor: Colors.TabInactive,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Profile') {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? Colors.TabActive : Colors.TabInactive}
              />
            );
          } else if (route.name === 'Training') {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? Colors.TabActive : Colors.TabInactive}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Training" component={WorkoutsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
