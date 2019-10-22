import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';
import { BleManager, Device } from 'react-native-ble-plx';
import base64 from 'react-native-base64';

interface State {
  bleDevices: Device[];
}

export default class Home extends Component<{}, State> {
  manager = new BleManager();

  constructor(props: any) {
    super(props);
    this.state = { bleDevices: [] };
  }

  searchBleDevices = () => {
    this.manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
            // Handle error (scanning will be stopped automatically)
            return
        }
        if (device != null) {
          this.setState({bleDevices: [...this.state.bleDevices, device]});
        }
    });
  }

  sendMsgBleDevice = (device: Device) => {
    const encodedData = base64.encode('Hello, world');
    device.writeCharacteristicWithResponseForService('', '', encodedData);
    const decodedData = base64.decode(encodedData);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchBtn} onPress={this.searchBleDevices} activeOpacity={0.7}>
          <Text style={styles.searchTxt}>Trouver un promeneur</Text>
          <Icon style={styles.searchIcon} name="bluetooth" size={30} color={Colors.primary}/>
        </TouchableOpacity>
        {this.state.bleDevices.map(bleDevice => <Text>{bleDevice.name}</Text>)}
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
})