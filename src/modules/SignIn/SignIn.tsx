import React from 'react';
import { StyleSheet } from 'react-native';
import { useStore } from '@hooks/useStore';
import { Button, Center, Heading, Row, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import { loginSchema, TLoginSchema } from '@utils/validation';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import TextInputField from '@components/UI/TextInputField';
import { Colors } from '@constants/Theme';
import { REGISTRATION_FIELDS } from '@constants/common';

const SignIn = () => {
  const { authStore } = useStore();
  const navigation = useNavigation();

  const methods = useForm<TLoginSchema>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      [REGISTRATION_FIELDS.EMAIL]: 'bio-test-reg@mailto.plus',
      [REGISTRATION_FIELDS.PASSWORD]: 'qwerty',
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await authStore.login(data);
  });

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Center bg={'white'} flexGrow={1}>
      <Heading mb={8}>Sign in</Heading>
      <FormProvider {...methods}>
        <VStack width="90%" space={2} maxW={400}>
          <TextInputField fieldName="email" label="E-mail" />
          <TextInputField fieldName="password" label="Password" secureTextEntry />
          <Button onPress={onSubmit} mt="5">
            Submit
          </Button>
          <Row mt={4} alignItems={'center'} justifyContent={'center'}>
            <Button variant={'link'}>Forgot password?</Button>
          </Row>
          <Row alignItems={'center'} justifyContent={'center'}>
            <Text color={Colors.grey.main}>Not registered?</Text>
            <Button onPress={handleSignUp} variant={'link'}>
              Sign Up
            </Button>
          </Row>
        </VStack>
      </FormProvider>
    </Center>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  screen: {},
});
