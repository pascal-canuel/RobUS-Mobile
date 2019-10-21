import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';

export default class Path extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.desc}>Sélectionner un trajet</Text>
        <TouchableOpacity style={styles.clearBtn} activeOpacity={0.7}>
          <Text style={styles.clearTxt}>Effacer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBtn} activeOpacity={0.7}>
          <Text style={styles.startTxt}>Commencer</Text>
          <Icon name="dog-service" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}

const btnWidth = Dimensions.get('window').width * 0.8;
const btnHeight = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearBtn: {
    width: btnWidth,
    height: btnHeight,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
  },
  clearTxt: {
    color: 'white',
  },
  startBtn: {
    width: btnWidth,
    height: btnHeight,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
  },
  startTxt: {
    color: 'white',
  },
})
