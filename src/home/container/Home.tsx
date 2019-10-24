import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
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
  disableConnectionBtn: boolean;
}

export default class Home extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      devices: [],
      selectedDevice: null,
      isConnected: false,
      disableConnectionBtn: false
    };
  }

  scan = () => {
    BluetoothSerial.list().then((devices: Device[]) => this.setState({devices}) );
  }
  
  setSelectedDevice = (device: Device) => this.setState({selectedDevice: device})

  toggleConnection = () => {
    this.setState({disableConnectionBtn: true});
    if (this.state.isConnected) {
      BluetoothSerial.disconnect()
        .then(() => {
          this.setState({
            isConnected: false,
            disableConnectionBtn: false,
            devices: [...this.state.devices] // fix to reload flatlist and update selected device style
          });
          BluetoothSerial.isConnected().then((res: boolean) => console.log(res));
        });
    } else {
      BluetoothSerial.connect(this.state.selectedDevice!.id)
        .then(() => {
          this.setState({
            isConnected: true, 
            disableConnectionBtn: false,
            devices: [...this.state.devices]
          });
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
        <FlatList
          data={this.state.devices}
          renderItem={({item}) =>
            <TouchableOpacity 
              style={this.state.selectedDevice && item.id === this.state.selectedDevice.id && this.state.isConnected? styles.connectedDeviceBtn : styles.deviceBtn} 
              onPress={() => this.setSelectedDevice(item)} 
              activeOpacity={0.7}
            >
              <Text style={styles.deviceTxt}>{item.name}</Text>
            </TouchableOpacity>
          }
          keyExtractor={item => item.id}
          style={styles.deviceList}
        />
        {this.state.selectedDevice &&
          <TouchableOpacity style={styles.connectionBtn} onPress={this.toggleConnection} disabled={this.state.disableConnectionBtn} activeOpacity={0.7}>
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
    marginTop: 20,
    margin: 5,
    width: btnWidth,
  },
  searchTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  searchIcon : {
    marginLeft: 10,
  },
  deviceList: {
    maxHeight: Dimensions.get('window').height * 0.65,
  },
  deviceBtn: {
    width: btnWidth,
  },
  connectedDeviceBtn: {
    width: btnWidth,
    backgroundColor: Colors.secondary,
  },
  deviceTxt: {
    fontSize: 20,
  },
  connectionBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: btnWidth,
    margin: 5,
    backgroundColor: Colors.primaryLight,
  },
  connectionTxt: {
    fontSize: 24,
    color: 'white',
  },
})