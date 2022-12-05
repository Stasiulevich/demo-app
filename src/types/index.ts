import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { rootStore } from '@store';

export * from './projects';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootDrawerParamList = {
  Nest: undefined;
};

export type RootTabParamList = {
  Projects: undefined;
  Activities: undefined;
};

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<RootDrawerParamList> | undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type THeader = {
  isHeader: boolean;
};

export type RootStoreType = typeof rootStore;

export type TParams = {
  count?: string;
  page?: number;
  'sort-by'?: string;
  'sort-order'?: string;
  q?: string;
};
