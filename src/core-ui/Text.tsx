import React from 'react';
import {
  Text as BaseText,
  StyleProp,
  TextStyle,
  TextProps,
} from 'react-native';

import { COLORS, TextColorType, TEXT_VARIANTS } from '../constants';

type Props = {
  style?: StyleProp<TextStyle>;
  variant?: keyof typeof TEXT_VARIANTS;
  color?: TextColorType;
} & TextProps;

export function Text(props: Props) {
  let {
    style,
    variant = 'regular',
    color = 'primary',
    children,
    ...otherProps
  } = props;

  return (
    <BaseText
      style={[{ ...TEXT_VARIANTS[variant], color: COLORS.text[color] }, style]}
      {...otherProps}
    >
      {children}
    </BaseText>
  );
}
