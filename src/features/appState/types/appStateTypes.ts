export type AppState = {
  appTheme: Theme;
  setAppTheme: (theme: Theme) => void;
};

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
