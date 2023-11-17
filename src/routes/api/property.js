"ust strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/properties",
    handler: async (request) => {
      try {
        const db = request.server.plugins.sql.client;

        const propertyID = "1";
        const res = await db.property.getProperty(propertyID);

        return res.recordset;
      } catch (err) {
        console.log(err);
      }
    },
  });
};
