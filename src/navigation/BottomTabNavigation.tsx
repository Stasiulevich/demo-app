import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '~types';
import * as React from 'react';
import { useLayoutEffect } from 'react';
import Projects from '@modules/Projects';
import Activities from '@modules/Activities';
import { useNavigation } from '@react-navigation/native';
import ButtonIcon from '@components/UI/ButtonIcon';
import CustomIcon from '@components/UI/CustomIcon';
import { Colors } from '@constants/Theme';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ButtonIcon iconSize={24} pr={2} iconSpace={1} icon={'plus'} boxStyles={{ pr: 3 }} />,
    });
  }, []);

  return (
    <BottomTab.Navigator
      // safeAreaInsets={{ bottom: 20 }}
      sceneContainerStyle={{ backgroundColor: '#fff' }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.green.main,
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <CustomIcon size={size} name={'bulb'} color={color} />,
        }}
        name={'Projects'}
        component={Projects}
      />
      <BottomTab.Screen
        name={'Activities'}
        component={Activities}
        options={{
          tabBarIcon: ({ color, size }) => <CustomIcon size={size} name={'box'} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
