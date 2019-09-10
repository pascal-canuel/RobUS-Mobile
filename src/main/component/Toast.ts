import Toast from 'react-native-root-toast';
import { Colors } from '../styles/Template';

export default (msg: string) => {
    Toast.show(msg, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM - 50,
        shadow: true,
        animation: true,
        hideOnPress: true,
        backgroundColor: Colors.secondary,
        shadowColor: Colors.primary,
        textStyle: {
            marginLeft: 5,
            marginRight: 5,
        },
    });
}