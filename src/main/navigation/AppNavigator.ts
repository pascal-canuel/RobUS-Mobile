import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../../home/container/Home';
import Traject from '../../traject/container/Traject';
import Distribution from '../../distribution/container/Distribution';
import Whistle from '../../whistle/container/Whistle';

import {HomeIcon, TrajectIcon, DistributionIcon, WhistleIcon} from './TabBarIcon';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: HomeIcon,
      }
    },
    Traject: {
      screen: Traject,
      navigationOptions: {
        tabBarIcon: TrajectIcon,
      }
    },
    Distribution: {
      screen: Distribution,
      navigationOptions: {
        tabBarIcon: DistributionIcon,
      }
    },
    Whistle: {
      screen: Whistle,
      navigationOptions: {
        tabBarIcon: WhistleIcon,
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(TabNavigator);
