import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../../home/container/Home';
import Path from '../../path/container/Path';
import Food from '../../food/container/Food';
import Whistle from '../../whistle/container/Whistle';

import { Colors } from '../styles/Template';
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
    Path: {
      screen: Path,
      navigationOptions: {
        tabBarLabel: "Trajet",
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} name="map-marker-path" />
        )
      },
    },
    Food: {
      screen: Food,
      navigationOptions: {
        tabBarLabel: "Distribution",
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} name="bone" />
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
    tabBarOptions: {
      inactiveTintColor: Colors.primary,
      activeTintColor: Colors.secondary,
    },
  },
)

export default createAppContainer(TabNavigator);