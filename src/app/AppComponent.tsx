import React from 'react'
import {
  ApplicationProvider,
  ApplicationProviderProps,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
  mapping,
  light,
  dark
} from '@eva-design/eva';
import {default as appTheme} from 'src/styles/custom-theme.json';
// import {default as customMapping} from 'src/styles/custom-mapping.json';
import {
  AppTheme,
  ThemeContext,
  ThemeContextType,
} from 'src/contexts/ThemeContext';
import RootNavigator from 'src/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from 'src/contexts/AuthContext';

const themes = {
  Light: { ...light, ...appTheme },
  Dark: { ...dark, ...appTheme },
};

const customMapping = {
  strict: { 'text-font-family': 'System' },
};

export default () => {
  const [theme, setTheme] = React.useState<AppTheme>(AppTheme.light);

  const isDarkMode = (): boolean => {
    return theme === AppTheme.dark;
  };

  const applicationProviderConfig: ApplicationProviderProps = {
    mapping: mapping,
    theme: themes[theme],
    customMapping: customMapping,
  };

  const themeContextProviderConfig: ThemeContextType = {
    theme: theme,
    setTheme: setTheme,
    isDarkMode: isDarkMode,
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...applicationProviderConfig}>
        <SafeAreaProvider>
          <ThemeContext.Provider value={themeContextProviderConfig}>
            <AuthProvider>
              <RootNavigator />
            </AuthProvider>
          </ThemeContext.Provider>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  )
}
