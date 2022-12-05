import React, { FC } from 'react';
import { RootStackScreenProps } from '~types';
import SignUp from '@modules/SignUp';

const SignUpScreen: FC<RootStackScreenProps<'SignUp'>> = () => <SignUp />;

export default SignUpScreen;
