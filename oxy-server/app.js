'use strict';

const Hapi = require('@hapi/hapi');
const queries = require('./queries.js');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return queries.getConcentrations()
                .then(x => x)
        }
    });

    server.route({
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            var ppm = request.payload.ppm;
            return queries.insertConcentration(ppm)
                .then(x => x)
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();