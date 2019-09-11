import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './main/navigation/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

