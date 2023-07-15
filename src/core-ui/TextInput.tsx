import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput as BaseTextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import { COLORS } from '../constants';

type Props = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  leftIcon?: JSX.Element;
};

export const TextInput = (props: Props) => {
  const {
    containerStyle,
    inputContainerStyle,
    textInputStyle,
    leftIcon,
    ...otherProps
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {leftIcon && leftIcon}
        <BaseTextInput
          style={[styles.baseTextInputStyle, textInputStyle]}
          {...otherProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 24,
    borderRadius: 8,
    backgroundColor: COLORS.textInput.backgroundColor,
  },
  baseTextInputStyle: {
    width: '100%',
    height: 40,
    padding: 8,
  },
});
