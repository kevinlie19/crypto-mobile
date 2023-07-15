import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { HomeScreen } from '../screens/HomeScreen';
import { DiscoverScreen } from '../screens/DiscoverScreen';
import { MarketScreen } from '../screens/MarketScreen';
import { WalletScreen } from '../screens/WalletScreen';
import { AccountScreen } from '../screens/AccountScreen';
import { COLORS, SHADOW } from '../constants';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const tabOptions = {
    tabBarActiveTintColor: COLORS.icon.activeTabIcon,
  };

  return (
    <Tab.Navigator
      initialRouteName="Market"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <IonIcons name={focused ? 'home' : 'home-outline'} size={size} />
          ),
          ...tabOptions,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <IonIcons name={focused ? 'book' : 'book-outline'} size={size} />
          ),
          ...tabOptions,
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <IonIcons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              size={size}
            />
          ),
          tabBarStyle: {
            ...SHADOW,
          },
          ...tabOptions,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <IonIcons
              name={focused ? 'wallet' : 'wallet-outline'}
              size={size}
            />
          ),
          ...tabOptions,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <IonIcons
              name={focused ? 'person' : 'person-outline'}
              size={size}
            />
          ),
          ...tabOptions,
        }}
      />
    </Tab.Navigator>
  );
}
