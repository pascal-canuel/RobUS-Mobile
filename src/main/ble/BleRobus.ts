import { BleManager, Device } from 'react-native-ble-plx';
import base64 from 'react-native-base64';

type Action = "PATH" | "FOOD" | "WHSL";

export default class BleRobus {
    private static _instance: BleRobus;

    private _manager: BleManager | null;
    private _device: Device | null;

    private constructor() {
        this._manager = new BleManager();
        this._device = null
    }

    static get Instance() {
        return this._instance || (this._instance = new this());
    }

    scan(delay: number) {
        return new Promise<Device[]>(resolve => {
            let devices: Device[];
            this._manager!.startDeviceScan(null, null, (error, device) => {
                if (error) {
                    // Handle error (scanning will be stopped automatically)
                    return
                }
                if (device != null) {
                    devices.push(device);
                }
            });

            setTimeout(() => {
                this._manager!.stopDeviceScan();
                resolve(devices);
            }, delay);
        })
    }

    connect(device: Device) {
        this._device = device;
        device.connect();
    }

    private write(action: Action) {
        if (this._device != null) {
            this._device.isConnected().then(isConnected => {
                if (isConnected) {
                    const encodedData = base64.encode(action);
                    // device.writeCharacteristicWithResponseForService('', '', encodedData);
                    const decodedData = base64.decode(encodedData);
                }
            })
        }
    }

    /*
        index 4-7 = position (0, 1, 2, 3)
        value = step priority (-1: no stop)
    */
    executePath() {
        // Todo
        this.write("PATH");
    }

    distributeFood() {
        // Todo
        this.write("FOOD");
    }

    whistle() {
        // Todo
        this.write("WHSL");
    }
}