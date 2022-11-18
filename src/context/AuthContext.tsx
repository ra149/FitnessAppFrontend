import { Alert } from 'react-native';
import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
        if (token != undefined) {
          AsyncStorage.setItem('Authorization-token', token);
          setIsLoading(false);
          setToken(true);
        } else {
          setIsLoading(false);
          setToken(false);
          Alert.alert('Error', 'Bad credentials');
        }
      })
      .catch((e: any) => {
        setIsLoading(false);
        setToken(false);
      });
  };

  const retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('Authorization-token');
      if (value !== null) {
        setToken(true);
        value;
      } else {
        setToken(false);
      }
    } catch (error) {}
  };

  const logout = () => {
    AsyncStorage.removeItem('Authorization-token');
    setToken(false);
    retrieveToken();
    ('loged out');
    AsyncStorage.getItem('Authorization-token');
  };

  const restoreSession = () => {
    AsyncStorage.getItem('Authorization-token').then((storedToken) => {
      if (storedToken) {
        setToken(true);
        return;
      }
    });
  };

  useEffect(() => {
    restoreSession();
  }, []);

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
