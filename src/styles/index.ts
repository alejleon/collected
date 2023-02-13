import typography from './typography';
import spacing from './spacing';
import palette from './palette';

export const globalStyles = {
  typography,
  spacing,
  palette,
};

export const lightTheme = {
  colors: {
    primary: '#292929',
    secondary: palette.LIGHT_GREY,
    background: palette.OFF_WHITE,
    surface: '#FFFFFF',
    error: '#B00020',
    text: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: 'rgba(0, 0, 0, 0.26)',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: '#FF0000',
  },
  textVariants: {
    header: {
      fontFamily: typography.PRESSSTART_400,
      fontSize: 24,
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    body: {
      fontFamily: 'PressStart2P_400Regular',
      fontSize: 16,
    },
  },
  spacing: spacing,
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: '#F5F5F5',
    secondary: palette.LIGHT_GREY,
    background: palette.DARK_GREY,
  },
};
