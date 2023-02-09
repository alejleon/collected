import { useBoundStore } from '../store';
import { lightTheme, darkTheme } from '../styles';

const useTheme = () => {
  const { isDarkTheme } = useBoundStore((state) => state);
  return isDarkTheme ? darkTheme : lightTheme;
};

export default useTheme;
