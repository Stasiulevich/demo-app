import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, HStack, IBoxProps, IButtonProps, Pressable, Text, View } from 'native-base';
import CustomIcon from '@components/UI/CustomIcon';
import { TCustomIcons } from '@components/UI/CustomIcon/types';
import { Colors } from '@constants/Theme';

type TCustomButton = IButtonProps & {
  boxStyles?: { [key in keyof IBoxProps]: IBoxProps[keyof IBoxProps] };
  icon?: TCustomIcons;
  iconSize?: number;
  children?: string;
  color?: string;
  iconSpace?: number | string;
};

const ButtonIcon = ({ onPress, boxStyles, icon, iconSize, children, color, iconSpace, ...rest }: TCustomButton) => {
  const boxStylesObj = boxStyles || {};
  const defaultColor = color || Colors.grey.heading;

  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => (
        <Box {...boxStylesObj} opacity={isPressed ? 0.5 : 1}>
          <HStack space={iconSpace || 3} alignItems="center">
            {icon ? <CustomIcon color={defaultColor} size={iconSize} name={icon} /> : null}
            <Text color={defaultColor}>{children}</Text>
          </HStack>
        </Box>
      )}
    </Pressable>
  );
};

export default observer(ButtonIcon);
