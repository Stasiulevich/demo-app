import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import useCachedResources from '@hooks/useCachedResources';
import { RootSiblingParent } from 'react-native-root-siblings';
import Navigation from '@navigation';
import useColorScheme from '@hooks/useColorScheme';
import useAuth from '@hooks/useAuth';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native';
import { brandTheme } from '@theme';

export default function App() {
  const isLoadingComplete = useCachedResources(); // todo: use single hook for initialize app
  const isAuthCheckComplete = useAuth(); // todo: use single hook for initialize app
  const colorScheme = useColorScheme();

  if (!isLoadingComplete || !isAuthCheckComplete) {
    return null;
  } else {
    return (
      <RootSiblingParent>
        <NativeBaseProvider theme={brandTheme}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar style={'dark'} />
          {/* <SafeAreaView /> */}
        </NativeBaseProvider>
      </RootSiblingParent>
    );
  }
}

registerRootComponent(App);
