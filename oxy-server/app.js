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
    path: '/concentrations/last',
    handler: (request, h) => {

      return queries.getLastConcentrations()
        .then(x => x)
    }
  });

  server.route({
    method: 'GET',
    path: '/concentrations',
    handler: (request, h) => {

      const { from, to } = request.query

      return queries.getConcentrations(from, to)
        .then(x => x)
    }
  });

  server.route({
    method: 'GET',
    path: '/concentrations/daily-avg',
    handler: (request, h) => {

      const { from, to } = request.query

      return queries.getDailyAvgConcentrations(from, to)
        .then(x => x)
    }
  });

  server.route({
    method: 'POST',
    path: '/concentrations',
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