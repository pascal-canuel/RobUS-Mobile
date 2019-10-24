import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';
import Toast from '../../main/component/Toast';
import BluetoothSerial from 'react-native-bluetooth-serial';

export default class Food extends Component {
  foodDistribution = () => {
    // Todo
    BluetoothSerial.isConnected().then((res: boolean) => {
      if (res) {
        BluetoothSerial.write('Buffalo ice LOL').then(() => Toast('Nani'));
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.descTxt}>Taper pour donner de la nourrite à votre chien!</Text>
        <TouchableOpacity style={styles.foodBtn} onPress={this.foodDistribution} activeOpacity={0.7}>
          <Icon name="bone" size={240} color={Colors.secondary}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const foodBtnRatio = Dimensions.get('window').width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  foodBtn: {
    width: foodBtnRatio,
    height: foodBtnRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
})