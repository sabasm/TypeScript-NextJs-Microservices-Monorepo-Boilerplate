import darkMode from './modes/darkMode';
import lightMode from './modes/lightMode';
import globalSettings from './globalSettings';

const darkTheme = { ...globalSettings, ...darkMode };
const lightTheme = { ...globalSettings, ...lightMode };

export { darkTheme, lightTheme };
