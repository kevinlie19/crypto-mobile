import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Text, TextInput } from '../core-ui';
import { CurrencyList, ScrollingSorts } from '../components';
import { COLORS } from '../constants';
import { MOCK_CURRENCY_DATA } from '../constants/mockData';
import { SupportedCryptoCurrencies } from '../hooks/useQueryCryptoList';
import { CryptoCurrencyPrice } from '../hooks/useQueryCryptoPrice';

export type CombinedCurrencyData = SupportedCryptoCurrencies & {
  price: CryptoCurrencyPrice;
};

export function MarketScreen() {
  // Cannot bypass cors error on react native, so the data is all dummy from real pintu public api data
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          containerStyle={styles.textInputContainer}
          placeholder="Search asset"
          leftIcon={
            <FeatherIcon
              name="search"
              color={COLORS.icon.searchIcon}
              size={20}
            />
          }
        />
        <View style={styles.filterContainer}>
          <AntDesignIcon name="filter" size={20} />
          <Text>Filter</Text>
        </View>
      </View>
      <View>
        <ScrollingSorts />
      </View>
      <FlatList
        data={MOCK_CURRENCY_DATA}
        keyExtractor={(item) => item.currencySymbol}
        renderItem={({ item }) => {
          return <CurrencyList data={item} />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBackgroundColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 12,
  },
  textInputContainer: {
    flex: 4,
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 6,
  },
  filterText: {
    fontWeight: '700',
  },
});
