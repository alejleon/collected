import TYPOGRAPHY from './typography';
import SPACING from './spacing';
import COLORS from './colors';

export const GLOBAL_STYLES = {
  TYPOGRAPHY,
  SPACING,
  COLORS,
};

export const theme = {
  colors: {
    primary: '#FF0000',
    secondary: '#FF0000',
    background: '#FFFFFF',
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
      fontFamily: TYPOGRAPHY.PRESSSTART_400,
      fontSize: 24,
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    body: {
      fontFamily: 'PressStart2P_400Regular',
      fontSize: 16,
    },
  },
  spacing: SPACING,
};

export const darkTheme = {
  ...theme,
};
