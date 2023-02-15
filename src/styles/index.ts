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
    primaryText: palette.GREY_900,
    secondaryText: palette.GREY_600,
    secondary: palette.GREY_300,
    background: palette.OFF_WHITE,
    banner: palette.GREY_200,
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
    primaryText: palette.OFF_WHITE,
    secondary: palette.GREY_700,
    background: palette.GREY_900,
    banner: palette.GREY_800,
  },
};
