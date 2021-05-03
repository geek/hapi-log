'use strict';

const EventEmitter = require('events');
const Hoek = require('@hapi/hoek');

const internals = {};

class Pinologger extends EventEmitter {
    constructor() {

        super();
    }
}

[
    'emergency',
    'alert',
    'critical',
    'error'
].forEach((level) => {

  Pinologger.prototype[level] = function (msg, data, additionalFields) {

        const stringified = internals.stringify(level, msg, data, additionalFields);
        process.stdout.write(`${stringified}\n`);
    };
});

[
    'warning',
    'notice',
    'info',
    'debug',
    'log'
].forEach((level) => {

  Pinologger.prototype[level] = function (msg, data, additionalFields) {

        const stringified = internals.stringify(level, msg, data, additionalFields);
        process.stdout.write(`${stringified}\n`);
    };
});

internals.stringify = function (level, msg, data, additionalFields = {}) {

    let pinoLevel = 30;
    switch (level) {
      case 'log':
        pinoLevel = 10;
      case 'debug':
        pinoLevel = 20;
      case 'info':
        pinoLevel = 30;
      case 'notice':
      case 'warning':
        pinoLevel = 40;
      case 'error':
        pinoLevel = 50;
      default:
        pinoLevel = 60;
    }
    const obj = {
        level: pinoLevel,
        time: Date.now(),
        msg
    };
    Hoek.merge(obj, additionalFields);

    if (data !== undefined && data !== null) {
        obj.data = data;
    }

    return Hoek.stringify(obj);
};

module.exports = Pinologger;
