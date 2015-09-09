/*
    Phantom Capture 1.x
 */

'use strict';

/* global console, require, phantom: true */

var errorHandler = require('./lib/errorHandler');
var argParser = require('./lib/argParser');
var args = argParser.getArguments();
var screenCapturer = require('./lib/screenCapturer');
var devices = require('./lib/devices');

//setup error handler
phantom.onError = errorHandler.getErrorHandler;

if (args.url) {
    screenCapturer.saveScreenshots(args.url, args.host,
        devices.filter(function(data) {
            return data.active;
        }), args.saveLocation);
} else {
    console.log('usage: phantomjs pc.js [url] [output directory]');
    phantom.exit();
}