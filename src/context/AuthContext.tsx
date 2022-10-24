import { View, Text } from 'react-native';
import React, { createContext, ReactNode, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Network, { URL } from '../../Network';

export type AuthContextType = {
  token: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: Props) => {
  // const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(false);

  const login = (email: string, password: string) => {
    setIsLoading(true);

    Network.post(`${URL}/user/login`, {
      username: email,
      password,
    })
      .then((res: any) => {
        let token = res.access_token;
        console.log(res);
        AsyncStorage.setItem('Authorization-token', token);
        setIsLoading(false);
        setToken(true);
      })
      .catch((e: any) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('Authorization-token');
      if (value !== null) {
        setToken(true);
        console.log(value);
      } else {
        setToken(false);
        console.log('null');
      }
    } catch (error) {}
  };

  const logout = () => {
    AsyncStorage.removeItem('Authorization-token');
    setToken(false);
    retrieveToken();
    console.log('loged out');
    console.log(AsyncStorage.getItem('Authorization-token'));
  };

  const values = useMemo(
    () => ({
      token,
      isLoading,
      login,
      logout,
    }),
    [token, isLoading, login, logout]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
