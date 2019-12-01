import React, { Component } from 'react';
import {View, Text, Slider, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import BleManager from '../../main/ble/BleManager';
import {Colors} from "../../main/styles/Template";

interface State {
    speed: number;
    kP: number;
    kI: number;
    kD: number;
}

export default class Pid extends Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            speed: 0.15,
            kP: 0.05,
            kI: 0,
            kD: 0.02,
        };
    }

    setSpeed = (speed: number) => this.setState({speed: Number(speed.toFixed(3))});
    setkP = (kP: number) => this.setState({kP: Number(kP.toFixed(3))});
    setkI = (kI: number) => this.setState({kI: Number(kI.toFixed(3))});
    setkD = (kD: number) => this.setState({kD: Number(kD.toFixed(3))});

    sendSpeed = () => BleManager.write("SPEED" + this.state.speed);
    sendkP = () => BleManager.write("kP" + this.state.kP);
    sendkI = () => BleManager.write("kI" + this.state.kI);
    sendkD = () => BleManager.write("kD" + this.state.kD);

    setDefault = () => {
        this.setState({
            speed: 0.15,
            kP: 0.05,
            kI: 0,
            kD: 0.02,
        })

        // send
        BleManager.write("RESET_PID");
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.labelTxt}>Vitesse</Text>
                <Slider
                    style={{width: 300, height: 30}}
                    value={this.state.speed}
                    onValueChange={this.setSpeed}
                    minimumValue={0}
                    maximumValue={1}
                    step={0.005}
                    thumbTintColor={Colors.primary}
                    minimumTrackTintColor={Colors.primaryLight}
                    maximumTrackTintColor={Colors.secondary}
                    onTouchEnd={this.sendSpeed}
                />
                <Text style={styles.valueTxt}>{this.state.speed}</Text>

                <Text style={styles.labelTxt}>kP</Text>
                <Slider
                    style={{width: 300, height: 30}}
                    value={this.state.kP}
                    onValueChange={this.setkP}
                    minimumValue={0}
                    maximumValue={0.1}
                    step={0.001}
                    thumbTintColor={Colors.primary}
                    minimumTrackTintColor={Colors.primaryLight}
                    maximumTrackTintColor={Colors.secondary}
                    onTouchEnd={this.sendkP}
                />
                <Text style={styles.valueTxt}>{this.state.kP}</Text>

                <Text style={styles.labelTxt}>kI</Text>
                <Slider
                    style={{width: 300, height: 30}}
                    value={this.state.kI}
                    onValueChange={this.setkI}
                    minimumValue={0}
                    maximumValue={0.1}
                    step={0.001}
                    thumbTintColor={Colors.primary}
                    minimumTrackTintColor={Colors.primaryLight}
                    maximumTrackTintColor={Colors.secondary}
                    onTouchEnd={this.sendkI}
                />
                <Text style={styles.valueTxt}>{this.state.kI}</Text>

                <Text style={styles.labelTxt}>kD</Text>
                <Slider
                    style={{width: 300, height: 30}}
                    value={this.state.kD}
                    onValueChange={this.setkD}
                    minimumValue={0}
                    maximumValue={0.1}
                    step={0.001}
                    thumbTintColor={Colors.primary}
                    minimumTrackTintColor={Colors.primaryLight}
                    maximumTrackTintColor={Colors.secondary}
                    onTouchEnd={this.sendkD}
                />
                <Text style={styles.valueTxt}>{this.state.kD}</Text>

                <TouchableOpacity style={styles.resetBtn} onPress={this.setDefault} activeOpacity={0.7}>
                    <Text style={styles.resetTxt}>Réinitialiser</Text>
                </TouchableOpacity>
            </View>   
        )
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
    resetBtn: {
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
    resetTxt: {
        color: 'white',
        fontSize: 24,
    },
    labelTxt: {
        fontSize: 20,
    },
    valueTxt: {
        marginBottom: 10,
    }
})