import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { useLoadFont } from './src/hooks/useFontHook';
import { AuthProvider } from './src/context/AuthContext';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {
  const { fonts, loadFonts } = useLoadFont();

  useEffect(() => {
    loadFonts();
  }, []);

  if (fonts) {
    return (
      <BottomSheetModalProvider>
        <AuthProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </AuthProvider>
      </BottomSheetModalProvider>
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
