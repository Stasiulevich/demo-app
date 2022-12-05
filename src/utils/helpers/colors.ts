import Color from 'tinycolor2';

export const transparentize = (color: string, opacity: number): string => Color(color).setAlpha(opacity).toRgbString();
