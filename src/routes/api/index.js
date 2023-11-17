"use strict";

const property = require("./property");

module.exports.register = async (server) => {
  await property.register(server);
};
