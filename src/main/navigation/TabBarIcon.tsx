import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Todo components
interface Props {
    focused: boolean;
    name: string;
}

export const HomeIcon = <Icon name="dog" size={30} color="black" />;
export const TrajectIcon = <Icon name="map-marker-path" size={30} color="black" />;
export const DistributionIcon = <Icon name="food-apple" size={30} color="black" />;
export const WhistleIcon = <Icon name="whistle" size={30} color="black" />;