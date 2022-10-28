import React, { useCallback, useEffect, useState } from 'react';
import { loadAsync } from 'expo-font';

export const useLoadFont = () => {
  const [fonts, setFonts] = useState(false);

  const loadFonts = useCallback(async () => {
    await loadAsync({
      Montserrat: require('../../assets/fonts/montserrat-v25-latin-regular.ttf'),
    }).then(() => setFonts(true));
  }, [loadAsync]);

  return { fonts, loadFonts } as const;
};
