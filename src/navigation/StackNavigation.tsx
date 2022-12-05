import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '~types';
import * as React from 'react';
import SignInScreen from '@screens/SignInScreen';
import SignUpScreen from '@screens/SignUpScreen';
import { useStore } from '@hooks/useStore';
import { observer } from 'mobx-react-lite';
import { useColorMode } from 'native-base';
import DrawerNavigation from '@navigation/DrawerNavigation';
import { SafeAreaView } from 'react-native';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { authStore } = useStore();
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authStore.isAuth ? (
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              animationTypeForReplace: authStore.isAuth ? 'pop' : 'push',
            }}
          />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default observer(RootNavigator);
