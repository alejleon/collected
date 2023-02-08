import { useBoundStore } from '../store';
import { lightTheme, darkTheme } from '../styles';
import { GLOBALS } from '../styles';

const useTheme = () => {
  const { isDarkTheme } = useBoundStore((state) => state);
  return { theme: isDarkTheme ? darkTheme : lightTheme, GLOBALS };
};

export default useTheme;
