import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../styles/Template';

interface Props {
    focused: boolean;
    name: string;
}

export default ({focused, name}: Props) => <Icon name={name} size={30} color={focused? Colors.secondary : Colors.primary}/>