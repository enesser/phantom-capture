/*
    Phantom Capture 1.x
    Error handler
 */

'use strict';

/* global console, module, phantom: true */

module.exports = {
    getErrorHandler: function(msg, trace) {
        var msgStack = ['PHANTOM ERROR: ' + msg];
        if (trace && trace.length) {
            msgStack.push('TRACE:');
            trace.forEach(function(t) {
                msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function+')' : ''));
            });
        }
        console.error(msgStack.join('\n'));
        phantom.exit(1);
    }
};