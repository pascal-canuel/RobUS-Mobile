import BluetoothSerial from 'react-native-bluetooth-serial';
import ErrorToast from '../component/ErrorToast';
import Toast from '../component/Toast';

function write(data: string) {
  BluetoothSerial.isConnected().then((res: boolean) => {
    if (res) {
      BluetoothSerial.write(data)
        .then(() => Toast('Réussi'));
    } else {
      ErrorToast('Aucun promeneur connecté');
    }
    console.log(res);
  });
} 

export default { write };
