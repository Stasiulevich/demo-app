import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from '@navigation/LinkingConfiguration';
import RootNavigator from '@navigation/StackNavigation';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    // <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}
