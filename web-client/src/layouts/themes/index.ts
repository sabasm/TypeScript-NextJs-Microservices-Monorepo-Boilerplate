import darkMode from './modes/darkMode'; //Mode has only the properties that are different from the global settings
import lightMode from './modes/lightMode';
import globalSettings from './globalSettings'; //Global settings has all the properties and can be used as a base for the theme

//Theme has complete properties
const darkTheme = { ...globalSettings, ...darkMode };
const lightTheme = { ...globalSettings, ...lightMode };

export { darkTheme, lightTheme }; //Exporting the themes
