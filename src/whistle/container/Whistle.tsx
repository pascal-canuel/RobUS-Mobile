import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';
import BleManager from '../../main/ble/BleManager';

interface State{
  squetuveux:boolean;
}

export default class Whistle extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = { 
      squetuveux: false,
     };
  }

  whistle = () => {
    BleManager.write('WHISTLE');
  };

  IsPlay = () => {
    BleManager.write(this.state.squetuveux?"PAUSE": "PLAY");
    this.setState({squetuveux:!this.state.squetuveux})
  };

  previous = () => {
    if (!this.state.squetuveux)
      this.setState({squetuveux: true});
    BleManager.write("LAST");
  };

  next = () => {
    if (!this.state.squetuveux)
      this.setState({squetuveux: true});
    BleManager.write("NEXT");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.descTxt}>Taper pour appeler votre chien!</Text>
        <View style={styles.music}>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="skip-backward" onPress={this.previous} size={100} color={Colors.secondary}/>
          </TouchableOpacity> 
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name={this.state.squetuveux?"pause":"play"} onPress={this.IsPlay} size={100} color={Colors.secondary}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="skip-forward" onPress={this.next} size={100} color={Colors.secondary}/>
          </TouchableOpacity> 
        </View>
        {/* <TouchableOpacity style={styles.whistleBtn} onPress={this.whistle} activeOpacity={0.7}>
          <Icon name="bell-ring" size={240} color={Colors.secondary}/>
        </TouchableOpacity> */}
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
    marginTop: 300,
  },
  whistleBtn: {
    width: whistleBtnRatio,
    height: whistleBtnRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  music:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
  },
})