export type AppState = {
  bears: number;
  currentTheme: Theme;
  increaseBearPopulation: () => void;
  killAllBears: () => void;
};

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
