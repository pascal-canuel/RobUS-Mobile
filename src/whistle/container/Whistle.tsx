import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';
import Toast from '../../main/component/Toast';

export default class Whistle extends Component {
  whistle = () => {
    // Todo
    Toast('Nani');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.descTxt}>Taper pour appeler votre chien!</Text>
        <TouchableOpacity style={styles.whistleBtn} onPress={this.whistle} activeOpacity={0.7}>
          <Icon name="bell-ring" size={240} color={Colors.secondary}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const whistleBtnRatio = Dimensions.get('window').width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descTxt: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  whistleBtn: {
    width: whistleBtnRatio,
    height: whistleBtnRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
})