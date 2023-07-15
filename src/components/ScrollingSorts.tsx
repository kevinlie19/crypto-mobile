import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, FONT_SIZES } from '../constants';
import { Text } from '../core-ui';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

type SortItemProps = {
  value: string;
};

const SortItem = ({ value }: SortItemProps) => {
  return (
    <View style={styles.sortItemContainer}>
      {value === 'Trading Vol.' ? (
        <FontAwesomeIcon name="line-chart" size={16} />
      ) : value === 'Market Cap' ? (
        <MaterialIcons name="insert-chart-outlined" size={20} />
      ) : value === '24H Changes' ? (
        <FeatherIcon name="percent" size={16} />
      ) : (
        <MaterialComunityIcons name="bank-outline" size={16} />
      )}
      <Text style={styles.sortText}>{value}</Text>
      <FontAwesomeIcon name="sort" size={14} />
    </View>
  );
};

export const ScrollingSorts = (props: Props) => {
  const { containerStyle } = props;

  const MOCK_SORTS = ['Trading Vol.', 'Market Cap', '24H Changes', 'Price'];

  return (
    <ScrollView
      contentContainerStyle={[styles.container, containerStyle]}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {MOCK_SORTS.map((item, index) => (
        <SortItem key={index} value={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sortItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: Dimensions.get('window').width / 2,
  },
  sortText: {
    fontSize: FONT_SIZES.xs,
    marginHorizontal: 8,
  },
});
