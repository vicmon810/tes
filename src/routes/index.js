"use strict";

// const { server } = require( "@hapi/hapi" );

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      return "test";
    },
  });
};
