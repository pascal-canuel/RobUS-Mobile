import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../main/styles/Template';
import BleManager from '../../main/ble/BleManager';

interface State {
  posSelected: number[];
  selectedBtn: number;
}

export default class Path extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = { 
      posSelected: [],
      selectedBtn: -1,
     };
  }

  startPath = () => {
    // let str = 'MOVE';
    // this.state.posSelected.forEach(pos => str += pos);
    BleManager.write('MOVE' + this.state.selectedBtn);
  }

  pressPos = (id: number) => {
    if (this.state.posSelected.includes(id)) {
      this.filterPos(id);
    } else {
      this.selectPos(id);
    }
  }

  selectBtn =(id: number)=> {
    this.setState({selectedBtn: id==this.state.selectedBtn?-1:id})
    
  }

  selectPos = (id: number) => {
    this.setState({posSelected: [...this.state.posSelected, id]});
  }

  clearPos = () => this.setState({posSelected: []});

  filterPos = (id: number) => {
    this.setState({posSelected: this.state.posSelected.filter(posId => posId != id)});
  }

  displayIndex = (id: number) => {
    const index = this.state.posSelected.findIndex(posId => posId == id)
    if (index == -1) {
      return "";
    } else {
      return index + 1;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.desc}>Sélectionner un trajet</Text>
        <View style={styles.trajet}>
          <TouchableOpacity style={this.state.selectedBtn==0?styles.selectedBtn:styles.posBtn} onPress={() =>this.selectBtn(0)} activeOpacity={0.7}>
            <Text style={styles.clearTxt}>
              Court
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.selectedBtn==1?styles.selectedBtn:styles.posBtn} onPress={() => this.selectBtn(1)} activeOpacity={0.7}>
            <Text style={styles.clearTxt}>
              Long
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.startBtn} onPress={this.startPath} activeOpacity={0.7}>
          <Text style={styles.startTxt}>Commencer</Text>
          <Icon style={styles.startIcon} name="dog-service" size={30} color="white" />
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  posView: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  posLines: {
    borderColor: 'black',
    borderWidth: 5,
    width: 160,
    height: 160,
    position: 'absolute',
    zIndex: 1,
  },
  posRow: {
    flexDirection: 'row',
  },
  posBtn: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryLight,
    zIndex: 2,
    margin: 25,
  },
  posTxt: {
    fontSize: 24,
    color: 'white',
  },
  clearBtn: {
    width: btnWidth,
    height: btnHeight,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  clearTxt: {
    color: 'white',
    fontSize: 24,
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
    paddingTop: 20,
    paddingBottom: 20,
  },
  startTxt: {
    color: 'white',
    fontSize: 24,
  },
  startIcon: {
    marginLeft: 10,
  },
  trajet: {
    flexDirection: 'row',
    margin: 40,
  },
  selectedBtn: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  Colors.secondary,
    zIndex: 2,
    margin: 25,
  },
})
