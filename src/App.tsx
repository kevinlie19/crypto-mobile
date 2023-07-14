import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import { LoadingIndicator } from './core-ui/LoadingIndicator';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingIndicator />;
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
