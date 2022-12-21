import React, { useState, useEffect } from 'react';
import { theme, darkTheme } from '../styles';

const useTheme = () => {
  // will grab the current theme from state/async storage
  // depending on what the theme is, will return the appropriate theme

  // if (theme === 'light') {
  //   console.log('light theme');
  // } else {
  //   console.log('dark theme');
  // }

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const theme = 'light';
    setTheme(theme);
  }, []);

  // return { theme, setTheme, currentTheme };
};

export default useTheme;
