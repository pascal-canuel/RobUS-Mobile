import { PermissionsAndroid } from 'react-native';

export async function requestBlePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Ble permission',
        message: 'Nani',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use Ble');
    } else {
      console.log('Ble permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}