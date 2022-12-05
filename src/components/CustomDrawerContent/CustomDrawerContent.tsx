import React from 'react';
import { observer } from 'mobx-react-lite';
import { Avatar, Box, HStack, Icon, Pressable, ScrollView, Text, VStack } from 'native-base';
import { useStore } from '@hooks/useStore';
import CustomIcon from '@components/UI/CustomIcon';
import { Colors } from '@constants/Theme';
import ButtonIcon from '@components/UI/ButtonIcon/ButtonIcon';
import { iconMapping } from '@components/CustomDrawerContent/helpers';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { transparentize } from '@utils/helpers/colors';
import { getAvatarUrl } from '@utils/helpers/links';
import { Image } from 'react-native';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { authStore } = useStore();
  const { user } = authStore;
  const avatarUri = user.profileImageUrl ? getAvatarUrl(user.profileImageUrl) : '';
  const fallbackAvatar = user.firstName && user.lastName && user.firstName[0] + user.lastName[0];

  const handlePress = async () => {
    await authStore.logout();
  };

  return (
    <Box {...props} safeArea style={{ flex: 1, height: '100%', paddingBottom: 0 }}>
      <VStack h={'100%'} flexGrow={1} justifyContent={'space-between'}>
        <Box px="4" borderBottomWidth={1} borderBottomColor={'coolGray.200'}>
          {/* todo: hack for working avatar uri, improve later */}
          <Image source={{ uri: avatarUri }} />
          <Avatar mb={2} source={{ uri: avatarUri }}>
            {fallbackAvatar}
          </Avatar>
          <Text mb={2} fontSize="14" mt="1" color="gray.500" fontWeight="500">
            {user.firstName} {user.lastName}
          </Text>
        </Box>
        <ScrollView flexGrow={1}>
          <VStack>
            {props.state.routeNames.map((name: string, index: number) => (
              <Pressable
                key={name}
                px="4"
                py="3"
                bg={index === props.state.index ? transparentize(Colors.green.main, 0.1) : 'transparent'}
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="3" alignItems="center">
                  <Icon
                    color={index === props.state.index ? 'brand.primary' : 'brand.secondary'}
                    size="5"
                    as={<CustomIcon name={iconMapping[name]} />}
                  />
                  <Text fontWeight="500" color={index === props.state.index ? 'brand.primary' : 'brand.secondary'}>
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </ScrollView>
        <Box h={'56px'} bg={Colors.grey.secondary} m={0} p={0} alignItems={'flex-start'} justifyContent={'center'}>
          <ButtonIcon onPress={handlePress} icon={'log-out'} iconSize={22} boxStyles={{ pl: 4 }}>
            Log Out
          </ButtonIcon>
        </Box>
      </VStack>
    </Box>
  );
};

export default observer(CustomDrawerContent);
