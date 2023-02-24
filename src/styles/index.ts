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
    primary: palette.RED_ORANGE,
    secondary: palette.BLUE,
    background: palette.OFF_WHITE,
    banner: palette.OFF_WHITE,
    card: palette.GREY_200,
    // secondary: palette.GREY_300,
    // error: '#B00020',
    // onBackground: '#000000',
    // onSurface: '#000000',
    // disabled: 'rgba(0, 0, 0, 0.26)',
    // placeholder: 'rgba(0, 0, 0, 0.54)',
    // backdrop: 'rgba(0, 0, 0, 0.5)',
    // notification: '#FF0000',
  },
  textVariants: {
    header: {
      fontFamily: typography.PRESSSTART_400,
      fontSize: 24,
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    body: {
      fontFamily: typography.ROBOTO_400,
      fontSize: 16,
    },
    button: {
      fontFamily: typography.ROBOTO_500,
      fontSize: 14,
      lineHeight: 16,
      letterSpacing: 1.25,
    },
  },
  spacing: spacing,
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primaryText: palette.OFF_WHITE,
    secondaryText: palette.GREY_700,
    primary: palette.RED_ORANGE_DARK,
    secondary: palette.BLUE,
    background: palette.GREY_900,
    banner: palette.GREY_800,
    card: palette.GREY_800,
  },
};
