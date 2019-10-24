import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';
import BluetoothSerial from 'react-native-bluetooth-serial';

interface Device {
  id: string;
  name: string;
  address: string;
}

interface State {
  devices: Device[];
  selectedDevice: Device | null;
  isConnected: boolean;
}

export default class Home extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      devices: [],
      selectedDevice: null,
      isConnected: false
    };
  }

  scan = () => {
    console.log('list');
    BluetoothSerial.list().then((devices: Device[]) => {
      this.setState({devices}, () => console.log(this.state.devices));
      console.log(devices);
    });
}
  
  setSelectedDevice = (device: Device) => this.setState({selectedDevice: device})

  toggleConnection = () => {
    console.log('toggle connection');
    if (this.state.isConnected) {
      BluetoothSerial.disconnect()
        .then(() => {
          this.setState({isConnected: false});
          BluetoothSerial.isConnected().then((res: boolean) => console.log(res));
        });
    } else {
      console.log('try connection');
      BluetoothSerial.connect(this.state.selectedDevice!.id)
        .then(() => {
          this.setState({isConnected: true});
          BluetoothSerial.isConnected().then((res: boolean) => console.log(res));
        });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchBtn} onPress={this.scan} activeOpacity={0.7}>
          <Text style={styles.searchTxt}>Trouver un promeneur</Text>
          <Icon style={styles.searchIcon} name="bluetooth" size={30} color={Colors.primary}/>
        </TouchableOpacity>
        {this.state.devices.map(device => 
          <TouchableOpacity onPress={() => this.setSelectedDevice(device)} activeOpacity={0.7}>
            <Text>{device.name}</Text>
          </TouchableOpacity>
        )}
        {this.state.selectedDevice &&
          <TouchableOpacity style={styles.connectionBtn} onPress={this.toggleConnection} activeOpacity={0.7}>
            <Text style={styles.connectionTxt}>{this.state.isConnected? "Déconnecter" : "Connecter"}</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const btnWidth = Dimensions.get('window').width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: btnWidth,
  },
  searchTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  searchIcon : {
    marginLeft: 10,
  },
  connectionBtn: {
    width: btnWidth,
    backgroundColor: 'red',
  },
  connectionTxt: {
    fontSize: 20,
  },
})