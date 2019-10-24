import React from 'react';
import AppContainer from './main/navigation/AppNavigator';
import { requestBlePermission } from './main/permissions/Permissions';

export default class App extends React.Component {
  render() {
    requestBlePermission();
    
    return <AppContainer />;
  }
}

