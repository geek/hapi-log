'use strict';

const OS = require('os');
const Hapi = require('@hapi/hapi');
const Log = require('@hapi/log');
const Pinologger = require('./pinologger');

const main = async () => {

    const logger = new Pinologger();
    // Include these additional fields in the logger output JSON
    const additionalFields = { name: 'example', pid: process.pid, hostname: OS.hostname() };

    const server = new Hapi.Server({ port: 8080 });
    await server.register({ plugin: Log, options: { logger, additionalFields } });

    server.route({ method: 'GET', path: '/', handler: () => 'success' });
    server.route({ method: 'GET', path: '/err', handler: () => new Error('foo') });
    await server.start();
};

main();
