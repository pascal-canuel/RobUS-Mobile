import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';

interface State {
  bleAddrs: string[];
}

export default class Home extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { bleAddrs: [] };
  }

  searchBleDevices = () => {
    // Todo
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchBtn} onPress={this.searchBleDevices} activeOpacity={0.7}>
          <Text style={styles.searchTxt}>Trouver un promeneur</Text>
          <Icon name="bluetooth" size={30} color={Colors.primary}/>
        </TouchableOpacity>
        {this.state.bleAddrs.map((addr) => <Text>{addr}</Text>)}
      </View>
    );
  }
}

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
  },
  searchTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  }
})