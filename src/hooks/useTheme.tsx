import React, { useState, useEffect } from 'react';
import { theme, darkTheme } from '../styles';
import { useBoundStore } from '../store';

const useTheme = () => {
  // will grab the current theme from state/async storage
  // depending on what the theme is, will return the appropriate theme

  // if (theme === 'light') {
  //   console.log('light theme');
  // } else {
  //   console.log('dark theme');
  // }

  const { appTheme, setAppTheme } = useBoundStore((state) => state);
  // const [theme, setTheme] = useState('light');

  return { appTheme, setAppTheme, isDarkTheme: appTheme === 'dark' };
};

export default useTheme;

// NOTE: might not need this hook with zustand persistence set up.
