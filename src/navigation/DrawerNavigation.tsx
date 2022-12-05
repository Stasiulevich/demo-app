import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import IconKitScreen from '@screens/IconKitScreen';
import { BottomTabNavigator } from '@navigation/BottomTabNavigation';
import ButtonIcon from '@components/UI/ButtonIcon';
import CustomDrawerContent from '@components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerLeft: () => <ButtonIcon iconSize={24} boxStyles={{ px: 4 }} icon={'menu'} onPress={toggleDrawer} />,
      }}
    >
      <Drawer.Screen name="Nest" component={BottomTabNavigator} />
      <Drawer.Screen name="Icons" component={IconKitScreen} />
    </Drawer.Navigator>
  );
}
