import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

// import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
