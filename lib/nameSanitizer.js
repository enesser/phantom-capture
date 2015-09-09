/*
    Phantom Capture 1.x
    Name sanitizer
 */

'use strict';

/* global module: true */

var illegalCharacters = /[\/\?<>\\:\*\|":]/g;
var illegalControlCharacters = /[\x00-\x1f\x80-\x9f]/g;
var illegalReserved = /^\.+$/;
var illegalReservedWindows = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;

module.exports = {
    getSanitizedName: function(text) {
        return text
            .replace(/\ /g, '-')
            .replace(/\./g, '-')
            .replace(illegalCharacters, '')
            .replace(illegalControlCharacters, '')
            .replace(illegalReserved, '')
            .replace(illegalReservedWindows, '');
    }
};