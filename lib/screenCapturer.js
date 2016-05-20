/*
    Phantom Capture 1.x
    Screen capturer
 */

'use strict';

/* global console, require, module, phantom: true */

var nameSanitizer = require('./nameSanitizer');

/**
 * Save screenshot using device
 * @param  {string}   url
 * @param  {string}   host
 * @param  {object}   device
 * @param  {string}   saveLocation
 * @param  {Function} callback
 */
function saveScreenshotDevice(url, host, device, saveLocation, callback) {
    var page = require('webpage').create();
    page.viewportSize = {
        width: device.width,
        height: device.height
    };

    if (device.userAgent) {
        page.settings.userAgent = device.userAgent;
    }

    page.open(url, function(status) {
        if (status === 'success') {
            var filename = saveLocation + '/' + nameSanitizer.getSanitizedName(host) + '-' +
                nameSanitizer.getSanitizedName(device.name) + '.png';
            console.log('Capturing', url, 'on', device.name, '(' + device.width + 'x' + device.height + ')');
            page.render(filename);
            console.log('Saved', filename);
        } else {
            console.log('Unable to load', url, ' on ', device.name);
        }
        page.close();
        callback.apply();
    });
}

module.exports = {

    /**
     * Save screenshots
     * @param  {string} url
     * @param  {string} host
     * @param  {object} devices
     * @param  {string} saveLocation
     */
    saveScreenshots: function(url, host, devices, saveLocation) {
        function saveScreenshot() {
            var device = devices.length > 0 ? devices.pop() : null;
            if (device) {
                saveScreenshotDevice(url, host, device, saveLocation, saveScreenshot);
            } else {
                phantom.exit();
            }
        }
        saveScreenshot();
    }
};
