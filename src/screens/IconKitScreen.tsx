import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { Row, Text, View } from 'native-base';
import CustomIcon, { iconsMapFromConfig } from '@components/UI/CustomIcon/CustomIcon';
import { StyleSheet } from 'react-native';

const icons = [
  'array-next',
  'array-prev',
  'more-vertical',
  'archive',
  'arrow-left',
  'award',
  'bell',
  'bookmark',
  'bookmark-bold',
  'box',
  'check',
  'check-circle',
  'chevron-down',
  'close',
  'close-bold',
  'corner-up-left',
  'cursor',
  'download',
  'edit',
  'facebook',
  'file-text',
  'flag',
  'globe',
  'instagram',
  'linkedin',
  'logo',
  'log-out',
  'mail',
  'menu',
  'message-circle',
  'plus',
  'plus-circle',
  'membership',
  'question',
  'reputation',
  'search',
  'settings',
  'share',
  'star',
  'start',
  'thumbs-up',
  'trash',
  'user',
  'user-check',
  'users',
  'volume-x',
];

/*
 * не хватающие иконки либо кривые, которые надо переделать и залить заново
 * cursor
 * reputation
 * start (star-bold)
 * */

const IconKitScreen = () => {
  const renderItem = ({ item }: { item: string }) => (
    <Row m={2}>
      {/* @ts-ignore */}
      <CustomIcon size={24} name={item} />
      <Text pl={3}>{item}</Text>
    </Row>
  );

  return <FlashList numColumns={2} data={iconsMapFromConfig} renderItem={renderItem} estimatedItemSize={24} />;
};

export default IconKitScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
