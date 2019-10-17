import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../../home/container/Home';
import Traject from '../../traject/container/Traject';
import Distribution from '../../distribution/container/Distribution';
import Whistle from '../../whistle/container/Whistle';

import TabBarIcon from './TabBarIcon';

export const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel:"Accueil",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="dog" />
        )
      },
    },
    Traject: {
      screen: Traject,
      navigationOptions: {
        tabBarLabel: "Trajet",
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} name="map-marker-path" />
        )
      },
    },
    Distribution: {
      screen: Distribution,
      navigationOptions: {
        tabBarLabel: "Distribution",
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} name="food-apple" />
        )
      },
    },
    Whistle: {
      screen: Whistle,
      navigationOptions: {
        tabBarLabel: "Sifflet",
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} name="whistle" />
        )
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
)

export default createAppContainer(TabNavigator);