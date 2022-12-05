import React, { FC } from 'react';
import { RootStackScreenProps } from '~types';
import SignIn from '@modules/SignIn';
import { SafeAreaView } from 'react-native';

const SignInScreen: FC<RootStackScreenProps<'SignIn'>> = () => (
  <>
    <SafeAreaView style={{ backgroundColor: 'white' }} />
    <SignIn />
  </>
);

export default SignInScreen;
