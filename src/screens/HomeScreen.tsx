import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '../core-ui';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen will be coming soon</Text>
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
