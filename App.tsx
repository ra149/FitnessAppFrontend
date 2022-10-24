import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { useLoadFont } from './src/hooks/useFont';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  const { fonts, loadFonts } = useLoadFont();

  useEffect(() => {
    loadFonts();
  }, []);

  if (fonts) {
    return (
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
