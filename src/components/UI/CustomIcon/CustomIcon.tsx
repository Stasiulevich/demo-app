import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons/build/createIconSet';
import icoMoonConfig from './selection.json';
import { TCustomIcons } from '@components/UI/CustomIcon/types';

export const iconsMapFromConfig = icoMoonConfig.icons.map((icon) => icon.properties.name);
// console.log('ICONS', iconsMapFromConfig.map((i) => `"${i}"`).join(' | '));

const customIcons = createIconSetFromIcoMoon(icoMoonConfig, 'bionabu', 'bionabu.ttf');
// todo: recheck all icon name and recreate them
const icons = customIcons as Icon<TCustomIcons, TCustomIcons>;
/* const icons = customIcons as Icon<
  | 'array-next'
  | 'array-prev'
  | 'more-vertical'
  | 'archive'
  | 'arrow-left'
  | 'award'
  | 'bell'
  | 'bookmark'
  | 'bookmark-bold'
  | 'box'
  | 'check'
  | 'check-circle'
  | 'chevron-down'
  | 'close'
  | 'close-bold'
  | 'corner-up-left'
  | 'cursor'
  | 'download'
  | 'edit'
  | 'facebook'
  | 'file-text'
  | 'flag'
  | 'globe'
  | 'instagram'
  | 'linkedin'
  | 'logo'
  | 'log-out'
  | 'mail'
  | 'menu'
  | 'message-circle'
  | 'plus'
  | 'plus-circle'
  | 'membership'
  | 'question'
  | 'reputation'
  | 'search'
  | 'settings'
  | 'share'
  | 'star'
  | 'start'
  | 'thumbs-up'
  | 'trash'
  | 'user'
  | 'user-check'
  | 'users'
  | 'volume-x',
  string
>; */

export default icons;
