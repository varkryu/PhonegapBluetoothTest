cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-bluetooth/ble.js",
        "id": "cordova-plugin-bluetooth.BLE",
        "pluginId": "cordova-plugin-bluetooth",
        "clobbers": [
            "evothings.ble"
        ]
    },
    {
        "file": "plugins/cordova-plugin-bluetooth-serial/www/bluetoothSerial.js",
        "id": "cordova-plugin-bluetooth-serial.bluetoothSerial",
        "pluginId": "cordova-plugin-bluetooth-serial",
        "clobbers": [
            "window.bluetoothSerial"
        ]
    },
    {
        "file": "plugins/cordova-plugin-bluetooth-serial/src/browser/bluetoothSerial.js",
        "id": "cordova-plugin-bluetooth-serial.BluetoothSerial_browser",
        "pluginId": "cordova-plugin-bluetooth-serial",
        "clobbers": [
            "window.bluetoothSerial"
        ]
    },
    {
        "file": "plugins/cordova-plugin-bluetooth-status/BluetoothStatus.js",
        "id": "cordova-plugin-bluetooth-status.BluetoothStatus",
        "pluginId": "cordova-plugin-bluetooth-status",
        "clobbers": [
            "cordova.plugins.BluetoothStatus"
        ]
    },
    {
        "file": "plugins/cordova-plugin-bluetoothle/www/bluetoothle.js",
        "id": "cordova-plugin-bluetoothle.BluetoothLe",
        "pluginId": "cordova-plugin-bluetoothle",
        "clobbers": [
            "window.bluetoothle"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-bluetooth": "2.0.4",
    "cordova-plugin-bluetooth-serial": "0.4.7",
    "cordova-plugin-bluetooth-status": "1.0.4",
    "cordova-plugin-bluetoothle": "4.5.3",
    "cordova-plugin-whitelist": "1.3.3"
}
// BOTTOM OF METADATA
});