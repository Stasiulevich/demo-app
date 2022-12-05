import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, Center, FormControl, Heading, Row, ScrollView, Select, Text, VStack } from 'native-base';
import { useStore } from '@hooks/useStore';
import { useNavigation } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import { TLoginSchema } from '@utils/validation';
import TextInputField from '@components/UI/TextInputField';
import { Colors } from '@constants/Theme';
// import { ScrollView } from 'react-native';

const SignUp = () => {
  const { authStore } = useStore();
  const navigation = useNavigation();

  const methods = useForm<TLoginSchema>({
    // resolver: yupResolver(loginSchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await authStore.login(data);
  });

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Box safeArea bg={'#fff'} flexGrow={1} minH={'100%'}>
      <ScrollView alignSelf="center" minW="100%">
        <Box w="100%" minH="100%" flexGrow={1}>
          <Center minW={'100%'} alignItems={'center'} justifyContent={'center'} flexGrow={1}>
            <Heading mb={8}>Join now</Heading>
            <FormProvider {...methods}>
              <VStack width="90%" space={2} maxW={400}>
                <TextInputField fieldName="firstName" label="Name" />
                <TextInputField fieldName="lastName" label="Last Name" />
                <TextInputField fieldName="email" label="E-mail" />
                <TextInputField fieldName="password" label="Password" secureTextEntry />
                <TextInputField fieldName="confirmPassword" label="Confirm password" secureTextEntry />
                <FormControl isRequired>
                  <FormControl.Label>{'Your industry'}</FormControl.Label>
                  <Select h={44} placeholder="Choose your industry" size={'lg'}>
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                  </Select>
                </FormControl>
                <Button isDisabled onPress={onSubmit} mt="5">
                  Register
                </Button>
                <Row alignItems={'center'} justifyContent={'center'}>
                  <Text color={Colors.grey.main}>Have account?</Text>
                  <Button onPress={handleSignIn} variant={'link'}>
                    Sign In
                  </Button>
                </Row>
              </VStack>
            </FormProvider>
          </Center>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default observer(SignUp);
