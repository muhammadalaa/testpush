cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-console.console",
    "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
    "pluginId": "cordova-plugin-console",
    "clobbers": [
      "console"
    ]
  },
  {
    "id": "cordova-plugin-console.logger",
    "file": "plugins/cordova-plugin-console/www/logger.js",
    "pluginId": "cordova-plugin-console",
    "clobbers": [
      "cordova.logger"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-fcm.FCMPlugin",
    "file": "plugins/cordova-plugin-fcm/www/FCMPlugin.js",
    "pluginId": "cordova-plugin-fcm",
    "clobbers": [
      "FCMPlugin"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-console": "1.0.7",
  "cordova-plugin-dialogs": "1.2.1",
  "cordova-plugin-fcm": "2.1.2",
  "cordova-plugin-inappbrowser": "1.3.0",
  "cordova-plugin-splashscreen": "3.2.2",
  "cordova-plugin-statusbar": "2.1.3",
  "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});