import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './navigation/AppNavigator';
import { LoadingIndicator } from './core-ui/LoadingIndicator';

// Create a client
const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
}
