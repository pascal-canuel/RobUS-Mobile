import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';

export default class Distribution extends Component {
  distribution = () => {
    // Todo
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.descTxt}>Taper pour donner de la nourrite à votre chien!</Text>
        <TouchableOpacity style={styles.distributionBtn} onPress={this.distribution} activeOpacity={0.7}>
          <Icon name="bone" size={240} color={Colors.secondary}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const distributionBtnRatio = Dimensions.get('window').width * 0.8;

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
  distributionBtn: {
    width: distributionBtnRatio,
    height: distributionBtnRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
})