import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';
import BleManager from '../../main/ble/BleManager';

export default class Home extends Component {
  scan = () => {
    // Todo
    BleManager.Instance.scan();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchBtn} onPress={this.scan} activeOpacity={0.7}>
          <Text style={styles.searchTxt}>Trouver un promeneur</Text>
          <Icon style={styles.searchIcon} name="bluetooth" size={30} color={Colors.primary}/>
        </TouchableOpacity>
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