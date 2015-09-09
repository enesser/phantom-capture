/*
    Phantom Capture 1.x
    Argument parser
 */

'use strict';

/* global require, module: true */

var sys = require('system');

/**
 * Get URL host
 * @param  {string}      text
 * @return {string}      host of url supplied in text
 */
function getUrlHost(text) {
    var domain;
    if (text.indexOf('://') > -1) {
        domain = text.split('/')[2];
    } else {
        domain = text.split('/')[0];
    }
    return domain.split(':')[0];
}

module.exports = {

    /**
     * Get arguments
     * @return {object}     program arguments
     */
    getArguments: function() {
        var args = sys.args;
        var url = args.length > 1 ? args[1] : null;
        var host = url ? getUrlHost(url) : null;
        var saveLocation = args.length > 2 ? args[2] : '.';

        return {
            args: args,
            url: url,
            host: host,
            saveLocation: saveLocation
        };
    }
};