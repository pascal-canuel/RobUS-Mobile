import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    focused: boolean;
    name: string;
}

export default ({focused, name}: Props) => <Icon name={name} size={30} color={focused? "black" : "blue"}/>