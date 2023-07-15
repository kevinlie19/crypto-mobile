import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { COLORS } from '../constants';
import { Image, Text } from '../core-ui';
import { CombinedCurrencyData } from '../screens/MarketScreen';
import { formattedPercentage } from '../helpers/textFormatter';
import {
  numberToCurrency,
  numberToPercentage,
} from '../helpers/numberFormatter';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  data: CombinedCurrencyData;
};

export const CurrencyList = (props: Props) => {
  const { containerStyle, data } = props;

  const isMinus = data.price.day.includes('-');

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Because of cors error, cannot load currency's logo */}
      <Image source={{ uri: data.logo }} />
      <View style={styles.rowCenter}>
        <View style={styles.leftSectionContainer}>
          <Text variant="title">{data.name}</Text>
          <Text variant="subtitle" color="secondary">
            {data.currencySymbol}
          </Text>
        </View>
        <View style={styles.rightSectionContainer}>
          <Text variant="title">
            {numberToCurrency({ num: Number(data.price.latestPrice) })}
          </Text>
          <View style={styles.rowCenter}>
            <MaterialIcons
              name={isMinus ? 'arrow-drop-down' : 'arrow-drop-up'}
              color={isMinus ? COLORS.text.down : COLORS.text.up}
              size={36}
              style={{ marginVertical: -8 }}
            />
            <Text color={isMinus ? 'down' : 'up'}>
              {formattedPercentage(
                numberToPercentage({ num: Number(data.price.day) }),
              )}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  rowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSectionContainer: {
    gap: 4,
  },
  rightSectionContainer: {
    alignItems: 'flex-end',
    gap: 4,
  },
});
