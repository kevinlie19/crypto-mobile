import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '../core-ui';

export function MarketScreen() {
  return (
    <View style={styles.container}>
      <Text>MARKET</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
