import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import TabNavigator from './TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext, { AuthContextType } from '../context/AuthContext';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { token } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {}, [token]);
  return (
    <Stack.Navigator>
      {token == false ? (
        <Stack.Group>
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
