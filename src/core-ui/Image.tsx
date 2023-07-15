import React from 'react';
import {
  ImageStyle,
  Image as BaseImage,
  ImageSourcePropType,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  source: ImageSourcePropType;
};

export function Image(props: Props) {
  let { containerStyle, imageStyle, source, ...otherProps } = props;

  return (
    <View style={containerStyle}>
      <BaseImage source={source} style={imageStyle} {...otherProps} />
    </View>
  );
}
