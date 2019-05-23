cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-bluetooth.BLE",
      "file": "plugins/cordova-plugin-bluetooth/ble.js",
      "pluginId": "cordova-plugin-bluetooth",
      "clobbers": [
        "evothings.ble"
      ]
    },
    {
      "id": "cordova-plugin-bluetoothle.BluetoothLe",
      "file": "plugins/cordova-plugin-bluetoothle/www/bluetoothle.js",
      "pluginId": "cordova-plugin-bluetoothle",
      "clobbers": [
        "window.bluetoothle"
      ]
    },
    {
      "id": "cordova-plugin-bluetooth-status.BluetoothStatus",
      "file": "plugins/cordova-plugin-bluetooth-status/BluetoothStatus.js",
      "pluginId": "cordova-plugin-bluetooth-status",
      "clobbers": [
        "cordova.plugins.BluetoothStatus"
      ]
    },
    {
      "id": "cordova-plugin-bluetooth-serial.bluetoothSerial",
      "file": "plugins/cordova-plugin-bluetooth-serial/www/bluetoothSerial.js",
      "pluginId": "cordova-plugin-bluetooth-serial",
      "clobbers": [
        "window.bluetoothSerial"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-bluetooth": "2.0.4",
    "cordova-plugin-bluetoothle": "4.5.3",
    "cordova-plugin-bluetooth-status": "1.0.4",
    "cordova-plugin-bluetooth-serial": "0.4.7"
  };
});