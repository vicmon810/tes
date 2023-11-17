"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
    const sqlQueries = await utils.loadSqlQuery("property");

    const getProperty = async (property_ID) => {
      const cnx = await getConnection();
      const request = await cnx.request();
      request.input("property_ID", sql.varchar( 100 ), property_ID);
      return request.query( sqlQueries.getProperty );
    };
    return {
      getProperty,
    };
};

module.exports = { register };