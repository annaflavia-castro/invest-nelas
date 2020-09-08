import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

import TripButton from './components/TripButton';
import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';
import SettingsScreen from './screens/Settings';
import NotificationsScreen from './screens/Notifications';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: MaterialIcons,
    name: 'home'
  },
  Building: {
    lib: MaterialIcons,
    name: 'domain'
  },
  Wallet: {
    lib: Feather,
    name: 'wallet'
  },
  Planer: {
    lib: AntDesign,
    name: 'planer'
  }
};

export default function Navigation() {
  return (
    <Tab.Navigator 
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name == 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')} 
                focused={focused}
              />
            );
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#ee3957',
        inactiveTintColor: '#000'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
        }}
      />

      <Tab.Screen
        name="Explorer"
        component={WalletScreen}
        options={{
          title: '',
        }}
      />

      <Tab.Screen 
        name="Trip" 
        component={PayScreen}
        options={{
          title: '',
        }}
      />

      <Tab.Screen 
        name="Wallet" 
        component={NotificationsScreen}
        options={{
          title: '',
        }}
      />

      <Tab.Screen 
        name="Planner" 
        component={SettingsScreen}
        options={{
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};
